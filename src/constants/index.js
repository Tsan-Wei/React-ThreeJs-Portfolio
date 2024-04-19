import {
    web,
    design,
    javascript,
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
    event,
    tripguide,
    threejs,
    gsap,
    bootstrap,
    Sql,
    eApproval,
    reservation,
    design1,
    design2
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
      type: "前端"
    },
    {
      name: "CSS 3",
      icon: css,
      type: "前端"
    },
    {
      name: "JavaScript",
      icon: javascript,
      type: "前端"
    },
    {
      name: "React JS",
      icon: reactjs,
      type: "前端"
    },
    {
      name: "Vue JS",
      icon: vue,
      type: "前端"
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      type: "前端"
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
      type: "前端"
    },
    {
      name: "Three JS",
      icon: threejs,
      type: "前端"
    },
    {
      name: "GSAP",
      icon: gsap,
      type: "前端"
    },
    {
      name: "C#",
      icon: csharp,
      type: "後端"
    },
    {
      name: "ASP.NET MVC",
      icon: mvc,
      type: "後端"
    },
    {
      name: "git",
      icon: git,
      type: "其他"
    },
    {
      name: "Adobe XD",
      icon: xd,
      type: "其他"
    },
    {
      name: "Figma",
      icon: figma,
      type: "其他"
    },
    {
      name: "MS SQL",
      icon: Sql,
      type: "後端"
    }
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
        "負責產出各部門報表需求以及與POS機串接，實現分店贈品兌換的自動化處理。主要工作為開發新功能以及現有功能維護、規劃系統改版頁面設計、設計規範、整體畫面切版以及部分功能邏輯重構。",
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
      source_code_link: "https://github.com/Tsan-Wei/Gifts_Backend",
    },
    {
      name: "遠東百貨電子餐券系統",
      description:
        "針對財務會計部門需求，開放部份分公司餐廳使用電子餐券進而開發此系統。主要工作為規劃系統頁面設計、設計規範、整體畫面切版以及餐券申請、報表功能撰寫。",
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
      image: eApproval,
      source_code_link: "https://github.com/Tsan-Wei/eApproval",
    },
    {
      name: "遠東百貨活動檔期網頁",
      description:
        "消費者在檔期間消費累積滿額時可獲得等比例的抽獎機會．透過不同的遊戲設計如拉霸機、刮刮樂，給使用者一個嶄新的贈品兌換方式",
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
      image: event,
      source_code_link: "https://github.com/Tsan-Wei/2024_event",
    },
    {
      name: "遠東百貨餐廳訂候位系統",
      description:
        "與inline串接API，實現在APP內即時查看各分店餐廳候位資訊、快速點擊預約，節省許多時間成本",
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
      image: reservation,
      source_code_link: "https://github.com/Tsan-Wei/Reservation",
    },
    {
      name: "電子餐券系統UIUX設計稿",
      description:
        "負責系統的整體頁面規劃、元件與色彩規範，最後將畫面產出供後續開發參考",
      tags: [
        {
          name: "ADOBE XD",
          color: "green-text-gradient",
        }
      ],
      image: design1,
      source_code_link: "https://drive.google.com/drive/folders/1dg_WaqMsGpfN0cxub7oSPf-VZT60W1W_?usp=drive_link",
    },
    {
      name: "行銷後台企劃系統2.0 UIUX設計稿",
      description:
        "負責系統的整體頁面規劃、元件與色彩規範，最後將畫面產出供後續開發參考",
      tags: [
        {
          name: "FIGMA",
          color: "green-text-gradient",
        }
      ],
      image: design2,
      source_code_link: "https://www.figma.com/file/qycXt8nXKve82PjHkpacUw/FEDS_BACKEND?type=design&node-id=0%3A1&mode=design&t=JD9UD4HY91sue963-1",
    }
  ];
  
  export { services, technologies, experiences, projects };