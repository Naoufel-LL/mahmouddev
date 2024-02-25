export const METADATA = {
  author: "Mahmoud Boufares",
  title: "Portfolio | Mahmoud Boufares",
  description:
    "Mahmoud Boufares is a Frontend Developer from France, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "Mahmoud Boufares",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "French",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Étudiant en école d'ingénieur",
  "Passionné par le développement web",
  "je suis motivé,créatif et curieux,",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: boufaresmahmoud@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mahmoud-boufares-ba02b0219/",
  },
  {
    name: "github",
    url: "https://github.com/Boufaresmahmoud",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/boufaresmahmoud/",
  },
  
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "sass",
    // "cpp",
    // "java",
    // "python",
    "nodejs",
    "firebase",
    // "moralis",
    // "stripe",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", ""],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Palmier Food",
    image: "/projects/palmierfood.jpeg",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Site Vitrine pour un restaurant à Caen 🍔",
    gradient: ["#159266", "#212738"],
    url: "https://palmierfoodcaen.web.app",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "MB-Glasses",
    image: "/projects/glasses.jpeg",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "MB-Glasses est un magasin en ligne qui propose des lunettes de soleil tendance 🕶️ ",
    gradient: ["#F14658", "#EA4D2C"],
    url: "https://mb-glasses.web.app/",
    tech: ["typescript", "react", "sanity.io"],
  },
  {
    name: "MB-Watches",
    image: "/projects/watches.jpeg",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "MB-Watches est un magasin en ligne qui propose des montres de luxe tendance ⌚",
    gradient: ["#eba300", "#212738"],
    url: "https://mb-watches.web.app/watches",
    tech: ["react"],
  },
  {
    name: "Doktor",
    image: "/projects/doktor.jpeg",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Site Vitrine pour une cabinet d'un Doctor 🧑‍⚕️🩺",
    gradient: ["#142D46", "#2E4964"],
    url: "https://berg-doktor.netlify.app",
    tech: ["react"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "NEJMA SERVICE",
    title: "Développeur Web Full Stack",
    location: "",
    range: "2023",
    responsibilities: [
      "Participation au développement d'une application web de gestion des ressources humaines en utilisant du HTML, CSS, JavaScript et React.js.",
      "Implémentation de fonctionnalités front-end telles que la création de tableaux de bord interactifs et la gestion des formulaires.",
      "Contribution au développement du backend en utilisant Node.js et Express.js pour la création d'API RESTful pour l'interaction avec la base de données",
    ],
    url: "",
    video: "",
  },
  {
    id: 2,
    company: "Aviate",
    title: "Frontend Developer Intern",
    location: "Goa",
    range: "May - October 2022",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Spacenos",
    title: "Web Developer Intern",
    location: "Bangalore, Karnataka",
    range: "September - December 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
