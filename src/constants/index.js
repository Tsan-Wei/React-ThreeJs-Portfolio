import {
    web,
    design,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    xd,
    vue,
    csharp,
    mvc,
    tailwind,
    git,
    figma,
    feds,
    carrent,
    jobit,
    tripguide,
    threejs,
    gsap,
    bootstrap
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "關於我",
    },
    {
      id: "work",
      title: "經歷",
    },
    {
      id: "skills",
      title: "技能",
    },
    {
      id: "project",
      title: "作品集",
    },
    {
      id: "contact",
      title: "聯絡我",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: design,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "GSAP",
      icon: gsap,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "ASP.NET MVC",
      icon: mvc,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Adobe XD",
      icon: xd,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "MVC網頁全端開發工程師",
      company_name: "遠東百貨",
      icon: feds,
      iconBg: "#383E56",
      date: "Nov 2021 - March 2024",
      points: [
        "開發公司內部系統，協助各單位處理系統需求",
        "製作檔期活動網頁，結合官網做線上導流與後續獎勵發送",
        "針對各部門需求從資料庫撈取報表資料，提供後續分析使用",
      ],
    }
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };