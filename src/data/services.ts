/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail } from "../types";

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "vehicle-tracking",
    title: "Vehicle Tracking",
    icon: "MapPin",
    shortDesc: "Real-time vehicle tracking with live location tracking, geofencing, ignition status, and instant alerts.",
    longDesc: "Our advanced vehicle tracking solution provides real-time, high-precision location monitoring for commercial and private vehicles. Empowered by intelligent 4G hardware and our state-of-the-art software dashboard, you get absolute visibility over your vehicle's movements, routes, and security, anytime and anywhere.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Real-Time Pinpoint Tracking (accuracy up to 2.5 meters)",
      "Smart Geofencing with Instant Push & SMS Alerts",
      "Ignition On/Off Detection & Remote Engine Immobilization",
      "Playback Route History up to 90 Days",
      "Over-speeding, Harsh Braking, and Sharp Turn Alerts"
    ],
    specifications: {
      "Supported Networks": "4G LTE-FDD / 2G GSM",
      "Location Accuracy": "< 2.5m CEP",
      "Tracking Platform": "Cloud-based Web Console & Native Mobile Apps (iOS/Android)",
      "Update Interval": "Customizable from 5 seconds to 24 hours",
      "Security Protocols": "TLS 1.3 Encryption, HTTPS APIs"
    },
    applications: [
      "Car Rental & Leasing Agencies",
      "Private Vehicle Owners & Security Agencies",
      "Corporate Employee Shuttle Tracking",
      "Distribution & Supply Chain Operators"
    ]
  },
  {
    id: "fleet-management",
    title: "Fleet Management",
    icon: "Truck",
    shortDesc: "Complete fleet management solutions with fuel monitoring, driver behavior analysis, and automated maintenance scheduling.",
    longDesc: "Transform raw fleet metrics into operational power. Our Fleet Management system tracks vehicle diagnostics, analyzes driver performance, optimizes fuel usage, and streamlines complex compliance schedules, resulting in reduced overheads and heightened safety across your transport organization.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Real-time Fuel Level Monitoring & Theft Alarms",
      "Driver Behavior Analytics (harsh acceleration, idling, cornering)",
      "Automatic Maintenance Reminders based on Mileage",
      "Consolidated Multi-vehicle Trip & Expense Reports",
      "API Integrations with Corporate ERPs & Logistics Portals"
    ],
    specifications: {
      "Sensor Compatibility": "CAN-Bus (FMS/OBD-II), Analog fuel sensors",
      "Diagnostics Captured": "Engine RPM, Coolant Temp, Error Codes (DTCs), Fuel Flow Rate",
      "Multi-Vehicle View": "Up to 10,000+ active fleet units on a single map interface",
      "Report Formats": "PDF, Excel (XLSX), CSV, automated daily emails"
    },
    applications: [
      "Interstate Cargo Logistics & Courier Services",
      "Cold Chain & Temperature-controlled Transport",
      "Construction & Heavy Machinery Fleets",
      "Waste Management & Municipal Fleet Services"
    ]
  },
  {
    id: "reflective-tape",
    title: "Reflective Tape Solutions",
    icon: "Shield",
    shortDesc: "Premium AIS-compliant microprismatic retroreflective tapes for high vehicle and industrial safety.",
    longDesc: "We provide industry-leading, government-approved microprismatic retroreflective tapes. Engineered for extreme visibility in dark, rainy, or dusty conditions, our reflective tapes ensure absolute safety compliance for commercial trucks, trailers, and public transit assets, vastly reducing nighttime collisions.",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "AIS 090 & International Standards Compliant Certified",
      "Advanced Microprismatic Technology with high reflectivity index",
      "Weatherproof, UV-resistant, and high-pressure washing durable",
      "Premium pressure-sensitive aggressive adhesive base",
      "Long-lasting brightness retention (up to 7 years warranty)"
    ],
    specifications: {
      "Reflectivity Index": "Meets Class C AIS standards (>300 cd/lux/m2)",
      "Tape Widths": "50mm / 75mm (customizable)",
      "Standard Color Patterns": "Solid Yellow, Solid Red, Alternating Red/White, Chevron",
      "Operating Temp Range": "-40°C to +80°C"
    },
    applications: [
      "Heavy Commercial Vehicles (HCV) & Multi-axle Trucks",
      "School Buses & Passenger Transit Vehicles",
      "Industrial Infrastructure & Hazardous Zone Markings",
      "Highways & Barrier Reflectorization"
    ]
  },
  {
    id: "dashcam-solutions",
    title: "Intelligent Dashcam Solutions",
    icon: "Camera",
    shortDesc: "Full HD smart fleet dashcams with ADAS, Driver Monitoring (DMS), and real-time live video streaming.",
    longDesc: "Upgrade your fleet safety with smart dashcams powered by Artificial Intelligence. Designed with Advanced Driver Assistance Systems (ADAS) and Driver Monitoring Systems (DMS), our solutions track road hazards and detect driver distraction or fatigue in real-time, streaming high-definition video evidence directly to the cloud.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Dual-channel recording: Road-facing 1080P & Cabin-facing AI camera",
      "Real-time ADAS alerts (Forward Collision, Lane Departure)",
      "Driver Monitoring (DMS): fatigue, phone use, smoking, distraction detection",
      "G-Sensor Collision Event Lock with automated cloud upload",
      "Real-time Live Video Streaming via high-speed 4G"
    ],
    specifications: {
      "Video Resolution": "Dual Channel 1080P HD (Road) + 720P (Cabin)",
      "Lens Field of View": "140° Wide Angle",
      "Connectivity": "4G LTE & Wi-Fi hotspot",
      "Storage": "Dual SD card slot supporting up to 512GB (Industrial grade)",
      "Night Vision": "Infrared LED array for crystal clear cabin visibility in 100% darkness"
    },
    applications: [
      "Ride-Hailing & Taxi Fleet Operators",
      "High-Value Freight Transit Cargo Carriers",
      "Corporate Executive Cars & Shuttles",
      "Commercial Logistics & Fuel Bowser Vehicles"
    ]
  },
  {
    id: "personalized-tracking",
    title: "Personalized Tracking",
    icon: "UserCheck",
    shortDesc: "Discreet and portable tracking solutions for children, elderly safety, field employees, and personal assets.",
    longDesc: "Protect what matters most. Our personalized GPS trackers are compact, lightweight, and equipped with SOS panic buttons and two-way voice communication, allowing you to stay connected with vulnerable family members or monitor field staff operations smoothly.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Ultra-Compact Form Factor with long standby battery life",
      "Instant SOS Panic Trigger Button (calls up to 3 emergency numbers)",
      "Two-Way Voice Calling and Ambient Voice Listening",
      "Geofence Boundaries with instant exit alerts via App",
      "Step Counter and Historic Route Path visualization"
    ],
    specifications: {
      "Battery Capacity": "1000mAh Lithium-Polymer (up to 7 days standby)",
      "Weight": "Only 38 grams",
      "Communication Mode": "4G LTE / 2G + SMS + Wi-Fi Positioning",
      "Waterproof Level": "IP67 Dust & Water resistant"
    },
    applications: [
      "Children safety during school transit",
      "Elderly patient monitoring (Alzheimer/Dementia safety)",
      "Field Sales & Delivery Force management",
      "Valuable luggage & asset shipment security"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    icon: "Cpu",
    shortDesc: "Tailor-made software, responsive dashboards, enterprise ERP integrations, and mobile tracking applications.",
    longDesc: "Achieve absolute control with custom software tailored to your specific telemetry workflows. We design and build secure, hyper-scalable cloud dashboards, analytical engines, and native mobile apps that integrate seamlessly with your existing enterprise architecture, warehouse managers, and custom sensors.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Bespoke Dashboard Interfaces with real-time WebSockets widgets",
      "Automated Custom Report Builders & Scheduled Diagnostics Analytics",
      "Native iOS & Android Applications (React Native / Flutter)",
      "Secure REST and Webhook APIs for seamless CRM and ERP linking",
      "Cloud Infrastructure Setup on AWS, GCP, or Azure with auto-scale"
    ],
    specifications: {
      "Backend Frameworks": "Node.js, Python, Go, Express",
      "Frontend Architecture": "React, Next.js, Tailwind CSS, D3.js Charts",
      "Database Layer": "PostgreSQL, MongoDB, Redis, InfluxDB (Time-series)",
      "Encryption & Compliance": "OAuth2.0, SSL/TLS, GDPR compliant storage"
    },
    applications: [
      "Logistics Aggregators & Fleet SaaS Companies",
      "Large Manufacturing Corporations tracking Supply Chains",
      "Cold-Storage Warehouse Operators monitoring temperatures",
      "Custom IoT hardware developers requiring dedicated software"
    ]
  },
  {
    id: "government-fleet",
    title: "Government Fleet Management",
    icon: "Building",
    shortDesc: "Compliant tracking solutions matching strict government regulations, public transport buses, and utility vehicles.",
    longDesc: "We provide specialized, compliant solutions for municipal, regional, and national government fleets. Designed in strict accordance with AIS-140 and national standard mandates, our hardware and tracking servers support public safety systems, city buses, waste disposal vectors, and emergency vehicles.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1554734867-bf3c00a49371?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "AIS 140 Certified GPS hardware with dual SIM and emergency SOS panic trigger",
      "Real-time integration with centralized government tracking servers",
      "Route optimization and schedule adherence metrics for public transit buses",
      "Automated sirens and flashing hazard warnings trigger diagnostics",
      "Encrypted secure data vaults for sensitive state and defense operations"
    ],
    specifications: {
      "Compliance Standards": "AIS 140 Certified, CDAC Approved",
      "SIM Backup": "Dual eSIM/Nano-SIM with automated network roaming failover",
      "Emergency Support": "Physical SOS panic buttons, immediate backend SOS broadcast routing",
      "Server Security": "Government-approved sovereign data storage standards"
    },
    applications: [
      "State Transport Undertakings (STU) Public Buses",
      "Municipal Corporation Garbage disposal and Sweeper trucks",
      "Police Patrolling Interceptors & Command Vehicles",
      "Government Emergency Ambulances & Fire Engines"
    ]
  },
  {
    id: "ev-bms",
    title: "BMS for EV Batteries",
    icon: "Zap",
    shortDesc: "Smart battery management systems (BMS) with cell monitoring, balancing, and state-of-health diagnostics for EVs.",
    longDesc: "Maximize the safety, efficiency, and longevity of Electric Vehicle batteries. Our Smart Battery Management Systems (BMS) offer microsecond-level scanning of cell voltages, dynamic passive and active cell balancing, temperature thermal runway triggers, and real-time battery analytics telemetry.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "High-precision monitoring of cell voltage and pack status",
      "Dynamic cell balancing (Passive standard, Active support options)",
      "State of Charge (SOC) and State of Health (SOH) computation algorithms",
      "Thermal runaway prevention with automatic multi-sensor cooling triggers",
      "CAN-Bus interface telemetry for dashboard visualization and warning prompts"
    ],
    specifications: {
      "Supported Battery Chemistry": "LiFePO4, Li-Ion (NMC), LTO",
      "Cell Series Supported": "4S to 24S standard (expandable via cascading controllers)",
      "Current Measurements": "Up to 300A continuous, 600A peak detection",
      "Communication Bus": "CAN 2.0B, RS485, Bluetooth for instant app metrics"
    },
    applications: [
      "Electric 2-Wheeler (Scooters & Bikes) Packs",
      "Electric 3-Wheeler E-Rickshaws & Cargo loaders",
      "Heavy-duty Commercial Electric Truck battery modules",
      "Stationary Solar Grid & UPS Battery storage installations"
    ]
  }
];
