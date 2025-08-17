import { ImageResponse } from 'next/og';

export const alt = 'Locksmith Yorkshire';
export const size = { width: 1200, height: 630 } as const;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg,#1e3a8a,#2563eb)',
          color: 'white',
          padding: 64,
          fontSize: 56,
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9 }}>Locksmith Yorkshire</div>
        <div style={{ fontWeight: 800, marginTop: 16 }}>Professional Locksmith Services</div>
        <div style={{ fontSize: 24, marginTop: 12, opacity: 0.9 }}>24/7 • Emergency • Residential • Commercial</div>
        <div style={{ fontSize: 22, marginTop: 24, opacity: 0.9 }}>Call 0800-123-4567</div>
      </div>
    ),
    {
      ...size,
    }
  );
}


