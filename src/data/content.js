export const siteData = {
    title : "Hey :) I'm ",
    title_name : "Wei",
    description1 : "A computer science student and former architect, bringing ",
    description2_list : ["design thinking", "interdisciplinary perspectives", "spatial reasoning"],
    description3 : "to technology.",
    social: [
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" }, // Ziyuzhang 风格常有 INS
  ]
};
export const projects = [

  {
    id: "soft-1",
    title: "Software Project",
    category: "Software", 
    layout: "text",  // 👈 标记为文字版
    image: "/assets/images/soft1.png", 
    year: "2023",
    description: "A minimal chat interface.",
    content: "Full project description goes here..."
  },

  {
    id: "game-1",
    title: "Game Project",
    category: "Game", 
    image: "/assets/images/game1.jpg", 
    year: "2022",
    description: "Open world game concept.",
    content: "Full project description goes here..."
  },

  {
    id: "architecture-1",
    title: "Museum Design",
    category: "Architecture",
    image: "/assets/images/arch1.jpg", 
    layout: "visual",
    year: "2021",
    description: "A conceptual museum design focusing on light and shadow.",
    content: "The museum is located in the heart of the city...", // 这里的正文依然保留

    // ✨ 新的数据结构：多个画廊
    galleries: [
      {
        // 画廊 1：主要渲染图
        caption: "Project1",
        images: [
          "/assets/images/arch1_public/pic1.jpg",
          "/assets/images/arch1_public/pic2.jpg",
          "/assets/images/arch1_public/pic3.png",
          "/assets/images/arch1_public/pic4.png",
          "/assets/images/arch1_public/pic5.png",
          "/assets/images/arch1_public/pic6.png",
        ]
      },
      {
        // 画廊 2：技术图纸
        caption: "Project2",
        images: [
          "/assets/images/arch2_living/pic1.jpg",
          "/assets/images/arch2_living/pic2.png",
          "/assets/images/arch2_living/pic3.jpg",
          "/assets/images/arch2_living/pic4.png",
          "/assets/images/arch2_living/pic5.png",
          "/assets/images/arch2_living/pic6.png"
        ]
      },
      {
        // 画廊 3：模型照片
        caption: "Project3",
        images: [
          "/assets/images/arch1-model1.jpg",
          "/assets/images/arch1-model2.jpg"
        ]
      }
    ]
  },

];

export const experience = [
  {
    role: "Architect",
    company: "CSCEC & Being Studio",
    year: "2019 - 2022",
    desc: "As an professional architect, I contributed to various architectural projects, focusing on design development and project coordination."
  },

  {
    role: "Computer Science Student",
    company: "Karlsruhe Institute of Technology",
    year: "2023 - Present",
    desc: "As a computer science student, I am interested in software development and artificial intelligence."
  },
];
