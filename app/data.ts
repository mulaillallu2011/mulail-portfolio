export const profile = {
  github: "https://github.com/mulaillallu2011",
  email: "mailto:mulail.lallu2011@gmail.com",
  instagram: "https://www.instagram.com/__mhd__mulail.2.14/",
};
export type Project = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  detail: string;
  tech: string[];
  award?: string;
  image?: string;
  imageAlt?: string;
  repo?: string;
  kind: "rover" | "sensor" | "software" | "led" | "buddy";
};
export const projects: Project[] = [
  {
    id: "01",
    title: "Speleo Bot",
    category: "Robotics",
    status: "In development",
    kind: "rover",
    description:
      "Exploring the unknown, one wheel at a time. A six-wheel cave exploration rover developed with Team ThinkORB.",
    detail:
      "A rocker-bogie rover intended to make cave exploration safer and more informative. The design brings together 2D SLAM mapping, obstacle avoidance, environmental and hazardous-gas monitoring, image capture, LoRa communication, onboard storage, and return-to-home navigation. The software work also explores a ground-control dashboard for live rover telemetry and camera visuals. Hardware integration and field testing remain in development.",
    tech: [
      "Raspberry Pi 4",
      "ESP32",
      "YDLIDAR X2",
      "2D SLAM",
      "Pi Camera Module 3",
      "LoRa SX1278",
      "Gas sensors",
      "Wheel encoders",
      "Cytron MDD20A",
      "Python",
    ],
  },
  {
    id: "02",
    title: "A little sensing. A safer tomorrow.",
    category: "IoT",
    status: "Prototype",
    kind: "sensor",
    description:
      "IoT-Based Disaster Management System — an ESP32 prototype exploring environmental warning conditions.",
    detail:
      "A Wi-Fi connected environmental monitoring prototype, with a local web dashboard. Soil moisture, water level, thin-film pressure, temperature, and vibration sensors explore conditions associated with landslides, water obstruction, ice-related hazards, and changing surroundings. This is an educational prototype, not a validated emergency warning system.",
    tech: [
      "ESP32 DevKit V1",
      "Wi-Fi",
      "Arduino IDE",
      "C/C++",
      "Environmental sensors",
    ],
    award: "Science Fair · 2nd place in IoT · District qualifier",
  },
  {
    id: "03",
    title: "From workshop to workflow.",
    category: "Web",
    status: "In development",
    kind: "software",
    description:
      "Startup Management Software for robotics kits, electronics, workshops, students, and classes.",
    detail:
      "Modules worked on include dashboards, products, inventory, sales, billing, and class management. The stack uses Supabase and PostgreSQL with authentication and role-based access. This portfolio describes the work without implying a publicly released production service.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    id: "04",
    title: "Eight LEDs. Fifteen possibilities.",
    category: "Electronics",
    status: "Built project",
    kind: "led",
    description:
      "Arduino LED Chaser with 15 lighting patterns and manual or automatic controls.",
    detail:
      "An eight-LED circuit built around Arduino UNO, LEDs, push buttons, and breadboard electronics. Manual and automatic controls explore sequencing, timing, input handling, and embedded C/C++.",
    tech: ["Arduino UNO", "C/C++", "LEDs", "Push buttons", "Breadboard"],
  },
  {
    id: "05",
    title: "Smart Desk Buddy",
    category: "Electronics",
    status: "Simulation in development",
    kind: "buddy",
    description:
      "An animated desk companion interface being explored in Wokwi, with idle eyes and a wake-and-reply interaction.",
    detail:
      "An OLED desk-companion experiment with idle, listening, thinking, and reply screens. Current work focuses on a typed “hey buddy” wake interaction, readable replies, and an inactivity timeout in Wokwi. Real microphone wake-word recognition and a completed physical assistant are future work.",
    tech: [
      "Wokwi",
      "OLED interface",
      "Arduino C++",
      "State machines",
    ],
  },
  {
    id: "06", title: "BizLedger", category: "Web", status: "In development", kind: "software",
    description: "A React accounting interface bringing sales, purchases, inventory, and customer balances into one workspace.",
    detail: "Development work covers dashboard totals, sales invoices, purchase bills, stock movement, customers, suppliers, payments, receipts, and accounting report screens. The shared prototype uses browser local storage. Financial calculations and production readiness have not been independently validated.",
    tech: ["React", "JavaScript", "CSS", "Local storage"]
  },
  {
    id: "07", title: "VYBE Music", category: "Web", status: "In development", kind: "software",
    description: "A music-player project exploring interface design and YouTube Data API integration.",
    detail: "Current work includes restoring the player styling and setting up the YouTube Data API integration. A completed public release is not yet confirmed.",
    tech: ["Web UI", "CSS", "YouTube Data API"]
  }
];
export const achievements = [
  {
    title: "WRO Regional",
    year: "2026",
    place: "Kochi",
    distinction: "2nd place",
    label: "Silver medal",
    text: "Future Innovators Senior · Team ThinkORB",
    icon: "medal",
  },
  {
    title: "WRO Nationals",
    year: "2026",
    place: "Hyderabad",
    distinction: "Silver badge",
    label: "National recognition",
    text: "World Robot Olympiad · Team ThinkORB · Silver badge recognition.",
    icon: "badge",
  },
  {
    title: "Young Innovators Programme",
    year: "",
    place: "YIP",
    distinction: "District selection",
    label: "Qualified",
    text: "Advanced from the Sub-District level to the District level.",
    icon: "spark",
  },
  {
    title: "Science Fair · IoT",
    year: "",
    place: "District qualifier",
    distinction: "2nd place",
    label: "IoT category",
    text: "Recognized for the IoT-based disaster management and environmental monitoring prototype.",
    icon: "award",
  },
];
export type Photo = {
  src: string;
  alt: string;
  caption: string;
  category: string;
};
// Supplied portraits and certificates; captions reflect each document's actual title.
export const photos: Photo[] = [
  {
    src: "/images/wro-regional-silver-certificate.webp",
    alt: "WRO Regional Championship 2026 second place certificate for Muhammed Mulail.P, KIN ThinkORB, Future Innovators Senior",
    caption: "WRO Regionals 2026 · 2nd place",
    category: "Certificate",
  },
  {
    src: "/images/mulail-portrait.webp",
    alt: "Mulail wearing glasses, standing outdoors among yellow flowers",
    caption: "Mulail · Outdoors",
    category: "Portrait",
  },
  {
    src: "/images/mulail-outdoors.webp",
    alt: "Mulail standing beside tropical plants in a mustard-colored shirt",
    caption: "A moment outside the workshop",
    category: "Portrait",
  },
  {
    src: "/images/mulail-casual.webp",
    alt: "Mulail taking a mirror portrait in a dark shirt",
    caption: "A little everyday life",
    category: "Portrait",
  },
  {
    src: "/images/wro-national-silver-certificate.webp",
    alt: "WRO India National Championship 2026 certificate awarding Muhammed Mulail.P of KIN ThinkORB a silver badge",
    caption: "WRO Nationals 2026 · Silver badge",
    category: "Certificate",
  },
  {
    src: "/images/wro-virtual-gold-certificate.webp",
    alt: "WRO India Virtual Championship Round 2026 certificate: Gold Badge, Future Innovators Senior, Muhammed Mulail.P, KIN ThinkORB",
    caption: "WRO Virtual Round 2026 · Gold badge",
    category: "Certificate",
  },
  {
    src: "/images/speleo-brand.webp",
    alt: "Blue SB monogram and Speleo Bot project wordmark on a white background",
    caption: "Speleo Bot · Project identity",
    category: "Project artwork",
  },
];
