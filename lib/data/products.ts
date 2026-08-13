import { ProductDetail } from "../types";

export const PRODUCTS_DATA: ProductDetail[] = [
  // --- HARDWARE SECTION (6 Products) ---
  {
    id: "basic-magnetic-gps",
    category: "Hardware",
    title: "Basic GPS / Magnetic GPS Tracker",
    shortDesc:
      "Compact and reliable GPS tracking hardware designed for flexible installation, asset monitoring, and basic vehicle tracking requirements.",

    longDesc:
      "The Basic GPS / Magnetic GPS Tracker is a compact and versatile tracking solution designed for applications where easy installation, portability, and reliable location monitoring are essential. Its magnetic mounting design allows for quick and flexible installation without complex wiring, making it suitable for vehicles, mobile assets, equipment, and other valuable assets. With reliable GPS-based location tracking and a compact form factor, it provides a practical solution for basic tracking and monitoring requirements.",

    // Keep the same working image link
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",

    // Keep the same working GIF link
    gifUrl: "/media/gps-tracking-demo.gif",

    // Keep the same working video link
    videoUrl: "/media/realtime-tracking.mp4",

    // Keep the same working gallery links
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "GPS-based real-time location tracking",
      "Compact and portable design for flexible deployment",
      "Magnetic mounting for quick and convenient installation",
      "Suitable for vehicle and asset tracking applications",
      "Reliable location monitoring with low-maintenance operation",
      "Ideal for temporary or permanent tracking requirements",
    ],

    specifications: {
      "Tracking Technology": "GPS / GSM",
      "Installation Type": "Magnetic / Portable Mounting",
      Application: "Vehicle and Asset Tracking",
      "Tracking Mode": "Real-Time Location Monitoring",
      Design: "Compact and Portable",
    },

    applications: [
      "Vehicle Tracking",
      "Fleet Monitoring",
      "Asset Tracking",
      "Equipment Monitoring",
      "Rental Vehicle Monitoring",
      "Mobile Asset Security",
    ],
  },

  {
    id: "ais140-gps-hardware",
    category: "Hardware",
    title: "AIS140 GPS Hardware",
    shortDesc:
      "Reliable AIS-140 compliant GPS tracking hardware designed for real-time vehicle tracking, safety monitoring, and regulatory compliance.",

    longDesc:
      "The AIS140 GPS Hardware is a reliable vehicle tracking solution designed to support real-time location monitoring, safety management, and regulatory compliance requirements. Built for professional fleet and commercial vehicle operations, it provides accurate GPS positioning, continuous tracking, and essential vehicle monitoring capabilities. The hardware is suitable for organizations that require dependable fleet visibility, operational control, and compliance-focused vehicle tracking.",

    // Same working image link
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",

    // Same working GIF link
    gifUrl: "/media/gps-tracker-anim.gif",

    // Same working video link
    videoUrl: "/media/track-everything.mp4",

    // Same working gallery links
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "AIS-140 compliant GPS tracking solution",
      "Real-time vehicle location tracking",
      "Accurate GPS positioning and continuous monitoring",
      "Supports fleet and commercial vehicle tracking operations",
      "Vehicle movement and route monitoring",
      "Designed for safety, visibility, and regulatory compliance",
    ],

    specifications: {
      Compliance: "AIS-140",
      "Tracking Technology": "GPS / GSM",
      "Tracking Mode": "Real-Time Location Monitoring",
      Application: "Commercial Vehicle and Fleet Tracking",
      Positioning: "High-Accuracy GPS",
    },

    applications: [
      "Public Transport Vehicles",
      "Commercial Vehicle Fleets",
      "School Bus Tracking",
      "Logistics and Transportation",
      "Passenger Transport Services",
    ],
  },

  {
    id: "video-telematics-solutions",
    category: "Hardware",
    title: "Video Telematics Solutions",

    shortDesc:
      "Advanced video telematics solutions combining live video, GPS tracking, and intelligent vehicle monitoring for enhanced fleet safety and operational visibility.",

    longDesc:
      "Our Video Telematics Solutions combine GPS-based vehicle tracking with real-time video monitoring to provide organizations with complete visibility into fleet operations. The solution enables businesses to monitor vehicles, driving behavior, road conditions, and critical events while maintaining access to valuable video evidence. By integrating location data with video intelligence, organizations can improve driver safety, enhance fleet security, optimize operations, and make informed decisions based on real-time insights.",

    // Relevant vehicle / telematics image
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",

    // Make sure this file exists at: public/media/gps-tracker-anim.gif
    gifUrl: "/media/gps-tracker-anim.gif",

    // Make sure this file exists at: public/media/Video-Telematics.mp4
    videoUrl: "/media/VideoTelematics.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Real-time GPS vehicle tracking with live video monitoring",
      "Video recording for incident investigation and evidence",
      "Driver behavior and road safety monitoring",
      "Live vehicle location and journey tracking",
      "Intelligent event-based video monitoring",
      "Improved fleet security and operational visibility",
      "Integrated GPS and video data for better fleet intelligence",
    ],

    specifications: {
      Technology: "GPS / Video Telematics",
      Tracking: "Real-Time GPS Location Monitoring",
      Video: "Live and Event-Based Video Monitoring",
      Connectivity: "Cellular Network Connectivity",
      Monitoring: "Vehicle, Driver and Road Activity",
      Application: "Fleet and Vehicle Monitoring",
    },

    applications: [
      "Fleet Management",
      "Logistics and Transportation",
      "Public Transport",
      "Commercial Vehicle Operations",
      "Driver Safety Monitoring",
      "Fleet Security and Incident Management",
    ],
  },

  {
    id: "personal-pet-wallet-tracker",
    category: "Hardware",
    title: "Personal / Pet / Wallet Tracker",

    shortDesc:
      "Compact GPS tracking solution designed to help monitor personal belongings, pets, and valuable items with reliable location tracking and easy portability.",

    longDesc:
      "The Personal / Pet / Wallet Tracker is a compact and versatile GPS tracking solution designed to provide peace of mind by helping users monitor their valuable belongings, pets, and personal items. Its lightweight and portable design makes it suitable for everyday use, while GPS-based location tracking helps users keep track of important assets and receive location updates when needed. The solution is ideal for personal security, pet monitoring, travel, and protection of valuable belongings.",

    // Relevant image
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200",

    // Make sure this file exists in public/media/
    gifUrl: "/media/gps-tracker-anim.gif",

    // Make sure this file exists in public/media/
    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Compact and portable GPS tracking design",
      "Real-time location tracking for personal belongings and pets",
      "Easy to carry or attach to bags, wallets, collars, and other items",
      "Location monitoring for improved personal security",
      "Helps locate misplaced or lost valuable belongings",
      "Suitable for everyday personal and asset tracking requirements",
    ],

    specifications: {
      "Tracking Technology": "GPS / GSM",
      "Tracking Mode": "Real-Time Location Monitoring",
      Design: "Compact and Portable",
      Installation: "Portable / Easy Attachment",
      Application: "Personal, Pet and Asset Tracking",
    },

    applications: [
      "Pet Tracking",
      "Wallet and Personal Belongings",
      "Bags and Luggage",
      "Keys and Valuable Items",
      "Personal Asset Tracking",
      "Travel and Outdoor Equipment",
    ],
  },

  {
    id: "fatigue-sensor-solutions",
    category: "Hardware",
    title: "Fatigue Sensor & Solutions",

    shortDesc:
      "AI-powered driver fatigue monitoring solution designed to detect drowsiness, distraction, and unsafe driving behavior in real time.",

    longDesc:
      "Our Fatigue Sensor & Solutions leverage advanced AI vision technology to continuously monitor driver alertness and behavior. The system detects fatigue, drowsiness, distraction, mobile phone usage, smoking, and other unsafe driving activities, generating instant alerts to help prevent accidents. Designed for commercial fleets, public transportation, mining, logistics, and industrial operations, it enhances driver safety, improves compliance, and supports efficient fleet management through real-time monitoring and intelligent analytics.",

    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "AI-powered driver fatigue detection",
      "Real-time drowsiness and distraction monitoring",
      "Detects mobile phone usage while driving",
      "Smoking and seatbelt violation detection",
      "Instant audio and visual driver alerts",
      "Cloud-based monitoring and event reporting",
      "Improves fleet safety and operational compliance",
    ],

    specifications: {
      Technology: "AI Vision & Driver Monitoring System",
      Detection: "Fatigue, Drowsiness & Driver Distraction",
      Connectivity: "4G / Wi-Fi (Model Dependent)",
      Alerts: "Real-Time Audio & Visual Alerts",
      Application: "Commercial Vehicles & Fleet Safety",
    },

    applications: [
      "Commercial Fleet Management",
      "Public Transportation",
      "Mining & Construction Vehicles",
      "Logistics & Supply Chain",
      "School & Staff Buses",
      "Long-Haul Transportation",
    ],
  },

  {
    id: "gps-dash-camera",
    category: "Hardware",
    title: "GPS Based Dash Camera",
    shortDesc:
      "Advanced GPS-enabled dash camera designed for real-time vehicle monitoring, video recording, driver safety, and fleet security.",

    longDesc:
      "The GPS Based Dash Camera combines high-quality video recording with GPS-based vehicle tracking to provide enhanced visibility and security for vehicles and fleets. It enables organizations to monitor vehicle journeys, record road activity, track locations, and improve driver safety. The solution is ideal for fleet operators and businesses seeking reliable video evidence, real-time monitoring, and improved control over vehicle operations.",

    // Same working image link
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",

    // Same working GIF link
    gifUrl: "/media/gps-tracker-anim.gif",

    // Same working video link
    videoUrl: "/media/track-everything.mp4",

    // Same working gallery links
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "GPS-based real-time vehicle location tracking",
      "High-quality video recording for road and vehicle monitoring",
      "Records driving activity for improved safety and accountability",
      "Supports journey tracking and route history",
      "Provides video evidence in case of accidents or incidents",
      "Helps fleet operators monitor vehicles and driver behavior",
    ],

    specifications: {
      "Tracking Technology": "GPS / GSM",
      "Camera Type": "Vehicle Dash Camera",
      "Tracking Mode": "Real-Time Location Monitoring",
      "Video Recording": "Continuous / Event-Based Recording",
      Application: "Vehicle and Fleet Monitoring",
    },

    applications: [
      "Commercial Vehicle Fleets",
      "Logistics and Transportation",
      "Public Transport Vehicles",
      "Corporate Vehicle Fleets",
      "School and Staff Transportation",
      "Driver Safety Monitoring",
    ],
  },

  {
    id: "gps-digital-lock-valuable-transport",
    category: "Hardware",
    title: "GPS Based Digital Lock for Valuable Transport",

    shortDesc:
      "Smart GPS-enabled digital locking solution designed to secure high-value cargo and monitor valuable transportation in real time.",

    longDesc:
      "The GPS Based Digital Lock for Valuable Transport is an advanced security solution designed to protect high-value goods during transportation. By combining GPS tracking with intelligent digital locking technology, the system enables organizations to monitor cargo location, secure transport vehicles, and receive alerts for unauthorized access or tampering. It provides enhanced visibility and control throughout the transportation journey, helping businesses improve cargo security, reduce theft risks, and ensure safe and accountable delivery of valuable goods.",

    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Real-time GPS tracking of valuable transport vehicles",
      "Digital locking mechanism for enhanced cargo security",
      "Unauthorized access and tampering alerts",
      "Remote monitoring of lock and vehicle status",
      "Location-based security monitoring throughout the journey",
      "Helps reduce theft and unauthorized cargo access",
      "Improves accountability and visibility in valuable transportation",
    ],

    specifications: {
      Technology: "GPS / Digital Locking System",
      Tracking: "Real-Time GPS Location Monitoring",
      Security: "Electronic Lock & Tamper Detection",
      Connectivity: "GSM / Cellular Network",
      Monitoring: "Remote Lock and Vehicle Status Monitoring",
      Application: "High-Value Cargo and Valuable Transport",
    },

    applications: [
      "High-Value Cargo Transportation",
      "Cash and Valuable Goods Transport",
      "Pharmaceutical Logistics",
      "Jewellery and Precious Goods Transport",
      "Secure Supply Chain Operations",
      "Logistics and Fleet Security",
    ],
  },

  {
    id: "iot-hardware-ev-vehicles-batteries",
    category: "Hardware",
    title: "IoT Hardware for EV Vehicles & Batteries",

    shortDesc:
      "Smart IoT hardware solutions designed for real-time monitoring, tracking, and intelligent management of electric vehicles and EV batteries.",

    longDesc:
      "Our IoT Hardware for EV Vehicles & Batteries enables intelligent monitoring and connected management of electric mobility assets. These solutions combine IoT connectivity, GPS tracking, and battery monitoring capabilities to provide real-time visibility into EV vehicles and battery performance. Designed for EV manufacturers, fleet operators, battery service providers, and mobility businesses, the hardware helps monitor vehicle location, battery status, usage patterns, and operational performance while supporting efficient fleet management and predictive maintenance.",

    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Real-time GPS tracking for electric vehicles",
      "IoT-enabled remote monitoring and data connectivity",
      "Battery status and performance monitoring",
      "Real-time vehicle and battery data collection",
      "Supports fleet management and operational analytics",
      "Helps identify battery performance trends and maintenance requirements",
      "Designed for connected EV and battery management applications",
    ],

    specifications: {
      Technology: "IoT / GPS / Battery Monitoring",
      Connectivity: "4G / GSM / IoT Connectivity",
      Monitoring: "Vehicle and Battery Performance",
      Tracking: "Real-Time GPS Location Monitoring",
      Application: "Electric Vehicles and EV Batteries",
    },

    applications: [
      "Electric Vehicle Fleets",
      "EV Battery Monitoring",
      "Battery Swapping Networks",
      "Electric Mobility Services",
      "EV Manufacturers and OEMs",
      "Fleet and Mobility Management",
    ],
  },

  {
    id: "cctv-dash-cams-security-surveillance",
    category: "Hardware",
    title: "CCTV & Dash Cams Security & Surveillance Systems",

    shortDesc:
      "Advanced CCTV and dash camera solutions designed to enhance security, monitor activities, and provide reliable video surveillance for vehicles, businesses, and critical environments.",

    longDesc:
      "Our CCTV & Dash Cams Security & Surveillance Systems provide reliable video monitoring and recording solutions for a wide range of security and operational requirements. From fixed CCTV installations to vehicle-mounted dash cameras, our solutions help organizations monitor critical areas, improve security, record important events, and maintain valuable video evidence. These systems are designed to support businesses, fleets, logistics operations, commercial vehicles, and other environments where continuous monitoring and enhanced security are essential.",

    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "High-quality video surveillance and recording",
      "CCTV solutions for indoor and outdoor security monitoring",
      "Vehicle-mounted dash cameras for road and fleet monitoring",
      "Continuous and event-based video recording",
      "Helps capture valuable video evidence during incidents",
      "Supports enhanced security and operational visibility",
      "Suitable for commercial, industrial, and fleet applications",
    ],

    specifications: {
      Technology: "CCTV / Dash Camera Surveillance",
      Video: "High-Quality Digital Video Recording",
      Monitoring: "Real-Time and Recorded Video Monitoring",
      Installation: "Fixed / Vehicle-Mounted",
      Application: "Security, Surveillance and Fleet Monitoring",
    },

    applications: [
      "Commercial and Corporate Security",
      "Industrial and Warehouse Surveillance",
      "Fleet and Vehicle Monitoring",
      "Logistics and Transportation",
      "Retail and Business Premises",
      "Public and Critical Infrastructure",
    ],
  },

  {
    id: "cable-wire-security-seal-logistics",
    category: "Hardware",
    title: "Cable Wire Security Seal for Logistics",

    shortDesc:
      "Reliable tamper-evident cable wire security seals designed to protect cargo, containers, vehicles, and logistics assets against unauthorized access.",

    longDesc:
      "The Cable Wire Security Seal for Logistics is a durable tamper-evident security solution designed to help protect valuable cargo and logistics assets during transportation and storage. The seal provides a visible indication of unauthorized access or tampering and is suitable for securing containers, trucks, trailers, doors, warehouses, and other critical access points. Its practical design supports easy identification, improved accountability, and enhanced security throughout the logistics and supply chain process.",

    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Tamper-evident security design",
      "Durable cable wire construction for logistics applications",
      "Helps identify unauthorized access and tampering",
      "Suitable for securing containers, trucks, trailers, and cargo",
      "Supports improved cargo accountability and supply chain security",
      "Easy identification and verification during transportation",
      "Ideal for one-time security and asset protection applications",
    ],

    specifications: {
      "Product Type": "Tamper-Evident Cable Wire Security Seal",
      Application: "Logistics and Cargo Security",
      Installation: "Manual Cable Locking",
      Security: "Tamper Evident",
      Usage: "Single-Use Security Application",
    },

    applications: [
      "Cargo and Container Security",
      "Truck and Trailer Security",
      "Logistics and Supply Chain",
      "Warehouse and Storage Security",
      "Transportation and Distribution",
      "High-Value Goods Protection",
    ],
  },

  {
    id: "container-seal-logistics-transportation",
    category: "Hardware",
    title: "Container Seal for Logistics & Transportation",

    shortDesc:
      "High-security container seals designed to protect cargo, prevent unauthorized access, and ensure shipment integrity across logistics and transportation operations.",

    longDesc:
      "Our Container Seal for Logistics & Transportation solutions provide reliable security for containers, trucks, trailers, and cargo shipments throughout the supply chain. Designed to help prevent unauthorized access, tampering, and theft, these seals provide a simple and effective way to verify the integrity of shipments during transportation and storage. With unique identification markings and tamper-evident designs, container seals support secure logistics operations, improve cargo accountability, and help organizations maintain greater control over their supply chain.",

    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/container-seal-anim.gif",

    videoUrl: "/media/container-seal.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Tamper-evident design for enhanced cargo security",
      "Helps prevent unauthorized access to containers and shipments",
      "Unique serial numbers for easy identification and tracking",
      "Suitable for containers, trucks, trailers, and cargo shipments",
      "Supports shipment integrity throughout the transportation process",
      "Durable construction suitable for logistics and supply chain operations",
      "Easy to apply and verify during dispatch and delivery",
      "Helps improve cargo accountability and operational security",
    ],

    specifications: {
      "Product Type": "Container Security Seal",
      Security: "Tamper-Evident / High-Security",
      Identification: "Unique Serial Number / Identification Marking",
      Application: "Containers, Trucks, Trailers and Cargo",
      Usage: "Logistics, Transportation and Supply Chain Security",
    },

    applications: [
      "Logistics and Transportation",
      "Shipping and Cargo Operations",
      "Container Security",
      "Warehousing and Distribution",
      "Fleet and Supply Chain Management",
      "Ports and Freight Terminals",
      "Industrial and Commercial Shipments",
    ],
  },

  {
    id: "smart-id-cards",
    category: "Hardware",
    title: "Smart ID Cards",
    shortDesc:
      "Multi-functional smart RFID cards with long-range tracking for schools and corporate offices.",
    longDesc:
      "Empower your corporate office or campus with our next-generation Smart ID Cards. Seamlessly blending RFID entry credentials and high-precision long-range tracking beacons.",
    image:
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/smarter-logistics.gif",
    videoUrl: "/media/circuit-board.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Dual frequency: HF/LF RFID and BLE",
      "Hands-free attendance recording",
      "Integrated emergency SOS buzzer",
      "Ultra-thin standard ID card size",
      "Battery life up to 2 years",
    ],
    specifications: {
      "RFID Standard": "Mifare 13.56MHz & EM 125KHz",
      "Active Range": "Up to 80 meters",
      "Battery Type": "CR2016 equivalent",
      Material: "Premium flexible PVC",
      Thickness: "1.2mm",
    },
    applications: [
      "Corporate Office Security",
      "University Attendance",
      "High-security Research Labs",
      "Event Visitor Flow Tracking",
    ],
  },
  {
    id: "pet-tracking-gps",
    category: "Hardware",
    title: "Pet Tracking collar GPS",
    shortDesc:
      "Featherlight, waterproof GPS collar with smart virtual fence controls to protect your pets.",
    longDesc:
      "Never worry about your furry companion getting lost. Our Smart Pet Tracking Collar GPS is custom designed to be comfortable, lightweight, and rugged enough for any adventure.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/gps-tracking-demo.gif",
    videoUrl: "/media/track-everything.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Featherlight housing clips onto collars",
      "IP68 dust and water resistance",
      "Virtual Geofence safety circle",
      "Built-in smart LED finder beacon",
      "Activity and sleep tracking",
    ],
    specifications: {
      Weight: "22 grams",
      "Waterproof Level": "IP68",
      "Battery Standby": "Up to 10 days",
      Positioning: "GPS + Glonass + Wi-Fi",
      Material: "Hypoallergenic nylon",
    },
    applications: [
      "Dog Runaway Prevention",
      "Hiking Pet Safety Gear",
      "Cat Roaming Tracking",
      "Animal Shelter Research",
    ],
  },

  // --- SOFTWARE SECTION (6 Products) ---
  {
    id: "fleet-management-dashboard",
    category: "Software",
    title: "Fleet Management Dashboard",
    shortDesc:
      "Comprehensive web-based platform for real-time fleet monitoring and advanced analytics.",
    longDesc:
      "Our Fleet Management Dashboard provides a centralized command center for your entire logistics operation. Featuring real-time location tracking, route optimization algorithms, and automated maintenance scheduling, it empowers managers to maximize efficiency and reduce operational costs.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/dashboard-tracking.gif",
    videoUrl: "/media/realtime-tracking.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Real-time GPS map visualization",
      "Automated route optimization",
      "Fuel consumption analytics",
      "Driver behavior monitoring",
      "Customizable alert system",
    ],
    specifications: {
      Platform: "Web-based (Responsive)",
      "Update Interval": "As low as 5 seconds",
      "Data Retention": "Up to 2 years",
      Integration: "REST API & Webhooks",
      Security: "SSL/TLS Encryption",
    },
    applications: [
      "Logistics & Distribution",
      "Public Transportation",
      "Emergency Services",
      "Corporate Car Pools",
    ],
  },

  {
    id: "bizeye-fleet-employee-asset-tracking",
    category: "Software",
    title: "BIZEYE – Fleet, Employee & Asset Tracking Software",

    shortDesc:
      "A centralized tracking and management software solution designed to provide real-time visibility of fleets, employees, and valuable assets while improving operational control, security, and efficiency.",

    longDesc:
      "BIZEYE is an integrated tracking and monitoring software solution designed to help organizations manage fleets, employees, and assets from a centralized digital platform. The system enables organizations to monitor operational activities, improve visibility, track mobile resources, and make better-informed decisions using real-time tracking data and centralized management tools. By bringing fleet, workforce, and asset information together, BIZEYE helps businesses improve resource utilization, strengthen operational oversight, enhance security, and streamline day-to-day management.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/bizeyes.png",

    videoUrl: "/media/bizeye.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Real-time fleet and vehicle tracking",
      "Centralized employee and workforce monitoring",
      "Asset tracking and visibility",
      "Live location monitoring through interactive maps",
      "Geofencing and location-based monitoring",
      "Trip and route history",
      "Fleet activity and movement monitoring",
      "Employee movement and attendance visibility",
      "Asset status and utilization monitoring",
      "Custom alerts and notifications",
      "Centralized dashboards for operational visibility",
      "Reports and analytics for informed decision-making",
      "Improved fleet, workforce, and asset utilization",
      "Web-based access for centralized management",
    ],

    specifications: {
      "Product Type": "Fleet, Employee & Asset Tracking Software",
      Platform: "Web-Based Tracking and Management Platform",
      Tracking: "Real-Time GPS and Location-Based Tracking",
      "Fleet Management":
        "Vehicle Monitoring, Trips, Routes and Activity Tracking",
      "Employee Management": "Employee Location and Workforce Monitoring",
      "Asset Management": "Asset Location, Status and Utilization Tracking",
      Monitoring: "Live Dashboard and Map-Based Monitoring",
      Geofencing: "Virtual Geographic Boundary Monitoring",
      Alerts: "Configurable Event and Location-Based Notifications",
      Reporting: "Operational Reports and Analytics",
      Access: "Centralized Digital Access",
      Application: "Fleet, Workforce and Asset Operations",
    },

    applications: [
      "Fleet Management",
      "Employee Tracking",
      "Workforce Monitoring",
      "Asset Tracking",
      "Logistics & Transportation",
      "Corporate Operations",
      "Field Service Management",
      "Construction & Industrial Operations",
      "Supply Chain Management",
      "Enterprise Resource Monitoring",
    ],
  },

  {
    id: "spark-iot-ev-battery-health-monitoring",
    category: "Software",
    title: "SPARK - IoT Tracking & EV Battery Health Monitoring",

    shortDesc:
      "Advanced IoT-based tracking and battery health monitoring software designed to provide real-time visibility into EV assets, battery performance, and operational conditions.",

    longDesc:
      "SPARK is an IoT-based tracking and monitoring software solution designed for electric vehicles and battery-powered assets. The platform provides centralized visibility into vehicle location, battery performance, operational status, and critical battery parameters through connected IoT technology. By combining real-time tracking with battery health monitoring, SPARK helps organizations improve EV fleet visibility, monitor battery performance, identify potential issues, optimize asset utilization, and support proactive maintenance and operational decision-making.",

    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",

    gifUrl: "/media/spark.jpeg",

    videoUrl: "/media/Spark.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "Real-time IoT-based EV tracking",
      "Live vehicle and asset location monitoring",
      "Battery health and performance monitoring",
      "Battery State of Charge (SoC) visibility",
      "Battery State of Health (SoH) monitoring",
      "Battery temperature and performance monitoring",
      "Real-time operational status monitoring",
      "Geofencing and location-based alerts",
      "Customizable battery and vehicle alerts",
      "Historical tracking and performance data",
      "Battery performance analytics and reporting",
      "Early identification of potential battery issues",
      "Centralized dashboard for EV fleet monitoring",
      "Supports proactive maintenance and operational planning",
    ],

    specifications: {
      Platform: "Web-Based IoT Tracking & Monitoring Platform",
      Tracking: "Real-Time GPS and IoT-Based Tracking",
      "Battery Monitoring": "Battery Health and Performance Monitoring",
      "Battery Parameters":
        "State of Charge (SoC), State of Health (SoH) and Temperature",
      "Vehicle Monitoring": "Live Location and Operational Status",
      Connectivity: "IoT-Enabled Connected Devices",
      Alerts: "Customizable Battery, Vehicle and Location-Based Alerts",
      Analytics: "Battery Performance and Operational Analytics",
      Reporting: "Historical Tracking and Battery Performance Reports",
      Monitoring: "Centralized Real-Time Dashboard",
      Application: "Electric Vehicles, EV Fleets and Battery-Powered Assets",
    },

    applications: [
      "Electric Vehicle Fleets",
      "EV Battery Monitoring",
      "Electric Mobility Operations",
      "Battery-Powered Vehicles",
      "EV Fleet Management",
      "Last-Mile Delivery Fleets",
      "Logistics & Transportation",
      "Commercial Electric Vehicles",
      "Smart Mobility Solutions",
    ],
  },

  {
    id: "event-management-application",
    category: "Software",
    title: "Event Management Software",

    shortDesc:
      "A comprehensive digital event management solution designed to simplify event planning, registration, attendee management, ticketing, communication, and overall event operations through a centralized platform.",

    longDesc:
      "Our Event Management Application provides businesses and organizations with a centralized platform to plan, organize, manage, and monitor events efficiently. The application enables organizers to create and manage events, handle attendee registrations, manage ticket types, track participants, coordinate event activities, and communicate important updates. By bringing event planning, registration, attendee management, and operational workflows into one digital platform, the solution helps reduce manual coordination, improve event visibility, streamline operations, and deliver a seamless experience for both organizers and attendees.",

    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1000",

    gifUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",

    videoUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",

    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "Digital event creation and management",
      "Event registration and attendee management",
      "Multiple event and ticket type management",
      "Online ticket booking and registration",
      "Attendee profile and information management",
      "Event scheduling and agenda management",
      "Event theme and branding customization",
      "Automated registration confirmations",
      "Automated attendee notifications and reminders",
      "Event updates and communication management",
      "Real-time attendee and registration tracking",
      "Centralized event management dashboard",
      "Ticket availability and registration monitoring",
      "Event participation and attendance tracking",
      "Digital records of events and attendees",
      "Event performance and registration reporting",
      "Organizer and administrative management",
      "Streamlined event planning and coordination",
      "Reduced manual event management efforts",
      "Improved attendee engagement and experience",
    ],

    specifications: {
      Platform: "Web-Based Event Management Platform",
      "Event Management":
        "Event Creation, Configuration and Centralized Management",
      Registration: "Online Event Registration and Attendee Enrollment",
      "Ticket Management":
        "Multiple Ticket Types, Availability and Registration Management",
      "Attendee Management":
        "Centralized Attendee Profiles and Registration Records",
      "Schedule Management":
        "Event Schedule, Sessions, Agenda and Time-Slot Management",
      Notifications:
        "Automated Registration Confirmations, Reminders and Event Updates",
      Communication:
        "Digital Attendee Communication and Event Information Management",
      Dashboard:
        "Centralized Event, Registration and Attendee Management Dashboard",
      Tracking: "Real-Time Registration, Ticket and Attendance Monitoring",
      Branding: "Custom Event Themes, Branding and Event Information",
      Automation: "Automated Registration, Notification and Event Workflows",
      Reporting: "Event Registration, Attendance and Operational Reports",
      Application:
        "Corporate Events, Conferences, Workshops, Exhibitions and Social Events",
    },

    applications: [
      "Corporate Events",
      "Conferences & Seminars",
      "Exhibitions & Trade Shows",
      "Workshops & Training Programs",
      "Product Launches",
      "College & University Events",
      "Networking Events",
      "Webinars & Online Events",
      "Cultural & Social Events",
      "Sports & Community Events",
      "Meetups & Professional Events",
      "Event Management Companies",
      "Small & Medium Businesses",
    ],
  },

  {
    id: "saphal-agri-procurement-handling-logistics",
    category: "Software",
    title:
      "SAPHAL - Agri Procurement, Handling & Logistics Management Software",

    shortDesc:
      "Integrated software solution designed to streamline agricultural procurement, handling, inventory, logistics, and supply chain operations through centralized digital management.",

    longDesc:
      "SAPHAL is an integrated software solution designed to support agricultural procurement, handling, storage, inventory, and logistics operations through a centralized digital platform. The system helps organizations manage procurement activities, monitor material movement, coordinate handling and transportation operations, maintain digital records, and gain better visibility across the agricultural supply chain. By connecting procurement, handling, logistics, and operational workflows, SAPHAL helps improve transparency, coordination, process efficiency, and data-driven decision-making.",

    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",

    gifUrl: "/media/saphal-agri-management.gif",

    videoUrl: "/media/saphal-logistics.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "Digital agricultural procurement management",
      "Procurement workflow and activity monitoring",
      "Farmer, supplier, and procurement center data management",
      "Procurement quantity and transaction tracking",
      "Material handling and movement monitoring",
      "Inventory and stock visibility",
      "Warehouse and storage operation management",
      "Transportation and logistics coordination",
      "Real-time supply chain visibility",
      "Vehicle and dispatch tracking",
      "Digital documentation and record management",
      "Centralized operational dashboard",
      "Reports and analytics for informed decision-making",
      "Improved transparency across procurement and logistics operations",
      "Streamlined coordination between procurement, handling, storage, and transportation activities",
    ],

    specifications: {
      Platform:
        "Web-Based Agricultural Procurement & Logistics Management Platform",
      Procurement: "Digital Procurement Workflow and Transaction Management",
      Handling: "Material Handling and Movement Monitoring",
      Inventory: "Stock and Inventory Visibility",
      Storage: "Warehouse and Storage Operations Management",
      Logistics: "Transportation and Dispatch Coordination",
      Tracking: "Real-Time Operational and Supply Chain Monitoring",
      Documentation: "Centralized Digital Records and Documentation",
      Reporting: "Procurement, Inventory and Logistics Reports",
      Analytics: "Operational Data and Performance Analytics",
      Dashboard: "Centralized Management Dashboard",
      Application: "Agricultural Procurement, Handling, Storage and Logistics",
    },

    applications: [
      "Agricultural Procurement",
      "Food Grain Procurement",
      "Procurement Centers",
      "Warehousing & Storage",
      "Inventory Management",
      "Agricultural Supply Chain",
      "Logistics & Transportation",
      "Material Handling Operations",
      "Food Distribution Operations",
      "Government & Cooperative Procurement Operations",
    ],
  },

  {
    id: "workflow-tracer-operational-tracing",
    category: "Software",
    title: "Workflow Tracker - Automated Operational Tracing Software",

    shortDesc:
      "Automated digital platform designed to track, monitor, and manage operational workflows, activities, and processes through centralized real-time visibility.",

    longDesc:
      "Workflow Tracker is an automated digital platform designed to provide end-to-end visibility into operational workflows and business processes. The platform helps organizations digitally trace activities, monitor process progress, track operational records, and improve coordination across different stages of a workflow. By replacing fragmented manual tracking with centralized digital monitoring, Workflow Tracer enables organizations to improve transparency, operational control, accountability, and data-driven decision-making.",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000",

    gifUrl: "/media/workflow-tracer.gif",

    videoUrl: "/media/workflow-tracer-demo.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "Automated digital workflow tracing",
      "End-to-end operational process monitoring",
      "Real-time workflow status visibility",
      "Centralized tracking of operational activities",
      "Digital record and transaction management",
      "Process-wise activity monitoring",
      "Task and workflow progress tracking",
      "Automated status updates and notifications",
      "Improved operational transparency and accountability",
      "Centralized dashboard for workflow monitoring",
      "Reports and analytics for operational insights",
      "Historical workflow and activity records",
      "Reduced dependency on manual tracking and reporting",
      "Improved coordination between teams and operational stakeholders",
      "Data-driven decision-making and operational control",
    ],

    specifications: {
      Platform: "Web-Based Digital Workflow Tracking Platform",
      "Workflow Tracking": "Automated End-to-End Operational Tracing",
      Monitoring: "Real-Time Workflow and Activity Monitoring",
      "Process Management": "Digital Process and Workflow Management",
      Records: "Centralized Digital Records and Activity History",
      Dashboard: "Centralized Operational Monitoring Dashboard",
      Notifications: "Automated Status Updates and Alerts",
      Reporting: "Workflow and Operational Performance Reports",
      Analytics: "Process and Activity-Based Operational Analytics",
      Visibility: "End-to-End Operational Process Visibility",
      Application: "Business Workflows, Operations and Process Tracking",
    },

    applications: [
      "Government & Public Sector Operations",
      "Agricultural Procurement Operations",
      "Supply Chain & Logistics",
      "Food Grain Operations",
      "Workflow & Process Management",
      "Operational Monitoring",
      "Business Process Tracking",
      "Digital Record Management",
      "Multi-Department Operations",
      "Enterprise Workflow Management",
    ],
  },

  {
    id: "whatsapp-appointment-order-management",
    category: "Software",
    title: "WhatsApp-Based Appointment & Order Management System",

    shortDesc:
      "A WhatsApp-based digital management solution designed to simplify appointment booking, order management, customer communication, and business operations through a familiar messaging platform.",

    longDesc:
      "Our WhatsApp-Based Appointment & Order Management System helps businesses manage customer appointments and orders directly through WhatsApp. The platform enables customers to conveniently interact with businesses, request appointments, place orders, receive confirmations, and stay updated through automated messaging workflows. By connecting customer communication with centralized appointment and order management, the system helps businesses reduce manual coordination, improve response times, streamline operations, and deliver a more convenient customer experience.",

    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",

    gifUrl: "/media/whatsapp-order-management.gif",

    videoUrl: "/media/whatsapp-appointment-demo.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "WhatsApp-based appointment booking",
      "WhatsApp-based order placement and management",
      "Automated appointment confirmations",
      "Automated order confirmations and status updates",
      "Customer communication through WhatsApp",
      "Appointment scheduling and time-slot management",
      "Order tracking and status monitoring",
      "Automated customer notifications and reminders",
      "Centralized appointment and order dashboard",
      "Customer data and interaction management",
      "Reduced manual calls and coordination",
      "Improved response time and customer engagement",
      "Digital records of appointments and orders",
      "Real-time operational visibility",
      "Streamlined customer service and business workflows",
    ],

    specifications: {
      Platform: "WhatsApp-Based Digital Management Platform",
      Communication: "WhatsApp-Based Customer Interaction",
      "Appointment Management": "Booking, Scheduling and Confirmation",
      "Order Management": "Order Placement, Processing and Status Tracking",
      Notifications: "Automated Confirmations, Reminders and Updates",
      "Customer Management": "Centralized Customer and Interaction Records",
      Dashboard: "Centralized Appointment and Order Management Dashboard",
      Tracking: "Real-Time Appointment and Order Status Monitoring",
      Automation: "Automated Messaging and Workflow Management",
      Reporting: "Appointment, Order and Operational Reports",
      Application: "Customer Service, Appointment and Order-Based Businesses",
    },

    applications: [
      "Healthcare & Clinics",
      "Salons & Beauty Services",
      "Restaurants & Food Businesses",
      "Retail & E-Commerce",
      "Service-Based Businesses",
      "Repair & Maintenance Services",
      "Consultation & Professional Services",
      "Education & Training",
      "Hospitality & Customer Services",
      "Small & Medium Businesses",
    ],
  },

  {
    id: "mobile-tracking-app",
    category: "Software",
    title: "Mobile Tracking Application",
    shortDesc:
      "On-the-go tracking solution for iOS and Android with instant push notifications.",
    longDesc:
      "Keep your fleet in your pocket. Our mobile application offers the core functionality of our dashboard in a streamlined, mobile-first interface. Designed for managers who are always on the move, it provides instant access to location data and critical alerts.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/smarter-logistics.gif",
    videoUrl: "/media/track-everything.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Live tracking on mobile maps",
      "Instant push notification alerts",
      "Geofence management",
      "One-tap driver communication",
      "Offline data synchronization",
    ],
    specifications: {
      "OS Support": "iOS 14+ & Android 10+",
      "App Size": "Under 50MB",
      "Language Support": "Multi-lingual",
      Biometrics: "FaceID & Fingerprint support",
      "Map Provider": "Google Maps / Apple Maps",
    },
    applications: [
      "Personal Vehicle Owners",
      "Field Service Managers",
      "Pet Owners",
      "Family Safety Monitoring",
    ],
  },
  {
    id: "enterprise-api-gateway",
    category: "Software",
    title: "Enterprise API Gateway",
    shortDesc:
      "Robust API solution for seamless integration of tracking data into your existing ERP/CRM.",
    longDesc:
      "Bridge the gap between telematics hardware and your business logic. Our Enterprise API Gateway provides a high-throughput, low-latency interface for developers to pull tracking data directly into internal systems like SAP, Salesforce, or custom ERPs.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/dashboard-tracking.gif",
    videoUrl: "/media/circuit-board.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "RESTful API architecture",
      "Real-time WebSocket streams",
      "Detailed API documentation",
      "Usage monitoring and quotas",
      "Secure OAuth2 authentication",
    ],
    specifications: {
      Protocol: "HTTPS / WSS",
      "Response Time": "< 100ms",
      Format: "JSON / XML",
      Uptime: "99.99% SLA",
      "Rate Limit": "Scalable based on tier",
    },
    applications: [
      "Software Developers",
      "Large Enterprises",
      "Third-party Integrators",
      "Data Analytics Firms",
    ],
  },
  {
    id: "smart-geofencing-engine",
    category: "Software",
    title: "Smart Geofencing Engine",
    shortDesc:
      "Advanced spatial analysis tool for complex boundary management and automated triggers.",
    longDesc:
      "Go beyond simple circles. Our Smart Geofencing Engine supports complex polygons, corridor-based geofences, and time-sensitive boundaries. Automatically trigger actions like engine immobilization or SMS alerts when a boundary is crossed.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/tracking-animation.gif",
    videoUrl: "/media/track-fleet.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Complex polygon support",
      "Route corridor geofencing",
      "Time-of-day constraints",
      "Automated webhook triggers",
      "Historical entry/exit logs",
    ],
    specifications: {
      Precision: "Sub-meter spatial analysis",
      "Max Geofences": "Unlimited",
      Processing: "Real-time edge computing",
      "Alert Types": "SMS, Email, Push, Webhook",
      "Export Format": "KML / GeoJSON",
    },
    applications: [
      "Restricted Zone Monitoring",
      "Delivery Route Compliance",
      "Asset Theft Prevention",
      "Construction Site Management",
    ],
  },
  {
    id: "driver-behavior-ai",
    category: "Software",
    title: "Driver Behavior AI",
    shortDesc:
      "AI-powered analysis of driving patterns to improve safety and reduce insurance costs.",
    longDesc:
      "Leverage machine learning to identify risky driving habits. Our AI analyzes accelerometer data and GPS patterns to detect harsh braking, rapid acceleration, sharp cornering, and excessive idling, providing actionable safety scores for every driver.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/gps-tracker-anim.gif",
    videoUrl: "/media/track-fleet.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Harsh event detection",
      "Safety score calculation",
      "Driver ranking leaderboard",
      "Personalized coaching tips",
      "Insurance-ready reports",
    ],
    specifications: {
      Model: "Proprietary ML Algorithms",
      "Data Input": "GPS + G-Sensor Data",
      "Scoring Range": "0 - 100",
      Reporting: "Daily / Weekly / Monthly",
      Alerts: "Real-time voice feedback",
    },
    applications: [
      "Insurance Companies",
      "Commercial Fleet Owners",
      "Driver Training Schools",
      "Ride-sharing Platforms",
    ],
  },
  {
    id: "predictive-maintenance-portal",
    category: "Software",
    title: "Predictive Maintenance Portal",
    shortDesc:
      "Proactive vehicle health monitoring to prevent breakdowns and extend asset life.",
    longDesc:
      "Stop reacting to breakdowns. Our Predictive Maintenance Portal uses engine diagnostics and mileage data to predict when a vehicle needs service. It tracks engine hours, oil life, and tire wear, sending alerts before issues become critical.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/gps-tracker-anim.gif",
    videoUrl: "/media/realtime-tracking.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Engine health diagnostics",
      "Mileage-based service alerts",
      "Digital service logbooks",
      "Spare parts inventory tracking",
      "Total Cost of Ownership (TCO) tools",
    ],
    specifications: {
      "Data Source": "CAN-Bus / OBD-II",
      "Prediction Accuracy": "> 90%",
      "Manufacturer Support": "Universal compatibility",
      "Cloud Sync": "Real-time sync",
      "User Access": "Multi-role support",
    },
    applications: [
      "Trucking Companies",
      "Equipment Rental Firms",
      "Leasing Agencies",
      "Municipal Fleets",
    ],
  },
];
