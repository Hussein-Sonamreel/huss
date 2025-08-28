import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

// =====================================================================
// PERSON — Your personal information.
// =====================================================================
const person: Person = {
  firstName: "Hussein",
  lastName: "Salim",
  name: "Hussein Salim",
  role: "Front-End Developer",
  avatar: "/images/avatar.jpg", // Make sure to replace this file in the /public/images/ folder
  email: "2025salimh@gmail.com",
  location: "Africa/Nairobi", // IANA time zone identifier
  languages: ["English", "Swahili"], 
};

// =====================================================================
// NEWSLETTER — Optional: display a newsletter sign-up form.
// =====================================================================
const newsletter: Newsletter = {
  display: true, // Set to false to hide
  title: <>Subscribe to my Newsletter</>,
  description: <>A monthly dispatch of tech insights and project updates.</>,
};

// =====================================================================
// SOCIAL — Your social media links.
// =====================================================================
const social: Social = [
  // Import new icons in /src/resources/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hussein-salim25",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/husseinsalim",
  },
  {
    name: "Website", // Added your portfolio link here
    icon: "link",   // The 'link' icon should exist, if not, we can add it.
    link: "https://digitalhus.com",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

// =====================================================================
// HOME — Content for your home page.
// =====================================================================
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg", // SEO image
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From Luxury Hospitality to Digital Elegance.</>,
  featured: {
    

    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">DigitalHus</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    // IMPORTANT: Make sure the 'href' matches a project file you create in /src/app/work/projects/
    href: "/work/digitalhus-portfolio", 
  },
  subline: (
    <>I&apos;m Hussein. I bring the precision, finesse, and high-touch service of luxury hospitality into the world of front-end development,
      <br /> crafting beautiful, intuitive, and functional digital experiences.
    </>
  ),
};

// =====================================================================
// ABOUT — Content for your about page.
// =====================================================================
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Set to true if you have a cal.com link
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A Front-End Developer with strong foundations in HTML, CSS, JavaScript, React, and Node.js. 
        My unique background in luxury hospitality leadership informs my approach to tech, emphasizing
        user-centric design, problem-solving, and high attention to detail. I am passionate about 
        creating seamless digital experiences that are both beautiful and functional.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Kanche’s Café/Restaurant",
        timeframe: "2025 – Present",
        role: "Branch Manager (Hospitality → Digital Ops)",
        achievements: [
          "Oversee branch operations while implementing digital systems for marketing, menu design, and customer engagement.",
          "Led rollout of a QR code digital menu system, blending customer experience with technology.",
        ],
        images: [],
      },
      {
        company: "Qatar Airways",
        timeframe: "2021 – 2024",
        role: "Food & Beverage Supervisor",
        achievements: [
          "Implemented a POS system that improved efficiency by 95%, showcasing adaptability with digital solutions.",
          "Collaborated with multicultural teams to ensure seamless guest experiences in a high-pressure environment.",
        ],
        images: [],
      },
      {
        company: "Eka Hotel Nairobi",
        timeframe: "2018 – 2021",
        role: "Head Waiter",
        achievements: [
          "Promoted to Head Waiter within 12 months due to leadership and customer service excellence.",
          "Coordinated daily operations, enhancing customer experience workflows—skills now applied in my UX/UI focus.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "The Odin Project",
        description: "Full Stack Web Development (In Progress, 2025)",
      },
      {
        name: "Google (Coursera)",
        description: "Digital Marketing & E-commerce Certificate (2024)",
      },
      {
        name: "Kenya Utalii College",
        description: "Certificate in Food & Beverage (2017)",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: "Building responsive, interactive, and accessible single-page applications.",
        tags: [
          { name: "HTML5", icon: "html" },
          { name: "CSS3", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Backend & Tooling",
        description: "Experience with server-side logic, APIs, and modern development tools.",
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Firebase", icon: "firebase" },
          { name: "Git", icon: "git" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Digital Branding",
        description: "Designing brand identities and managing digital presence across multiple platforms.",
        tags: [
          { name: "Figma", icon: "figma" }, // Assuming you use Figma for design
          { name: "SEO", icon: "search" },   // Using a generic 'search' icon
        ],
        images: [],
      },
    ],
  },
};

// =====================================================================
// BLOG, WORK, GALLERY — Page configurations.
// =====================================================================
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and design...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `A selection of design and development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // IMPORTANT: These are placeholder images. You need to replace them.
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };