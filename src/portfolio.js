/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import resume from "../src/assets/resume/LH_CV.pdf";
import itilCert from "../src/assets/certificates/ITIL_cert.pdf";

// Your Summary And Greeting Section

const greeting = {
  username: "Leon Hafner",
  title: "Hi all, I'm Leon",
  subTitle: emoji(
    "Front End Developer 👨‍💻 | Full stack Developer 💻"
  ),
  resumeLink:
    resume
    // download file
    // "data:application/octet-stream;charset=utf-16le;base64,"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Leon-H-DG",
  linkedin: "https://www.linkedin.com/in/leonhafner",
  gmail: "leon.dalgrande.hafner@gmail.de",
  facebook: "https://www.facebook.com/leon.hafner",
  twitter: "https://twitter.com/Leon_H_DG",
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WITH FOCUS ON FRONT-END WEB-DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Designing and developing web-/ desktop- applications using Javascript, Java and Python"
    ),
    emoji(
      "⚡ Developing with frameworks like ReactJs, VueJS, Spring, JSF, etc"
    ),
    emoji("⚡ End to End automation executions"),
    emoji(
      "⚡ Working on test automation tools like Selenium, Jest"
    ),
    emoji(
      "⚡ Building predictive models to extract insights and make decisions out of data"
    ),
  ],

  softwareSkills: [
    {
      skillName: "Javascript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "ReactJS",
      classname: "logos:react",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "VueJS",
      classname: "logos:vue",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Spring",
      classname: "logos:spring",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Maven",
      classname: "vscode-icons:file-type-maven",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Jenkins",
      classname: "vscode-icons:file-type-jenkins",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Jira",
      classname: "logos:jira",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MySQL",
      classname: "logos:mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Selenium",
      classname: "logos:selenium",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Prosis GmbH",
      // companylogo: require("./assets/images/prosisLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Prosis GmbH",
    //   companylogo: require("./assets/images/prosisLogo.png"),
    //   date: "Sept 2017 – Aug 2021",
    //   desc:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "ITIL",
      subtitle: "ITIL Foundation in IT Service Management",
      logo_path: "ITIL.jpg",
      certificate_link: itilCert,
      alt_name: "ITIL Foundation",
      color_code: "#FFFDDD",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "",
      title: "",
      description:
        "",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 17647346430",
  email_address: "leon_hafner@web.de",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
