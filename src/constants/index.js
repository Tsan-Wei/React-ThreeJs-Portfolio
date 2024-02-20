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
    GiftsBackend,
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
      id: "works",
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

  const projects = [
    {
      name: "遠東百貨行銷企劃系統",
      description:
        "負責產出各部門報表需求以及與POS機串接，實現分店贈品兌換的自動化處理，進而有效提升各項業務流程效率。主要工作為開發新功能以及現有功能維護。後續主要負責規劃系統改版頁面設計、設計規範、整體畫面切版以及部分功能邏輯重構。",
      tags: [
        {
          name: "ASP.NET MVC",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "MS SQL",
          color: "blue-text-gradient",
        },
      ],
      image: GiftsBackend,
      source_code_link: "https://github.com/",
    },
    {
      name: "遠東百貨電子餐券系統",
      description:
        "針對財務會計部門需求，未來將開放部份分店餐廳使用電子餐券進而開發此系統。主要工作為規劃系統頁面設計、設計規範、整體畫面切版以及餐券申請c、報表功能撰寫。",
      tags: [
        {
          name: "ASP.NET MVC",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "MS SQL",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "遠東百貨餐廳訂候位系統",
      description:
        "建置在遠東百貨APP內的功能，提供了消費者在第一時間了解餐廳候位的詳細資訊，增加整體用餐的便利性。主要工作為規劃系統頁面設計、整體畫面切版以及串接Inline API。",
      tags: [
        {
          name: "ASP.NET MVC",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "MS SQL",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };