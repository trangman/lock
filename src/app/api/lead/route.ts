import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown> = {};
    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      body = await req.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const form = await req.formData();
      body = Object.fromEntries(form.entries());
    }

    const {
      name,
      email,
      phone,
      service,
      city,
      source,
      pageUrl,
      referrer,
      userAgent,
      timeToSubmitSec,
      honeypot,
    } = (body ?? {}) as {
      name?: string;
      email?: string;
      phone?: string;
      service?: string;
      city?: string;
      source?: string;
      pageUrl?: string;
      referrer?: string;
      userAgent?: string;
      timeToSubmitSec?: number | null;
      honeypot?: string;
    };

    // Basic validation
    if (honeypot) {
      return new Response(JSON.stringify({ ok: false, error: 'Spam detected' }), { status: 400 });
    }
    if (!name || !phone) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), { status: 400 });
    }
    if (typeof timeToSubmitSec === 'number' && timeToSubmitSec < 2) {
      return new Response(JSON.stringify({ ok: false, error: 'Form submitted too quickly' }), { status: 400 });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      return new Response(JSON.stringify({ ok: false, error: 'N8N webhook not configured' }), { status: 500 });
    }

    // Enrich with request metadata
    const ipHeader = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
    const ip = ipHeader.split(',')[0]?.trim();
    const ua = userAgent || req.headers.get('user-agent') || '';

    const payload = {
      name,
      email: email || '',
      phone,
      service: service || '',
      city: city || '',
      source: source || 'unknown',
      pageUrl: pageUrl || '',
      referrer: referrer || '',
      userAgent: ua,
      ip: ip || '',
      timeToSubmitSec: typeof timeToSubmitSec === 'number' ? timeToSubmitSec : null,
      timestamp: new Date().toISOString(),
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).catch(() => {
      return new Response('Request failed', { status: 500 });
    });

    clearTimeout(timeout);

    if (res instanceof Response) {
      if (!res.ok) {
        return new Response(JSON.stringify({ ok: false, error: 'Webhook failed' }), { status: 502 });
      }
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid request' }), { status: 400 });
  }
}


