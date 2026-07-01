/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductDetail } from "../types";

export const PRODUCTS_DATA: ProductDetail[] = [
  {
    id: "2g-wired-gps",
    title: "2G Wired GPS Tracker",
    shortDesc: "Reliable, highly cost-effective vehicle tracking hardware ideal for basic fleet and security needs.",
    longDesc: "The 2G Wired GPS Tracker is our battle-tested, ultra-reliable telemetry hardware designed for seamless hardwired installation in any vehicle. Combining a high-sensitivity GPS chip with an integrated backup battery and intelligent ignition sensing, it offers round-the-clock tracking with minimum power consumption.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Real-time tracking with high GPS sensitivity (-162dBm)",
      "Intelligent Ignition (ACC) Detection status monitoring",
      "Internal backup battery (150mAh) triggered alert on power disconnect",
      "Ultra-low power sleep modes to protect vehicle battery from draining",
      "Compact size with water-resistant casing for versatile installation"
    ],
    specifications: {
      "Frequency Band": "GSM 850 / 900 / 1800 / 1900 MHz",
      "Operating Voltage": "9V to 36V DC (compatible with cars, bikes, and trucks)",
      "Internal Battery": "150mAh / 3.7V Industrial grade Lithium-Polymer",
      "Dimensions": "74mm x 26mm x 12mm",
      "Weight": "26 grams",
      "GPS Positioning Accuracy": "< 5 meters"
    },
    applications: [
      "Car Rental Fleets",
      "Personal Motorbikes and Scooters",
      "School Bus & Employee Shuttle tracking",
      "Construction machinery asset monitoring"
    ]
  },
  {
    id: "4g-wired-gps",
    title: "4G Wired GPS Tracker",
    shortDesc: "Next-generation high-speed LTE vehicle tracking terminal with advanced diagnostic reporting capabilities.",
    longDesc: "Future-proof your fleet monitoring with our premium 4G Wired GPS Tracker. Engineered for lightning-fast high-speed network communication, this terminal provides instant ping times, ultra-low latency alerts, and supports complex CAN-bus telematics data streams, ensuring seamless connectivity even in remote regions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "High-speed 4G LTE communication with fallback to 2G networks",
      "Advanced Engine Immobilizer relays built-in safety controls",
      "Multiple Analog and Digital I/Os for temperature and fuel sensor integrations",
      "Bluetooth BLE connectivity for local beacons and handsfree sensors",
      "Crash and roll-over automated detection alert with blackbox memory"
    ],
    specifications: {
      "Frequency Band": "LTE-FDD Bands B1/B3/B5/B8/B20 (Regional variants)",
      "Operating Voltage": "9V to 90V DC (wide voltage range supports all commercial vehicles)",
      "Diagnostics Integration": "OBD-II / CAN-Bus reader support",
      "Waterproof Rating": "IP65 certified solid casing",
      "Internal Battery": "270mAh backup battery",
      "Positioning Sensitivity": "-165dBm high sensitivity tracking"
    },
    applications: [
      "Cold Chain temperature-sensitive fleets",
      "Heavy Duty Commercial Multi-axle Trucks",
      "Valuable Cargo logistics and armored cash vans",
      "Public bus transport agencies"
    ]
  },
  {
    id: "multi-gps-mic-sos",
    title: "Multi Function GPS with SOS & Mic",
    shortDesc: "Feature-rich safety tracker supporting two-way emergency communication and live ambient audio listening.",
    longDesc: "The Multi-Function GPS Tracker is built with personal and professional security as its highest priority. Equipped with an external premium SOS panic button, a high-fidelity microphone, and two-way voice communication channels, it allows operators or families to instantly communicate and listen in during emergencies.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Dedicated external physical SOS button with high-grade microswitch",
      "High-sensitivity microphone for live ambient audio monitoring",
      "Two-way voice communication with built-in mini speaker output",
      "Fuel-cut off remote safety trigger relays",
      "Overspeed, towing, and power-off warnings instantly routed"
    ],
    specifications: {
      "Communication Channel": "4G LTE / 3G / 2G with high-speed voice routing",
      "Microphone Range": "Up to 5 meters clear acoustic voice pick-up",
      "Operating Voltage": "9V to 36V DC",
      "SOS Trigger Delay": "< 1 second physical response registration",
      "External Interfaces": "Mic-in, SOS Button-in, Fuel Relay-out"
    },
    applications: [
      "Corporate cab services for employee safety",
      "Luxury vehicle anti-theft and distress setups",
      "VIP transport fleets and security escorts",
      "Delivery agents operating in high-risk zones"
    ]
  },
  {
    id: "wireless-portable-gps",
    title: "Wireless Portable GPS",
    shortDesc: "High-capacity magnetic GPS tracker designed for long-term discrete asset monitoring and simple attachment.",
    longDesc: "The Wireless Portable GPS is the ultimate solution for asset and consignment tracking where hardwiring is impossible or unneeded. Boasting an ultra-strong industrial neodymium magnetic mount and a massive rechargeable battery, this tracker can stay active for up to 120 days on a single charge.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Industrial strong neodymium magnets for vibration-proof adherence",
      "Massive 10,000mAh rechargeable Lithium-Ion battery",
      "Up to 120 days standby battery life (under battery-saver mode)",
      "Light-sensor anti-tamper alert (triggers alert if tracker is detached)",
      "IP67 Dust & Water resistant rugged structural design"
    ],
    specifications: {
      "Battery Capacity": "10,000mAh / 3.7V rechargeable industrial battery",
      "Standby Currents": "Deep sleep < 1.5mA, Active tracking ~60mA",
      "Waterproof Rating": "IP67 (can survive submersion up to 1m for 30 minutes)",
      "Dimensions": "108mm x 61mm x 30mm",
      "Weight": "285 grams",
      "Magnet Pull Force": "Up to 15kg dynamic pull resistance"
    },
    applications: [
      "High-value Shipping Container Tracking",
      "Rental Excavators, Cranes, and Construction Tools",
      "Private Detective and Asset Protection workflows",
      "Cargo Consignment and Marine Freight logistics"
    ]
  },
  {
    id: "smart-id-cards",
    title: "Smart ID Cards",
    shortDesc: "Multi-functional smart RFID cards with long-range tracking for school, corporate office, and security access.",
    longDesc: "Empower your corporate office or campus with our next-generation Smart ID Cards. Seamlessly blending RFID entry credentials, high-precision long-range student/employee tracking beacons, and visual photographic identification, it streamlines office attendance, location registers, and access control.",
    image: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Dual frequency chip support: HF/LF RFID and Long-range active BLE beacon",
      "Automatic hands-free attendance recording upon gateway passage",
      "Integrated emergency SOS buzzer trigger inside card body",
      "Ultra-thin standard ID card size with glossy print-ready overlay",
      "Eco-friendly, long-lasting low power consumption (battery lasts up to 2 years)"
    ],
    specifications: {
      "RFID Standard": "Mifare 13.56MHz (HF) & EM4100 125KHz (LF)",
      "Active Range": "Up to 80 meters (adjustable for BLE gate registers)",
      "Battery Type": "Non-replaceable ultra-thin Lithium coin battery (CR2016 equivalent)",
      "Material": "Premium flexible PVC / PET composite",
      "Thickness": "Only 1.2mm (extremely light and comfortable)",
      "Security": "AES-128 cryptographic key storage"
    },
    applications: [
      "Corporate Enterprise Office security gates",
      "Universities, schools, and children transit attendance",
      "High-security research labs and sensitive factory wards",
      "Exhibitions, events, and visitor flow tracking"
    ]
  },
  {
    id: "pet-tracking",
    title: "Pet Tracking collar GPS",
    shortDesc: "Featherlight, waterproof GPS collar with smart virtual fence controls to protect your beloved dogs and cats.",
    longDesc: "Never worry about your furry companion getting lost. Our Smart Pet Tracking Collar GPS is custom designed to be comfortable, lightweight, and rugged enough for any adventure. Supported by an intuitive mobile app, you can track your pet in real-time, monitor their daily activity, and set virtual safety circles.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Featherlight housing that easily clips onto standard collars",
      "IP68 dust, sand, and water submersion resistance",
      "Virtual Geofence safety circle with instant smart mobile alerts",
      "Built-in smart LED finder beacon (lights up on command to locate pet in darkness)",
      "Activity tracking with calorie burnt metrics and sleep logs"
    ],
    specifications: {
      "Tracker Weight": "Just 22 grams (suitable for dogs and cats > 3.5kg)",
      "Waterproof Level": "IP68 (completely safe for swimming pets)",
      "Battery Standby": "Up to 10 days (smart power scheduling depending on motion)",
      "Positioning Systems": "GPS + Glonass + Wi-Fi Hotspots + LBS positioning",
      "Collar Material": "Reinforced soft-touch hypoallergenic nylon strap"
    },
    applications: [
      "Dog outdoor monitoring and runaway prevention",
      "Adventure and hiking pet safety gear",
      "Indoors/Outdoors cat roaming tracking",
      "Animal shelter and pet health research"
    ]
  }
];
