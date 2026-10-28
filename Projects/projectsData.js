// Projects/projectsData.js
window.projectCategories = [
  { id: "all", label: "All" },
  { id: "company", label: "Company Projects" },
  { id: "college", label: "College Projects" },
  { id: "personal", label: "Personal Projects" }
];

window.projectsList = [
  {
    pillarNum: "01",
    type: "company",
    category: "Company Revamp",
    title: "Genesis Tech Solutions",
    description: "Official corporate website revitalization with modern responsive layout and solutions showcase.",
    bgImage: "images/Projects/cards_bg/G.png",
    link: "https://genesistech.com.my",
    displayLink: "genesistech.com.my",
    status: "Live",
    tags: ["Web Revamp", "Corporate", "Responsive"]
  },
  {
    pillarNum: "02",
    type: "company",
    category: "Client Revamp",
    title: "Presgrave & Matthews",
    description: "Comprehensive firm portal redesign focusing on brand authority, structured navigation, and accessibility.",
    bgImage: "images/Projects/cards_bg/Presmat1.png",
    link: "https://presmat.com",
    displayLink: "presmat.com",
    status: "Live",
    tags: ["Client Work", "UI/UX", "Modern"]
  },
  {
    pillarNum: "03",
    type: "college",
    category: "College Project",
    title: "Food Ordering System",
    description: "Full-stack web application designed for interactive dining workflows, menu browsing, and real-time checkout.",
    bgImage: "images/Projects/cards_bg/Burger1.png",
    link: null,
    displayLink: "Deploying Soon",
    status: "Pending",
    tags: ["Academic", "Full-Stack", "Web App"]
  },
  {
    pillarNum: "04",
    type: "personal",
    category: "Portfolio",
    title: "Personal Portfolio",
    description: "Minimalist portfolio showcasing academic history, technical skills, interactive modules, and custom domain.",
    bgImage: "images/Projects/cards_bg/Me1.png",
    link: "https://yunpeiooi.my",
    displayLink: "yunpeiooi.my",
    status: "Live",
    tags: ["React", "Tailwind", "Branding"]
  }
];