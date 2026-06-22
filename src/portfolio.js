/* Change this file to get your personal Porfolio */

// Website related settings
// import project1Image from "./assests/images/project1.jpeg"
// import project2Image from "./assets/images/projecto2.jpeg"
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "QA Portfolio | Alvaro Sivila - Autoamtion and Manual Engineer",
  description:
    "Explore the QA Portfolio of Alvaro Sivila, an experienced Automation and Manual QA Engineer. Discover projects, skills, and professional achievements in software quality assurance.",
  og: {
    title: "Alvaro Sivila Portfolio",
    type: "website",
    url: "https://junior0123.github.io/qaportfolio/",
  },
};

//Home Page
const greeting = {
  title: "Alvaro Sivila Ramirez",
  logo_name: "Alvaro Sivila",
  //nickname: "layman_brother",
  subTitle:
    "SDET | QA Automation | QA Manual | AI Automation Engineer 🚀\nPassionate about ensuring the highest quality for web and mobile applications, leveraging modern AI tooling and robust automation frameworks like Selenium, Playwright, Cypress, and Appium.",
  resumeLink:
    "https://drive.google.com/file/d/1bolSyxZ04cKp2HBXyE6jB_mdX-RPxIkF/view?usp=sharing",
  portfolio_repository: "https://github.com/junior0123",
  githubProfile: "https://github.com/junior0123",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/junior0123",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:juniorsivila123@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
  {
    name: "Gitlab",
    link: "https://gitlab.com/alvaro.sivila", //<i class="fa-brands fa-gitlab"></i>
    fontAwesomeIcon: "fa-brands fa-gitlab", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=59179178191",
    fontAwesomeIcon: "fa-brands fa-whatsapp", // Reference https://fontawesome.com/icons/google?style=brands <i class="fa-brands fa-whatsapp"></i>
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "AI Engineering & Automation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ AI-Assisted Development, Prompt Engineering, AI Agents, Skills, Agentic Workflows",
        "⚡ MCP (Model Context Protocol), Workflow Automation, LLM Orchestration, AI Tool Integration",
        "⚡ AI-Augmented Coding, Autonomous Workflows, Rapid Prototyping with AI, RAG Systems, LangChain",
        "⚡ Experience with LLMs: ChatGPT, Claude, Gemini, Qwen, DeepSeek, Kimi K2",
        "⚡ AI Tooling: GitHub Copilot, Cursor, Claude Code, OpenCode, Windsurf, APIs",
      ],
      softwareSkills: [
        { skillName: "Python", imageSrc: "python.svg" },
        { skillName: "JavaScript", imageSrc: "javascript.svg" },
        { skillName: "GitHub Copilot", imageSrc: "github.svg" },
      ],
    },
    {
      title: "SDET & QA Automation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expertise in automation frameworks such as Selenium, Appium, Cypress, and Playwright to streamline and enhance testing processes",
        "⚡ Skilled in using various tools like Postman, JMeter, and Cucumber for efficient and effective testing and integration",
        "⚡  Knowledgeable in scripting languages like Python, Java, and JavaScript for test automation",
        "⚡ Adept at creating robust automated test suites to ensure the highest quality of software releases",
        "⚡ Expertise in API testing using both manual and automated approaches",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          imageSrc: "java.svg",
        },
        {
          skillName: "Python",
          imageSrc: "python.svg",
        },
        {
          skillName: "JavaScript",
          imageSrc: "javascript.svg",
        },
        {
          skillName: "Selenium",
          imageSrc: "selenium.svg",
        },
        {
          skillName: "Cypress",
          imageSrc: "cypress.svg",
        },
        {
          skillName: "Appium",
          imageSrc: "appium.svg",
        },
        {
          skillName: "Playwright",
          imageSrc: "playwright.svg",
        },
        {
          skillName: "JMeter",
          imageSrc: "jmeter.svg",
        },
        {
          skillName: "Postman",
          imageSrc: "postman.svg",
        },
        {
          skillName: "Gherkin",
          imageSrc: "gherkin.svg",
        },
      ],
    },
    {
      title: "QA Manual",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in manual testing to ensure comprehensive coverage and quality assurance for web and mobile applications",
        "⚡ Strong ability in bug reporting, issue isolation, and test case execution",
        "⚡ Skilled in using various tools like Jira, Trello, and Azure DevOps for efficient project tracking and bug reporting",
        "⚡ Proficient in database management including SQL Server, Oracle, MariaDB, MySQL, and PostgreSQL",
      ],
      softwareSkills: [
        {
          skillName: "Jenkins",
          imageSrc: "jenkins.svg",
        },
        {
          skillName: "Docker",
          imageSrc: "docker.svg",
        },
        {
          skillName: "MySql",
          imageSrc: "mysql.svg",
        },
        {
          skillName: "PostgreSql",
          imageSrc: "postgresql.svg",
        },
        {
          skillName: "MariaDB",
          imageSrc: "mariadb.svg",
        },
        {
          skillName: "SQL Server",
          imageSrc: "sqlserver.svg",
        },
        {
          skillName: "Jira",
          imageSrc: "jira.svg",
        },
        {
          skillName: "Azure Devops",
          imageSrc: "azuredevops.svg",
        },
        {
          skillName: "Virtual Box",
          imageSrc: "virtualbox.svg",
        },
        {
          skillName: "VMware",
          imageSrc: "vmware.svg",
        },
        {
          skillName: "Linux",
          imageSrc: "linux.svg",
        },
      ],
    },
    {
      title: "Backend Developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in developing RESTful APIs using Spring Boot and Express",
        "⚡ Experienced in using JPA and Hibernate for database interactions",
        "⚡ Skilled in building scalable and maintainable backend systems",
        "⚡ Skilled in building scalable and maintainable Mobile applications using flutter",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          imageSrc: "java.svg",
        },
        {
          skillName: "Python",
          imageSrc: "python.svg",
        },
        {
          skillName: "JavaScript",
          imageSrc: "javascript.svg",
        },
        {
          skillName: "Flutter",
          imageSrc: "flutter.svg",
        },
        {
          skillName: "Git",
          imageSrc: "git.svg",
        },
        {
          skillName: "Github",
          imageSrc: "github.svg",
        },
        {
          skillName: "Gitlab",
          imageSrc: "gitlab.svg",
        },
        {
          skillName: "Maven",
          imageSrc: "maven.svg",
        },
        {
          skillName: "Gradle",
          imageSrc: "gradle.svg",
        },
        {
          skillName: "Springboot",
          imageSrc: "springboot.svg",
        },

        {
          skillName: "Hibernate",
          imageSrc: "hibernate.svg",
        },
        {
          skillName: "Express",
          imageSrc: "express.svg",
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jala University",
      subtitle: "Software Automation Testing Specialization",
      logo_path: "jalau.png",
      alt_name: "Jala University",
      duration: "August 2022 - March 2023",
      descriptions: [
        "As a top student in the program, I participated in creating test plans and led project teams, completing the specialization with a focus on advanced automation techniques",
        "⚡ I reported software bugs, ensuring product quality.",
        "⚡ I wrote detailed test cases for comprehensive coverage",
        "⚡ I implemented a hybrid framework from scratch for API and UI testing.",
        "⚡ I actively participated in team meetings and project tracking.",
        "⚡ I documented bugs and feature requests.",
        "⚡ I gained skills in agile methodologies and framework development.",
        "⚡ I developed test automation scripts using Java, Selenium, and REST Assured.",
        "⚡ I conducted API and UI testing.",
        "⚡ I analyzed and debugged issues in test code, collaborating with the development team for resolution.",
      ],
      website_link: "https://jala.university/",
    },
    {
      title: "Universidad Mayor de San Simón",
      subtitle: "Bachelor's Degree in Electronic Engineering",
      logo_path: "umsslogo.png",
      alt_name: "Universidad Mayor de San Simón",
      duration: "2012 - 2019",
      descriptions: [
        "⚡ Ranking among the top 10% of the program with a focus on areas such as Robotics, Digital Electronic Design, and Dynamic Control Systems, achieving a perfect score of 100 for my thesis defense.",
        "⚡ Served as a teaching assistant for four courses: Robotics, Digital Electronic Design I, Dynamic Control Systems Theory, and Dynamic Control Systems Laboratory",
        "⚡ Developed and implemented a facial recognition system as part of my thesis, designing both the electronic hardware and the software",
        "⚡ Participated in several research projects, contributing to advancements in electronic engineering and automation",
        "⚡ Gained hands-on experience in electronic design through various practical projects in robotics and automation",
      ],
      website_link: "https://www.umss.edu.bo/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "No-Code Generative AI for Business Professionals",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Evaluating and Debugging Generative AI",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title:
        "Building Custom GPTs for Work: Create AI Assistants in Plain Language with ChatGPT (No Code Required)",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title:
        "Claude Cowork 7-Day Challenge: Find Practical AI Use Cases That Deliver",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title:
        "Prompt Engineering: Aprende a hablar con una inteligencia artificial generativa",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Model Context Protocol: Advanced Topics by Anthropic",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Context Engineering for Developers",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Claude Code 101: From Prompt to Product",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Agentic AI: Build Your First Agentic AI System",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Building Intelligent AI Agents by Pearson",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Model Context Protocol (MCP): Hands-On with Agentic AI",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Mastering Model Context Protocol (MCP)",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title:
        "Hands-On AI: Building Agents with the Google Agent Development Toolkit (ADK)",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Build with AI: SQL AI Agents in Production",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Local AI: Build a RAG Model from Scratch with Open-Source Tools",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title:
        "AI for Software Testers: Apply AI Tools and Techniques to the Software Testing Life Cycle",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Building Software Test Plans Using AI",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title:
        "Software Testing Foundations: Integrating AI into the Quality Process",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title:
        "AI-Powered Software Development: Coding, Testing, and System Design",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Build AI Agents with n8n",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Level up LLM applications development with LangChain and OpenAI",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Vibe Code This: AI-Powered Branded Infographics Tool",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/details/certifications/",
      alt_name: "LinkedIn",
      color_code: "#ffffff",
    },
    {
      title: "Scrum Fundamentals Certified (SFC)",
      subtitle: "SCRUMstudy - Accreditation Body for Scrum and Agile",
      logo_path: "preview.png",
      certificate_link:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=1033699",
      alt_name: "Scrum Fundamentals Certified (SFC)",
      color_code: "#d8e3ec",
    },
    {
      title: "Curso Avanzado de Automatización de Pruebas con Puppeteer",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/2706-puppeteer-avanzado/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Automatización de Pruebas UI con Cypress",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/3075-cypress-ui/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Automatización de Pruebas con Puppeteer",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/2703-course/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Automatización de Pruebas de Backend con Cypress",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/3076-cypress-backend/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso Profesional de Docker",
      subtitle: "Código Facilito",
      logo_path: "codigofacilito.png",
      certificate_link:
        "https://codigofacilito.com/certificates/833c4eb9-1138-4401-9343-5095a8e552a6",
      alt_name: "Código Facilito",
      color_code: "#ace6db",
    },
    {
      title: "Curso Profesional de Git",
      subtitle: "Código Facilito",
      logo_path: "codigofacilito.png",
      certificate_link:
        "https://codigofacilito.com/certificates/26a3fbac-b12e-448c-b285-ace3b986e18b",
      alt_name: "Código Facilito",
      color_code: "#ace6db",
    },
    {
      title: "Curso profesional de flutter",
      subtitle: "Código Facilito",
      logo_path: "codigofacilito.png",
      certificate_link:
        "https://codigofacilito.com/certificates/d4f42e92-88dd-45e4-b76f-e79cf03a81ff",
      alt_name: "Código Facilito",
      color_code: "#ace6db",
    },
    {
      title: "Curso de Patrones de Diseño con JAVA",
      subtitle: "Código Facilito",
      logo_path: "codigofacilito.png",
      certificate_link:
        "https://codigofacilito.com/certificates/5688ed71-60f4-4c00-9252-f14100231166",
      alt_name: "Código Facilito",
      color_code: "#ace6db",
    },
    {
      title: "Curso de Automatización de Test con Playwright",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/5679-playwright/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Cypress Avanzado",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/4760-course/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Fundamentos de Pruebas de Software",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/1421-pruebas-software/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Fundamentos de Python",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/4227-python-fundamentos/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Introducción a la Automatización de Pruebas",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/2620-automatizacion-pruebas/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Introducción a la Terminal y Línea de Comandos",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/2292-terminal/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Introducción al Testing con JavaScript",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/2920-javascript-testing/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Java SE Orientado a Objetos",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/1629-java-oop/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Java SE: SQL y Bases de Datos",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/8048-java-sql/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Six Sigma Yellow Belt (SSYB)",
      subtitle:
        "6sigmastudy - Global Accreditation Body for Six Sigma Certifications",
      logo_path: "6sigma.png",
      certificate_link:
        "https://www.6sigmastudy.com/certification/verify?type=SSYB&number=890883",
      alt_name: "Six Sigma Yellow Belt (SSYB)",
      color_code: "#e9f0f8",
    },
    {
      title: "SQL - Curso completo de Bases de Datos - de 0 a Avanzado",
      subtitle: "Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-03fdbc4e-56ed-4697-9bac-b2c3d097c722/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Java Spring",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/1996-java-spring/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Java Spring Data JPA: Bases de Datos",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/7825-java-spring-data/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/3578-npm/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },
    {
      title: "Curso de Testing de Videojuegos",
      subtitle: "Platzi",
      logo_path: "Platzi1.png",
      certificate_link:
        "https://platzi.com/p/alvarogerardojunior98/curso/1349-testing-videojuegos/diploma/detalle/",
      alt_name: "Platzi Certification",
      color_code: "#ffffff",
    },

    {
      title: "Todo sobre Notion. Organiza tu trabajo y se mas Productivo",
      subtitle: "Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b8978bc5-4477-4325-9de2-b91b566e6b72/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Design a mobile app interface with Moqups",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "https://coursera.org/verify/AC9BRQN4L222",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Software Automation Testing Specialization",
      subtitle: "Jala University",
      logo_path: "jala.png",
      certificate_link:
        "https://certificates.cosmic-latte.com/verify/HgxwPzhXBi9Gcixvd",
      alt_name: "Jala University",
      color_code: "#4285F499",
    },
    {
      title: "SQL: Creacion de Bases de Datos (De cero a profesional)",
      subtitle: "Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-84877de4-c0bc-4f4d-a534-768b3a6923df/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Python para no matemáticos: De 0 hasta reconocimiento facial",
      subtitle: "Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-08f09ff5-a2a0-4db6-8fe6-0d77b87bcd0a/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to the Internet of things and Embedded Systems",
      subtitle:
        "University of California, Irvine Division of Continuing Education I Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-08f09ff5-a2a0-4db6-8fe6-0d77b87bcd0a/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  //subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Software Quality Automation Engineer at Jalasoft, where I developed test automation frameworks, wrote test scripts in Java, and enhanced API testing. I collaborated with teams to ensure high software quality and expanded my knowledge in automation techniques. Additionally, I have worked as a Freelance Developer on Upwork, focusing on automation frameworks and API test suites, as well as gaining experience as a QA Functional Tester at TesterWork and a QA Accessibility Tester at uTest. Previously, I was a Teaching Assistant at FCYT, guiding students through complex concepts",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "SDET",
          company: "NiCE",
          company_url: "",
          logo_path: "nice.png",
          duration: "September 2025 - Present",
          location: "Hybrid - Cochabamba - Bolivia",
          description:
            "Automated backend validation processes for distributed systems and cloud-based services. Performed API testing, backend data validation, and workflow verification across multiple services. Worked with AWS cloud environments, leveraging AWS CloudWatch for production troubleshooting, metric monitoring, and extensive log review to isolate and resolve backend mismatches. Contributed to MCP-based integrations and AI-assisted engineering workflows. Leveraged AI development tools to accelerate debugging and implementation tasks.",
          color: "#0879bf",
        },
        {
          title: "QA Manual Tester",
          company: "Xiara Studios",
          company_url: "",
          logo_path: "xiara.png",
          duration: "January 2025 - June 2025",
          location: "Remote - Bolivia",
          description:
            "Implemented all quality assurance processes from scratch. Designed and executed manual test strategies for functional, regression, and smoke testing. Reported and tracked bugs using issue tracking tools, ensuring clear communication with dev teams. Defined acceptance criteria and wrote test cases to validate product requirements.",
          color: "#000000",
        },
        {
          title: "QA Functional Tester",
          company: "TesterWork",
          company_url: "https://testerwork.com/",
          logo_path: "testerwork.png",
          duration: "May 2024 - Present",
          location: "Remote",
          description:
            "I reported and documented bugs to development teams for resolution, performed regression testing to ensure updates didn't break existing features, participated in exploratory testing to identify hidden issues, and evaluated usability, providing feedback to enhance the user experience..",
          color: "#000000",
        },
        {
          title: "QA Accesibility Tester",
          company: "UTest",
          company_url: "https://www.utest.com/",
          logo_path: "utest.png",
          duration: "January 2024 - May 2024",
          location: "Remote",
          description:
            "I performed accessibility testing to ensure compliance with WCAG guidelines, tested compatibility with assistive technologies such as screen readers and keyboards, and identified and reported accessibility issues related to navigation and design.",
          color: "#000000",
        },
        {
          title: "Freelance",
          company: "Upwork",
          company_url: "https://www.upwork.com/",
          logo_path: "upwork.png",
          duration: "August 2023 - January 2024",
          location: "Remote",
          description:
            "I've been working with a diverse range of clients, leveraging my skills to ensure the quality and reliability of their software projects. My focus has been on debugging and enhancing test automation frameworks, as well as developing and implementing comprehensive API test suites.",
          color: "#000000",
        },
        {
          title: "Software Quality Automation Engineer",
          company: "Jalasoft",
          company_url: "https://www.jalasoft.com/",
          logo_path: "jalasoft.png",
          duration: "August 2022 - August 2023",
          location: "Remote",
          description:
            "I utilized my Java expertise while expanding my knowledge of test automation techniques by collaborating on real projects, gaining a comprehensive understanding of testing processes and methodologies, and enhancing my skills in Agile practices, framework creation, and quality assurance",
          color: "#0879bf",
        },
        {
          title: "Teaching Assistant",
          company: "FCYT - UMSS",
          company_url: "https://www.umss.edu.bo/",
          logo_path: "fcyt.png",
          duration: "May 2017 - May 2018",
          location: "Cochabamba",
          description:
            "I partnered with the lead professor to guide students through complex concepts, both in theory and in practice. My emphasis on active engagement and the creation of hands-on projects contributed to deep and meaningful learning.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Personal Projects",
  description:
    "My projects utilize a wide range of modern technology tools, with a focus on QA automation, manual testing, and backend development. My expertise also extends to mobile development with Flutter, where I have worked on building robust and efficient applications",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};
const projects = {
  data: [
    {
      id: "newsletter-job-hunter",
      name: "Newsletter: Job Opportunity Hunter with AI",
      createdAt: "2024-05-01T00:00:00Z",
      description:
        "Tu próximo empleo, más cerca. Mi tecnología filtra y te entrega una lista semanal con las mejores vacantes tech.",
      image: "./skills/newsletter.png",
      link:
        "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7326643717589671936",
    },
    {
      id: "data-science-dashboard",
      name: "Job Search Automation with AI in Linkedin",
      createdAt: "2023-05-14T00:00:00Z",
      description:
        "This project automates job searching on LinkedIn by using AI to discriminate between job postings and other content in the user's feed",
      image: "./skills/project1.jpeg",
      link:
        "https://www.linkedin.com/posts/alvaro-sivila-ram%C3%ADrez-0a8537113_automatizaciaejn-baeqsquedadeempleo-tecnologaeda-activity-7207377220430876674-bkkW?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "cloud-based-web-app",
      name: "LinkedIn Jobs Profile Matcher",
      createdAt: "2022-11-25T00:00:00Z",
      description:
        "Automating tailored job searches on LinkedIn's job platform, utilizing AI to match users with the best-suited opportunities.",
      image: "./skills/projecto2.jpeg",
      link: "https://github.com/junior0123/playwright-project",
    },
    {
      id: "machine-learning-model",
      name: "E-commerce Testing with Cypress",
      createdAt: "2023-01-10T00:00:00Z",
      description:
        "Automating tests for the DemoBlaze website using Cypress. The project ensures the functionality and reliability of the website's features through meticulous test scenarios.",
      image: "./skills/demoblaze.png",
      link: "https://github.com/junior0123/cypress-framework",
    },
    {
      id: "selenium",
      name: "Selenium-based E-commerce Testing Automation",
      createdAt: "2023-01-10T00:00:00Z",
      description:
        "Automating tests for the Automation Exercise website using Selenium and Java to validate the functionality of the shopping cart.",
      image: "./skills/seleniumProject.png",
      link: "https://github.com/junior0123/AutomationExercise-Selenium",
    },
  ],
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "¡Automatizando mi búsqueda de empleo con IA! 🤖",
      createdAt: "Each week",
      description:
        "This presents an automated system that uses AI to search for and compile the best job opportunities available on LinkedIn",
      url:
        "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/recent-activity/articles/",
    },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.png",
    description:
      "I am available on almost every social media. You can message me, and I will reply within 24 hours. I can help you with automation testing, manual testing, and backend development with Java.",
  },
  blogSection: {
    title: "Newsletter",
    subtitle:
      "Job Opportunity Hunter with AI. Tu próximo empleo, más cerca. Mi tecnología filtra y te entrega una lista semanal con las mejores vacantes tech.",
    link:
      "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7326643717589671936",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  projects,
  contactPageData,
};
