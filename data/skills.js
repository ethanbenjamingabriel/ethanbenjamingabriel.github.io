const skills = {
  "Languages": [
    "Python",
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "Go (Golang)",
    "Kotlin",
    "MATLAB",
    "mySQL"
  ],
  "Frameworks & Libraries": [
    "React",
    "React Native",
    "Angular",
    "Next.js",
    "FastAPI",
    "Jest"
  ],
  "Tools & Platforms": [
    "VS Code",
    "Cursor",
    "Postman",
    "Amplitude",
    "AWS",
    "Azure DevOps",
    "GitHub",
    "GitLab",
    "Git",
    "Jira",
    "Notion"
  ],
  "Professional Skills": [
    "Proactive problem solving",
    "Cross-functional leadership",
    "Agile methodologies"
  ]
};

function renderSkills() {
  const skillsList = document.getElementById('skills-list');
  if (!skillsList) return;
  skillsList.innerHTML = Object.entries(skills).map(([category, items]) => `
    <div class="skills-category">
      <h2 class="skills-subheader">${category}</h2>
      <div class="skills-items">
        ${items.map(skill => `
          <div class="skills-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h3>${skill}</h3>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderSkills);