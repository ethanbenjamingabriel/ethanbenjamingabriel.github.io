const experiences = [
	{
    company: "Super.com",
    role: "Software Engineering Intern",
    type: "Co-op • January 2025 - April 2025",
    description: [
    	"Led development of 20+ A/B tests, increasing referral user engagement through 2025 Q1",
		"Built and deployed scalable endpoints using FastAPI, including new endpoints for the Referrals program, Super.com card PIN verification, and 2FA verification",
		"Improved user retention by integrating additional verification layers when canceling Super+ membership",
		"Collaborated with the Product team to address edge cases before handing off to experiment engineering",
    ],
    img: "./img/super.png"
  },
  {
    company: "Midnight Sun",
    role: "Software Engineer",
    type: "Seasonal • May 2024 - August 2024",
    description: [
      "Participating in University of Waterloo’s oldest Design Team",
      "Collaborating with the strategy team to develop performance-optimizing scripts for solar-powered vehicles by analyzing vehicle statistics and weather data for race tactics."
    ],
    img: "./img/midsun.png"
  },
  {
    company: "TribalScale",
    role: "Agile Test Engineer",
    type: "Co-op • January 2024 - April 2024",
    description: [
      'Received "Outstanding" - Highest Level on Co-op Evaluation',
      "Led API & UI Automation through Cypress, Postman, Selenium, and Playwright for Client websites",
      "Enhanced Mobile App Automation through Appium for client applications",
      "Led the QA Team to introduce Automation Testing within CI/CD Pipeline for Client Products"
    ],
    img: "./img/tribalscale.png"
  },
  {
    company: "Zoocasa",
    role: "Automation Engineer",
    type: "Co-op • May 2023 - August 2023",
    description: [
      'Received "Outstanding" - Highest Level on Co-op Evaluation',
      "Designed automated UI tests in Cypress for company's website",
      "Created front-end unit tests in Jest & back-end unit tests in Golang",
     "Designed algorithms in Golang to improve text capitalization for all descriptions on website and mobile app",
      "Led sprints and sprint planning for the engineering team",
      "Assisted all engineers and developers with manual website and mobile app testing"
    ],
    img: "./img/zoocasa.png"
  },
  {
    company: "Electrical and Computer Engineering Society",
    role: "Vice President, Academics",
    type: "Seasonal • May 2023 - Present",
    description: [
      "Organizing the peer mentorship program for the Department of Electrical and Computer Engineering at the University of Waterloo",
      "Organizing resume critique and interview preparation sessions for students across department",
      "Pairing upper year ECE students with first year ECE students for academic tutoring, mentoring, and networking oppourtunities"
    ],
    img: "./img/ecesociety.png"
  },
  {
    company: "WAT.ai",
    role: "Machine Learning Researcher & Developer",
    type: "Seasonal • September 2022 - April 2023",
    description: [
      "Participating in University of Waterloo’s first Artificial Intelligence Design Team",
      "Assisting Technical Project Managers and Vice Presidents with Machine learning research on neural network architecture, developing, designing, and testing with TensorFlow"
    ],
    img: "./img/watai.png"
  },
  {
    company: "Treasury Board Secretariat",
    role: "Junior Software Developer",
    type: "Co-op • September 2022 - December 2022",
    description: [
      'Received "Outstanding" - Highest Level on Co-op Evaluation',
      "Developed and tested backend, frontend, and workflow logic for 2 applications migrating to SharePoint Online Database (training request and petition admin system applications)",
      "Led development for backend and workflow logic for Cancelling requests and delegating approval tracking for training request application",
      "Curated and presented a technical manual to assist all administrative assistants across Ontario with new petition admin organization system"
    ],
    img: "./img/tbs.png"
  },
  {
    company: "York Region Tutoring",
    role: "Academic Tutor (Grade 9-12 Mathematics)",
    type: "Part-time • October 2022 - December 2022",
    description: [
      "Tutoring 20+ students in the following courses:",
      "Grade 9 & 10: Mathematics",
      "Grade 11: Functions",
      "Grade 12: Advanced Functions, Calculus, Data Management",
      "Advanced Placement: Calculus AB, Calculus BC, Statistics",
      "International Baccalaureate: SL Mathematics, HL Mathematics"
    ],
    img: "./img/yrt.png"
  },
  {
    company: "Engineers without Borders Canada, University of Waterloo Chapter",
    role: "Front-End Software Developer",
    type: "Seasonal • May 2022 - August 2022",
    description: [
      "Designing the member directory page for all EWB Canadian chapter members on the EWB Canadian Website.",
      "Working with the National Office Executives to escalate cross-chapter member connections"
    ],
    img: "./img/ewb.png"
  },
  {
    company: "Poole Construction Limited (PCL)",
    role: "Technology Analyst",
    type: "Co-op • January 2022 - April 2022",
    description: [
      "Resolved hardware, software and technical issues regarding third-party software programs, construction project relocation, etc.",
      "Directed the Business Technology team in software developing a web-application to aid Technology Analysts with time-consuming, day-to-day tasks.",
      "Visited construction project sites to assist on-site employees with technical issues and set up temperature sensors for on-going projects.",
      "Responsible for all inventory received to and shipped from the District Office."
    ],
    img: "./img/pcl.png"
  },
  {
    company: "Emergency Lighting Services (ELS)",
    role: "Office Administrator",
    type: "Part-Time • June 2021 - September 2021",
    description: [
      "Maintained key stakeholder information via Excel spreadsheet system on a weekly basis detailing corporate sales for updates to senior management.",
      "Prepared and organized company sales invoices for 200+ clients.",
      "Reconciled vendor payments against purchase orders using Spire accounting system."
    ],
    img: "./img/els.png"
  },
  {
    company: "Master Myung's Taekwondo Academy",
    role: "Junior Instructor",
    type: "Part-Time • September 2017 - March 2020",
    description: [
      "Earned Second Degree Black Belt and consequently promoted to Junior Instructor.",
      "Trained groups of 50+ students in martial arts concepts from beginner to advanced levels.",
      "Assisted Taekwondo senior instructors with leading colour-belt & black-belt testing.",
      "Promoted respect and discipline through multi step challenges, and team building exercises."
    ],
    img: "./img/tkd.png"
  }
];

// Render experiences
function renderExperiences() {
  const container = document.getElementById('experience-list');
  if (!container) return;
  container.innerHTML = experiences.map(exp => `
    <div class="experience-item">
      <div class="experience-info">
        <h1>${exp.company}</h1>
        <h2><b>${exp.role}</b></h2>
        <h3>${exp.type}</h3>
        <p>
          ${exp.description.map(line => `- ${line}<br>`).join('')}
        </p>
      </div>
      <div class="experience-img">
        <img src="${exp.img}" alt="img">
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderExperiences);