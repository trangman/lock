export interface CityData {
  name: string;
  slug: string;
  county: string;
  population?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  // Optional: enhanced location data for SEO
  postcodes?: string[];
  landmarks?: string[];
  neighborhoods?: string[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    h1: string;
    content: string[];
  };
  // Optional: last content update date for stable sitemap lastmod
  updatedAt?: string; // ISO date string, e.g., "2024-12-01"
  // Optional: sponsored locksmith for this city
  sponsor?: {
    active: boolean;
    name: string;
    url?: string;
    phone?: string;
    displayPhone?: string;
    address?: string;
    rating?: number;
    reviews?: number;
    since?: string; // e.g., "2024-11"
    description?: string;
  };
  // Optional: featured locksmith listings for this city
  featuredListings?: Array<{
    name: string;
    url: string;
    rating?: number;
    reviews?: number;
    phone?: string;
    address?: string;
    blurb?: string;
  }>;
}

export const yorkshireCities: CityData[] = [
  // Major Cities
  {
    name: "Leeds",
    slug: "leeds",
    county: "West Yorkshire",
    population: 789194,
    coordinates: { lat: 53.8008, lng: -1.5491 },
    postcodes: ["LS1", "LS2", "LS3", "LS4", "LS5", "LS6", "LS7", "LS8", "LS9", "LS10", "LS11", "LS12", "LS13", "LS14", "LS15", "LS16", "LS17", "LS18", "LS19", "LS20", "LS21", "LS22", "LS23", "LS24", "LS25", "LS26", "LS27", "LS28", "LS29"],
    landmarks: ["Leeds Train Station", "University of Leeds", "Leeds General Infirmary", "Briggate Shopping Street", "Roundhay Park", "Headingley Stadium", "Leeds Arena", "Royal Armouries", "Kirkstall Abbey", "Trinity Shopping Centre"],
    neighborhoods: ["City Centre", "Headingley", "Hyde Park", "Kirkstall", "Roundhay", "Chapel Allerton", "Harehills", "Armley", "Beeston", "Holbeck", "Meanwood", "Adel"],
    seo: {
      title: "Emergency Locksmith Leeds - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Leeds covering all LS postcodes. 24/7 emergency lockout, UPVC repairs, student housing security. Fast response across Leeds city centre, Headingley, Hyde Park. Licensed and insured.",
      keywords: "locksmith leeds, emergency locksmith leeds, locksmith leeds city centre, residential locksmith leeds, commercial locksmith leeds, locksmith headingley, locksmith hyde park, UPVC door repairs leeds, student housing security leeds, locksmith LS1 LS2 LS3 LS4 LS5 LS6",
      h1: "Emergency Locksmith Leeds - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Leeds available 24/7 covering all LS postcodes from LS1 city centre to LS29 Wetherby. Our Leeds locksmith team provides fast emergency response across Headingley, Hyde Park, Chapel Allerton, Roundhay, and all major neighborhoods in Yorkshire's largest city.",
        "Our Leeds locksmith service covers the entire city including the bustling city centre (LS1), student areas of Headingley (LS6) and Hyde Park (LS2), residential areas like Roundhay (LS8) and Chapel Allerton (LS7), and commercial districts throughout Leeds. We understand the unique security challenges of Leeds' diverse housing stock from Victorian terraces to modern apartment complexes.",
        "Emergency lockout response times in Leeds average just 12 minutes to city centre locations near Leeds Train Station, Briggate, and the business district. Whether you're locked out near the University of Leeds campus, Leeds General Infirmary, or shopping at Trinity Centre, our local Leeds locksmiths carry full equipment for immediate assistance with any lock type.",
        "Leeds students make up a significant portion of our clientele, with specialized services for the dense student housing areas of Headingley, Hyde Park, and Woodhouse. We provide security upgrades for shared student properties, quick key cutting near campus, and emergency lockout services that understand the unique needs of student accommodation with multiple occupants.",
        "Commercial locksmith services in Leeds cover the expanding business district, retail units along Briggate and Commercial Street, offices in the financial quarter, and industrial premises in areas like Holbeck and Hunslet. Our Leeds commercial clients include law firms, medical practices near the hospital quarter, and retail businesses requiring high-security solutions.",
        "Leeds' climate presents unique challenges with frequent rain and winter freezing affecting lock mechanisms, particularly in older Victorian properties common throughout Headingley, Chapel Allerton, and inner-city areas. Our Leeds locksmiths carry specialized equipment for weather-damaged locks and provide preventive maintenance advice for Yorkshire's harsh winters.",
        "UPVC door lock problems are extremely common in Leeds housing estates and newer developments around areas like Middleton, Belle Isle, and Seacroft. Our Leeds team specializes in multi-point locking systems, handles stuck doors caused by settlement in newer builds, and provides same-day UPVC door repairs throughout all LS postcodes.",
        "Security concerns in Leeds vary by area, with city centre car parks requiring vehicle locksmith services, student areas needing enhanced residential security, and business districts requiring access control systems. We provide tailored security solutions based on Leeds' specific crime patterns and work closely with West Yorkshire Police community safety initiatives.",
        "Our Leeds locksmith service includes 24/7 emergency response to Leeds Bradford Airport, major hotels in the city centre, and transport hubs including the train station and bus stations. We maintain rapid response capabilities for the large transient population of business travelers, tourists, and students who frequently require emergency locksmith assistance in Leeds."
      ]
    }
  },
  {
    name: "Sheffield",
    slug: "sheffield",
    county: "South Yorkshire",
    population: 518090,
    coordinates: { lat: 53.3811, lng: -1.4701 },
    postcodes: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14", "S17", "S20", "S21", "S25", "S26", "S35", "S36"],
    landmarks: ["Sheffield Train Station", "University of Sheffield", "Sheffield Hallam University", "Crucible Theatre", "Sheffield Cathedral", "Meadowhall Shopping Centre", "Don Valley Stadium", "Winter Garden", "Millennium Gallery", "Peak District Gateway"],
    neighborhoods: ["City Centre", "Ecclesall", "Hillsborough", "Heeley", "Crookes", "Walkley", "Broomhill", "Nether Edge", "Sharrow", "Kelham Island", "Attercliffe", "Dore"],
    seo: {
      title: "Emergency Locksmith Sheffield - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Sheffield covering all S postcodes. 24/7 emergency lockout, steel city security solutions, student accommodation locks. Fast response across Sheffield city centre, Ecclesall, Hillsborough. Licensed and insured.",
      keywords: "locksmith sheffield, emergency locksmith sheffield, locksmith sheffield city centre, residential locksmith sheffield, commercial locksmith sheffield, locksmith ecclesall, locksmith hillsborough, steel city locksmith, student locksmith sheffield, locksmith S1 S2 S3 S4 S5 S6 S7 S8",
      h1: "Emergency Locksmith Sheffield - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Sheffield, the Steel City, available 24/7 covering all S postcodes from S1 city centre to S36 Oxspring. Our Sheffield locksmith team provides rapid emergency response across Ecclesall, Hillsborough, Broomhill, and all neighborhoods in South Yorkshire's largest city, serving both universities and the diverse residential communities.",
        "Sheffield's unique topography with its seven hills and industrial heritage creates distinct security challenges across different areas. From the steep terraced streets of Crookes and Walkley to the modern developments in Kelham Island and the leafy suburbs of Ecclesall and Dore, our Sheffield locksmiths understand the specific lock and security requirements of each neighborhood's housing types.",
        "Emergency lockout services in Sheffield average 10-15 minute response times to city centre locations near Sheffield Train Station, the Winter Garden, and Fargate shopping area. Whether you're locked out near the University of Sheffield campus in the Western Bank area, Sheffield Hallam University buildings, or at Meadowhall Shopping Centre, our local Sheffield locksmiths provide immediate assistance.",
        "Sheffield's large student population across both universities requires specialized locksmith services for student accommodation in areas like Crookes, Broomhill, Ecclesall Road, and the city centre. We provide security upgrades for shared student houses, rapid key cutting services near campus areas, and understand the unique access challenges of Sheffield's steep terrain and older converted properties.",
        "Commercial locksmith services in Sheffield serve the city's diversified economy from traditional steel industry sites in Attercliffe and Don Valley to modern business parks, retail units in the city centre and Meadowhall, and the growing digital and creative sectors in Kelham Island. Our Sheffield commercial clients benefit from our understanding of both heritage industrial buildings and modern commercial developments.",
        "Sheffield's position on the edge of the Peak District means variable weather conditions that can affect lock mechanisms, particularly in exposed hilltop areas and older stone properties. Our Sheffield locksmiths carry specialized equipment for weather-related lock problems and provide maintenance advice for the city's challenging climate conditions with frequent temperature variations.",
        "The city's mix of Victorian terraces, post-war housing estates, and modern developments presents diverse lock and security challenges. From traditional mortice locks in Nether Edge and Sharrow to modern UPVC systems in newer estates around Mosborough and Halfway, our Sheffield team handles all lock types with expertise in the city's varied architectural landscape.",
        "Sheffield's cultural venues including the Crucible Theatre, Lyceum Theatre, and numerous music venues require specialized access control and security systems. We provide emergency locksmith services for entertainment venues, hotels, and the thriving hospitality sector, ensuring rapid response during events and peak tourism periods when Sheffield hosts major snooker championships and festivals.",
        "Our Sheffield locksmith service extends to specialized industrial and commercial security for the city's remaining steel works, advanced manufacturing facilities in the Lower Don Valley, and the growing technology sector. We maintain expertise in high-security commercial locks, access control systems, and work with South Yorkshire Police on commercial security initiatives across Sheffield's diverse industrial base."
      ]
    }
  },
  {
    name: "Bradford",
    slug: "bradford",
    county: "West Yorkshire",
    population: 537173,
    coordinates: { lat: 53.7950, lng: -1.7594 },
    postcodes: ["BD1", "BD2", "BD3", "BD4", "BD5", "BD6", "BD7", "BD8", "BD9", "BD10", "BD11", "BD12", "BD13", "BD14", "BD15", "BD16", "BD17", "BD18", "BD19", "BD20", "BD21", "BD22", "BD23", "BD24"],
    landmarks: ["Bradford Interchange", "University of Bradford", "National Science and Media Museum", "Bradford Cathedral", "Alhambra Theatre", "Cartwright Hall", "Lister Park", "Bradford City Hall", "Saltaire World Heritage Site", "Bolling Hall"],
    neighborhoods: ["City Centre", "Manningham", "Heaton", "Shipley", "Bingley", "Keighley", "Saltaire", "Thornton", "Clayton", "Great Horton", "Little Horton", "Wibsey"],
    seo: {
      title: "Emergency Locksmith Bradford - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Bradford covering all BD postcodes. 24/7 emergency lockout, multicultural community security, heritage building locks. Fast response across Bradford city centre, Manningham, Heaton, Shipley. Licensed and insured.",
      keywords: "locksmith bradford, emergency locksmith bradford, locksmith bradford city centre, residential locksmith bradford, commercial locksmith bradford, locksmith manningham, locksmith heaton, locksmith shipley, heritage building locksmith bradford, locksmith BD1 BD2 BD3 BD4 BD5 BD6",
      h1: "Emergency Locksmith Bradford - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Bradford, UNESCO City of Film, available 24/7 covering all BD postcodes from BD1 city centre to BD24 in the Yorkshire Dales. Our Bradford locksmith team provides expert emergency response across Manningham, Heaton, Shipley, and all areas of this culturally diverse West Yorkshire city with its rich industrial heritage.",
        "Bradford's unique architectural landscape includes Victorian wool merchants' mansions in Heaton, traditional stone terraces throughout Manningham and Great Horton, the UNESCO World Heritage Site of Saltaire, and modern developments across the district. Our Bradford locksmiths specialize in both heritage building security and contemporary lock systems for this diverse cityscape.",
        "Emergency lockout response in Bradford averages 12-15 minutes to city centre locations near Bradford Interchange, the National Science and Media Museum, and Forster Square. Whether you're locked out near the University of Bradford campus, Bradford Royal Infirmary, or at one of the many cultural venues, our local Bradford locksmiths provide immediate professional assistance.",
        "Bradford's vibrant multicultural community creates unique security needs across different neighborhoods, from the bustling South Asian business district around Manningham Lane to the leafy suburban areas of Heaton and Shipley. Our Bradford locksmith team understands the specific security requirements of different property types and cultural preferences throughout the district.",
        "Commercial locksmith services in Bradford serve the city's diverse economy including textile heritage businesses, modern retail developments, restaurants and takeaways along the famous 'curry mile', and professional services in the city centre. Our Bradford commercial clients benefit from our experience with both traditional commercial properties and modern business developments.",
        "Bradford's position in the Pennine foothills means exposure to harsh weather conditions that can affect lock mechanisms, particularly in elevated areas like Heaton, Thornton, and the outer villages. Our Bradford locksmiths carry specialized equipment for weather-damaged locks and provide maintenance advice for the challenging Yorkshire climate and stone building settlements.",
        "The district's mix of listed buildings, Victorian terraces, and modern housing estates requires expertise in diverse lock types and security systems. From period properties in Saltaire requiring heritage-appropriate security solutions to UPVC door problems in newer developments around Wyke and Wibsey, our Bradford team handles all requirements with appropriate expertise.",
        "Bradford's cultural significance as a UNESCO City of Film and its numerous festivals and events create peak demand periods for our locksmith services. We provide specialized support for venues like the Alhambra Theatre, St George's Hall, and the many community centers that host Bradford's renowned festivals, ensuring rapid response during major cultural events.",
        "Our Bradford locksmith service includes expertise in security for the city's educational institutions including the University of Bradford, Bradford College campuses, and numerous schools across the district. We understand the specific access control and security requirements of educational facilities and provide rapid response for student accommodation and campus security needs."
      ]
    }
  },
  {
    name: "Hull",
    slug: "hull",
    county: "East Yorkshire",
    population: 260200,
    coordinates: { lat: 53.7443, lng: -0.3325 },
    postcodes: ["HU1", "HU2", "HU3", "HU4", "HU5", "HU6", "HU7", "HU8", "HU9", "HU10", "HU11", "HU12", "HU13", "HU14", "HU15", "HU16", "HU17", "HU18", "HU19", "HU20"],
    landmarks: ["Hull Paragon Interchange", "University of Hull", "The Deep Aquarium", "Hull Maritime Museum", "Ferens Art Gallery", "Hull New Theatre", "KCOM Stadium", "Hull Fair", "Humber Bridge", "Old Town"],
    neighborhoods: ["City Centre", "Anlaby", "Cottingham", "Hessle", "Willerby", "Kirk Ella", "Newland", "Beverley Road", "Holderness Road", "Spring Bank", "Avenues", "Pearson Park"],
    seo: {
      title: "Emergency Locksmith Hull - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Hull covering all HU postcodes. 24/7 emergency lockout, maritime city security, coastal weather locks. Fast response across Hull city centre, Anlaby, Cottingham, Hessle. Licensed and insured.",
      keywords: "locksmith hull, emergency locksmith hull, locksmith hull city centre, residential locksmith hull, commercial locksmith hull, locksmith anlaby, locksmith cottingham, locksmith hessle, maritime locksmith hull, locksmith HU1 HU2 HU3 HU4 HU5 HU6",
      h1: "Emergency Locksmith Hull - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Hull, officially Kingston upon Hull, available 24/7 covering all HU postcodes from HU1 city centre to HU20 in the East Riding. Our Hull locksmith team provides expert emergency response across Anlaby, Cottingham, Hessle, and all areas of this historic maritime city and UK City of Culture 2017.",
        "Hull's maritime heritage and coastal location create unique security challenges, from salt air corrosion affecting lock mechanisms to the specific needs of port-related businesses and maritime industries. Our Hull locksmiths understand these coastal conditions and carry specialized equipment for marine environment lock maintenance and weather-resistant security solutions.",
        "Emergency lockout response in Hull averages 10-15 minutes to city centre locations near Hull Paragon Interchange, The Deep aquarium, and the historic Old Town. Whether you're locked out near the University of Hull campus, Hull Royal Infirmary, or at the busy St Stephen's Shopping Centre, our local Hull locksmiths provide immediate professional assistance with expertise in coastal city security needs.",
        "Hull's diverse neighborhoods from the historic Old Town with its medieval streets to the Victorian Avenues area and modern developments in Anlaby and Willerby require different security approaches. Our Hull locksmith team understands the specific requirements of Georgian townhouses, Victorian terraces, modern estates, and converted warehouses throughout the city and surrounding East Riding villages.",
        "Commercial locksmith services in Hull serve the city's maritime economy including dock facilities, shipping companies, logistics businesses, and the growing renewable energy sector. Our Hull commercial clients benefit from our experience with both traditional port infrastructure security and modern business developments, including the expanding digital and creative industries that flourished during Hull's City of Culture year.",
        "Hull's coastal position means exposure to harsh weather conditions including strong winds from the North Sea, salt air, and rapid temperature changes that can affect lock mechanisms. Our Hull locksmiths carry specialized equipment for coastal weather damage and provide maintenance advice for the challenging maritime climate that can cause accelerated wear on metal components.",
        "The city's mix of historic buildings in the Old Town, Victorian housing in areas like Newland and the Avenues, and modern developments across West Hull requires expertise in diverse lock types and security systems. From listed buildings requiring conservation-appropriate security to UPVC door problems in newer estates around Bransholme and Orchard Park, our Hull team handles all requirements with maritime city expertise.",
        "Hull's significance as a major UK port and its proximity to the Humber Bridge create unique access control needs for commercial and transport facilities. We provide specialized locksmith services for port security, logistics facilities, and transport infrastructure, ensuring rapid response for the city's vital role in UK trade and commerce with expertise in high-security maritime environments.",
        "Our Hull locksmith service includes support for the city's educational institutions including the University of Hull, Hull College campuses, and numerous schools across the city. We understand the specific security requirements of educational facilities in a maritime city and provide rapid response for student accommodation, particularly in areas like Cottingham and the university district with their high student populations."
      ]
    }
  },
  {
    name: "York",
    slug: "york",
    county: "North Yorkshire",
    population: 208200,
    coordinates: { lat: 53.9597, lng: -1.0793 },
    postcodes: ["YO1", "YO10", "YO19", "YO23", "YO24", "YO26", "YO30", "YO31", "YO32"],
    landmarks: ["York Minster", "York Railway Station", "University of York", "York Castle Museum", "Jorvik Viking Centre", "National Railway Museum", "The Shambles", "York City Walls", "Clifford's Tower", "York Racecourse"],
    neighborhoods: ["City Centre", "Clifton", "Acomb", "Heworth", "Fulford", "Bishopthorpe", "Heslington", "Osbaldwick", "Dringhouses", "Tang Hall", "Huntington", "New Earswick"],
    seo: {
      title: "Emergency Locksmith York - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in York covering all YO postcodes. 24/7 emergency lockout, historic building security, conservation locks. Fast response across York city centre, Clifton, Heslington. Heritage-appropriate solutions. Licensed and insured.",
      keywords: "locksmith york, emergency locksmith york, locksmith york city centre, residential locksmith york, commercial locksmith york, heritage locksmith york, conservation locks york, historic building security york, locksmith YO1 YO10 YO19 YO23 YO24 YO26 YO30 YO31 YO32",
      h1: "Emergency Locksmith York - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in York, England's most historic city, available 24/7 covering all YO postcodes from YO1 city centre to YO32 Huntington. Our York locksmith team provides expert emergency response with specialized knowledge of heritage building security, conservation requirements, and modern security needs across this UNESCO World Heritage city.",
        "York's unique status as a living historic city creates distinctive security challenges, from medieval buildings within the ancient city walls to Georgian townhouses and modern developments. Our York locksmiths specialize in heritage-appropriate security solutions, understanding conservation requirements while providing effective modern protection for listed buildings, tourist attractions, and residential properties.",
        "Emergency lockout response in York averages 8-12 minutes to city centre locations near York Minster, the Railway Station, and within the historic city walls. Whether you're locked out near the University of York campus in Heslington, York Hospital, or at one of the many hotels serving the city's millions of annual visitors, our local York locksmiths provide immediate assistance with sensitivity to the historic environment.",
        "York's massive tourism industry creates unique security demands for hotels, guesthouses, restaurants, and attractions throughout the city centre and beyond. Our York locksmith team understands the specific needs of hospitality businesses, heritage attractions like the Jorvik Viking Centre and York Castle Museum, and provides rapid response during peak tourist seasons when York welcomes over 7 million visitors annually.",
        "Commercial locksmith services in York serve the city's diverse economy from traditional tourism and heritage businesses to modern sectors including higher education, healthcare, and professional services. Our York commercial clients benefit from our expertise in both historic commercial buildings requiring conservation-appropriate security and modern business developments around the city's periphery.",
        "York's river valley location and historic building stock present unique challenges including settlement in older buildings, seasonal flooding considerations along the River Ouse, and the specific requirements of maintaining security in buildings that may be hundreds of years old. Our York locksmiths carry specialized equipment for historic building lock mechanisms and understand the balance between conservation and security.",
        "The city's mix of medieval streets, Georgian terraces, Victorian housing, and modern developments in areas like Clifton Without and Huntington requires expertise in an extraordinary range of lock types and security systems. From period-appropriate locks for properties within the city walls to modern UPVC solutions in newer suburbs, our York team provides comprehensive coverage with historical sensitivity.",
        "York's educational institutions including the University of York, York St John University, and numerous colleges create substantial student populations requiring specialized locksmith services. Our York team provides rapid response for student accommodation in Heslington, city centre student flats, and university facilities, understanding the unique access challenges of shared accommodation and campus security.",
        "Our York locksmith service extends to the city's numerous churches, museums, and heritage attractions requiring specialized high-security and conservation-appropriate solutions. We work with English Heritage, the National Trust, and local conservation officers to ensure security improvements meet heritage requirements while providing effective protection for these internationally significant historic buildings and collections."
      ]
    }
  },
  {
    name: "Wakefield",
    slug: "wakefield",
    county: "West Yorkshire",
    population: 345038,
    coordinates: { lat: 53.6833, lng: -1.5059 },
    seo: {
      title: "Emergency Locksmith Wakefield - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Wakefield. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith wakefield, emergency locksmith wakefield, locksmith wakefield city centre, residential locksmith wakefield, commercial locksmith wakefield",
      h1: "Emergency Locksmith Wakefield - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Wakefield available 24/7 for all your security needs.",
        "Emergency lockout service in Wakefield with 15-minute response time.",
        "Residential and commercial locksmith services across Wakefield and surrounding areas.",
        "Licensed and insured locksmiths serving Wakefield city centre and suburbs."
      ]
    }
  },
  {
    name: "Doncaster",
    slug: "doncaster",
    county: "South Yorkshire",
    population: 308106,
    coordinates: { lat: 53.5228, lng: -1.1283 },
    seo: {
      title: "Emergency Locksmith Doncaster - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Doncaster. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith doncaster, emergency locksmith doncaster, locksmith doncaster city centre, residential locksmith doncaster, commercial locksmith doncaster",
      h1: "Emergency Locksmith Doncaster - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Doncaster available 24/7 for all your security needs.",
        "Emergency lockout service in Doncaster with 15-minute response time.",
        "Residential and commercial locksmith services across Doncaster and surrounding areas.",
        "Licensed and insured locksmiths serving Doncaster city centre and suburbs."
      ]
    }
  },
  {
    name: "Rotherham",
    slug: "rotherham",
    county: "South Yorkshire",
    population: 265000,
    coordinates: { lat: 53.4306, lng: -1.3567 },
    seo: {
      title: "Emergency Locksmith Rotherham - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Rotherham. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith rotherham, emergency locksmith rotherham, locksmith rotherham town centre, residential locksmith rotherham, commercial locksmith rotherham",
      h1: "Emergency Locksmith Rotherham - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Rotherham available 24/7 for all your security needs.",
        "Emergency lockout service in Rotherham with 15-minute response time.",
        "Residential and commercial locksmith services across Rotherham and surrounding areas.",
        "Licensed and insured locksmiths serving Rotherham town centre and suburbs."
      ]
    }
  },
  {
    name: "Barnsley",
    slug: "barnsley",
    county: "South Yorkshire",
    population: 245199,
    coordinates: { lat: 53.5526, lng: -1.4792 },
    seo: {
      title: "Emergency Locksmith Barnsley - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Barnsley. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith barnsley, emergency locksmith barnsley, locksmith barnsley town centre, residential locksmith barnsley, commercial locksmith barnsley",
      h1: "Emergency Locksmith Barnsley - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Barnsley available 24/7 for all your security needs.",
        "Emergency lockout service in Barnsley with 15-minute response time.",
        "Residential and commercial locksmith services across Barnsley and surrounding areas.",
        "Licensed and insured locksmiths serving Barnsley town centre and suburbs."
      ]
    }
  },
  {
    name: "Halifax",
    slug: "halifax",
    county: "West Yorkshire",
    population: 88334,
    coordinates: { lat: 53.7244, lng: -1.8577 },
    seo: {
      title: "Emergency Locksmith Halifax - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Halifax. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith halifax, emergency locksmith halifax, locksmith halifax town centre, residential locksmith halifax, commercial locksmith halifax",
      h1: "Emergency Locksmith Halifax - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Halifax available 24/7 for all your security needs.",
        "Emergency lockout service in Halifax with 15-minute response time.",
        "Residential and commercial locksmith services across Halifax and surrounding areas.",
        "Licensed and insured locksmiths serving Halifax town centre and suburbs."
      ]
    }
  },
  {
    name: "Huddersfield",
    slug: "huddersfield",
    county: "West Yorkshire",
    population: 162949,
    coordinates: { lat: 53.6458, lng: -1.7850 },
    seo: {
      title: "Emergency Locksmith Huddersfield - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Huddersfield. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith huddersfield, emergency locksmith huddersfield, locksmith huddersfield town centre, residential locksmith huddersfield, commercial locksmith huddersfield",
      h1: "Emergency Locksmith Huddersfield - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Huddersfield available 24/7 for all your security needs.",
        "Emergency lockout service in Huddersfield with 15-minute response time.",
        "Residential and commercial locksmith services across Huddersfield and surrounding areas.",
        "Licensed and insured locksmiths serving Huddersfield town centre and suburbs."
      ]
    }
  },
  {
    name: "Scarborough",
    slug: "scarborough",
    county: "North Yorkshire",
    population: 61500,
    coordinates: { lat: 54.2833, lng: -0.4000 },
    seo: {
      title: "Emergency Locksmith Scarborough - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Scarborough. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith scarborough, emergency locksmith scarborough, locksmith scarborough town centre, residential locksmith scarborough, commercial locksmith scarborough",
      h1: "Emergency Locksmith Scarborough - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Scarborough available 24/7 for all your security needs.",
        "Emergency lockout service in Scarborough with 15-minute response time.",
        "Residential and commercial locksmith services across Scarborough and surrounding areas.",
        "Licensed and insured locksmiths serving Scarborough town centre and suburbs."
      ]
    }
  },
  {
    name: "Harrogate",
    slug: "harrogate",
    county: "North Yorkshire",
    population: 75000,
    coordinates: { lat: 53.9925, lng: -1.5378 },
    seo: {
      title: "Emergency Locksmith Harrogate - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Harrogate. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith harrogate, emergency locksmith harrogate, locksmith harrogate town centre, residential locksmith harrogate, commercial locksmith harrogate",
      h1: "Emergency Locksmith Harrogate - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Harrogate available 24/7 for all your security needs.",
        "Emergency lockout service in Harrogate with 15-minute response time.",
        "Residential and commercial locksmith services across Harrogate and surrounding areas.",
        "Licensed and insured locksmiths serving Harrogate town centre and suburbs."
      ]
    }
  },
  {
    name: "Beverley",
    slug: "beverley",
    county: "East Yorkshire",
    population: 30000,
    coordinates: { lat: 53.8425, lng: -0.4275 },
    seo: {
      title: "Emergency Locksmith Beverley - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Beverley. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith beverley, emergency locksmith beverley, locksmith beverley town centre, residential locksmith beverley, commercial locksmith beverley",
      h1: "Emergency Locksmith Beverley - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Beverley available 24/7 for all your security needs.",
        "Emergency lockout service in Beverley with 15-minute response time.",
        "Residential and commercial locksmith services across Beverley and surrounding areas.",
        "Licensed and insured locksmiths serving Beverley town centre and suburbs."
      ]
    }
  },
  {
    name: "Pontefract",
    slug: "pontefract",
    county: "West Yorkshire",
    population: 28500,
    coordinates: { lat: 53.6917, lng: -1.3125 },
    seo: {
      title: "Emergency Locksmith Pontefract - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Pontefract. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith pontefract, emergency locksmith pontefract, locksmith pontefract town centre, residential locksmith pontefract, commercial locksmith pontefract",
      h1: "Emergency Locksmith Pontefract - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Pontefract available 24/7 for all your security needs.",
        "Emergency lockout service in Pontefract with 15-minute response time.",
        "Residential and commercial locksmith services across Pontefract and surrounding areas.",
        "Licensed and insured locksmiths serving Pontefract town centre and suburbs."
      ]
    }
  },
  {
    name: "Dewsbury",
    slug: "dewsbury",
    county: "West Yorkshire",
    population: 62945,
    coordinates: { lat: 53.6908, lng: -1.6292 },
    seo: {
      title: "Emergency Locksmith Dewsbury - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Dewsbury. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith dewsbury, emergency locksmith dewsbury, locksmith dewsbury town centre, residential locksmith dewsbury, commercial locksmith dewsbury",
      h1: "Emergency Locksmith Dewsbury - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Dewsbury available 24/7 for all your security needs.",
        "Emergency lockout service in Dewsbury with 15-minute response time.",
        "Residential and commercial locksmith services across Dewsbury and surrounding areas.",
        "Licensed and insured locksmiths serving Dewsbury town centre and suburbs."
      ]
    }
  },
  {
    name: "Batley",
    slug: "batley",
    county: "West Yorkshire",
    population: 80000,
    coordinates: { lat: 53.7167, lng: -1.6333 },
    seo: {
      title: "Emergency Locksmith Batley - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Batley. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith batley, emergency locksmith batley, locksmith batley town centre, residential locksmith batley, commercial locksmith batley",
      h1: "Emergency Locksmith Batley - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Batley available 24/7 for all your security needs.",
        "Emergency lockout service in Batley with 15-minute response time.",
        "Residential and commercial locksmith services across Batley and surrounding areas.",
        "Licensed and insured locksmiths serving Batley town centre and suburbs."
      ]
    }
  },
  {
    name: "Keighley",
    slug: "keighley",
    county: "West Yorkshire",
    population: 56000,
    coordinates: { lat: 53.8667, lng: -1.9000 },
    seo: {
      title: "Emergency Locksmith Keighley - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Keighley. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith keighley, emergency locksmith keighley, locksmith keighley town centre, residential locksmith keighley, commercial locksmith keighley",
      h1: "Emergency Locksmith Keighley - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Keighley available 24/7 for all your security needs.",
        "Emergency lockout service in Keighley with 15-minute response time.",
        "Residential and commercial locksmith services across Keighley and surrounding areas.",
        "Licensed and insured locksmiths serving Keighley town centre and suburbs."
      ]
    }
  },
  {
    name: "Castleford",
    slug: "castleford",
    county: "West Yorkshire",
    population: 45000,
    coordinates: { lat: 53.7167, lng: -1.3500 },
    seo: {
      title: "Emergency Locksmith Castleford - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Castleford. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith castleford, emergency locksmith castleford, locksmith castleford town centre, residential locksmith castleford, commercial locksmith castleford",
      h1: "Emergency Locksmith Castleford - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Castleford available 24/7 for all your security needs.",
        "Emergency lockout service in Castleford with 15-minute response time.",
        "Residential and commercial locksmith services across Castleford and surrounding areas.",
        "Licensed and insured locksmiths serving Castleford town centre and suburbs."
      ]
    }
  },
  {
    name: "Selby",
    slug: "selby",
    county: "North Yorkshire",
    population: 15000,
    coordinates: { lat: 53.7833, lng: -1.0667 },
    seo: {
      title: "Emergency Locksmith Selby - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Selby. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith selby, emergency locksmith selby, locksmith selby town centre, residential locksmith selby, commercial locksmith selby",
      h1: "Emergency Locksmith Selby - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Selby available 24/7 for all your security needs.",
        "Emergency lockout service in Selby with 15-minute response time.",
        "Residential and commercial locksmith services across Selby and surrounding areas.",
        "Licensed and insured locksmiths serving Selby town centre and suburbs."
      ]
    }
  },
  {
    name: "Goole",
    slug: "goole",
    county: "East Yorkshire",
    population: 20000,
    coordinates: { lat: 53.7000, lng: -0.8667 },
    seo: {
      title: "Emergency Locksmith Goole - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Goole. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith goole, emergency locksmith goole, locksmith goole town centre, residential locksmith goole, commercial locksmith goole",
      h1: "Emergency Locksmith Goole - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Goole available 24/7 for all your security needs.",
        "Emergency lockout service in Goole with 15-minute response time.",
        "Residential and commercial locksmith services across Goole and surrounding areas.",
        "Licensed and insured locksmiths serving Goole town centre and suburbs."
      ]
    }
  },
  {
    name: "Driffield",
    slug: "driffield",
    county: "East Yorkshire",
    population: 13000,
    coordinates: { lat: 54.0000, lng: -0.4333 },
    seo: {
      title: "Emergency Locksmith Driffield - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Driffield. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith driffield, emergency locksmith driffield, locksmith driffield town centre, residential locksmith driffield, commercial locksmith driffield",
      h1: "Emergency Locksmith Driffield - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Driffield available 24/7 for all your security needs.",
        "Emergency lockout service in Driffield with 15-minute response time.",
        "Residential and commercial locksmith services across Driffield and surrounding areas.",
        "Licensed and insured locksmiths serving Driffield town centre and suburbs."
      ]
    }
  },
  {
    name: "Bridlington",
    slug: "bridlington",
    county: "East Yorkshire",
    population: 35000,
    coordinates: { lat: 54.0833, lng: -0.2000 },
    seo: {
      title: "Emergency Locksmith Bridlington - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Bridlington. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith bridlington, emergency locksmith bridlington, locksmith bridlington town centre, residential locksmith bridlington, commercial locksmith bridlington",
      h1: "Emergency Locksmith Bridlington - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Bridlington available 24/7 for all your security needs.",
        "Emergency lockout service in Bridlington with 15-minute response time.",
        "Residential and commercial locksmith services across Bridlington and surrounding areas.",
        "Licensed and insured locksmiths serving Bridlington town centre and suburbs."
      ]
    }
  },
  {
    name: "Whitby",
    slug: "whitby",
    county: "North Yorkshire",
    population: 13400,
    coordinates: { lat: 54.4833, lng: -0.6167 },
    seo: {
      title: "Emergency Locksmith Whitby - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Whitby. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith whitby, emergency locksmith whitby, locksmith whitby town centre, residential locksmith whitby, commercial locksmith whitby",
      h1: "Emergency Locksmith Whitby - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Whitby available 24/7 for all your security needs.",
        "Emergency lockout service in Whitby with 15-minute response time.",
        "Residential and commercial locksmith services across Whitby and surrounding areas.",
        "Licensed and insured locksmiths serving Whitby town centre and suburbs."
      ]
    }
  },
  {
    name: "Middlesbrough",
    slug: "middlesbrough",
    county: "North Yorkshire",
    population: 140545,
    coordinates: { lat: 54.5727, lng: -1.1628 },
    seo: {
      title: "Emergency Locksmith Middlesbrough - 24/7 Lockout Service | Locksmith Yorkshire",
      description: "Professional locksmith services in Middlesbrough. 24/7 emergency lockout, residential and commercial locksmith. Fast response, licensed and insured. Call now!",
      keywords: "locksmith middlesbrough, emergency locksmith middlesbrough, locksmith middlesbrough town centre, residential locksmith middlesbrough, commercial locksmith middlesbrough",
      h1: "Emergency Locksmith Middlesbrough - 24/7 Lockout Service",
      content: [
        "Professional locksmith services in Middlesbrough available 24/7 for all your security needs.",
        "Emergency lockout service in Middlesbrough with 15-minute response time.",
        "Residential and commercial locksmith services across Middlesbrough and surrounding areas.",
        "Licensed and insured locksmiths serving Middlesbrough town centre and suburbs."
      ]
    }
  }
];

// Helper function to get city by slug
export const getCityBySlug = (slug: string): CityData | undefined => {
  return yorkshireCities.find(city => city.slug === slug);
};

// Helper function to get all cities
export const getAllCities = (): CityData[] => {
  return yorkshireCities;
};

// Helper function to get cities by county
export const getCitiesByCounty = (county: string): CityData[] => {
  return yorkshireCities.filter(city => city.county === county);
};

// Helper function to generate sitemap data
export const generateSitemapData = () => {
  return yorkshireCities.map(city => ({
    slug: city.slug,
    lastmod: city.updatedAt ?? new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.8,
  }));
};