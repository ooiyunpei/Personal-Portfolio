// Projects/projectsData.js

// 1. 可自由扩展的标签列表（以后加新分类直接在数组加一项即可）
window.projectCategories = [
  { id: "all", label: "All" },
  { id: "company", label: "Company Projects" },
  { id: "college", label: "College Projects" },
  { id: "personal", label: "Personal Projects" }
];

// 2. 项目列表（新增 type 字段对应 category id）
window.projectsList = [
  {
    pillarNum: "01",
    type: "company",
    category: "Company Revamp",
    title: "Genesis Tech Solutions",
    description: "Official corporate website revitalization with modern responsive layout and solutions showcase.",
    bgImage: "Project Cards/G.png",
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
    bgImage: "Project Cards/Presmat1.png",
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
    bgImage: "Project Cards/Burger1.png",
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
    bgImage: "Project Cards/Me1.png",
    link: "https://yunpeiooi.my",
    displayLink: "yunpeiooi.my",
    status: "Live",
    tags: ["React", "Tailwind", "Branding"]
  }
];