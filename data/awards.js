const awards = [
  {
    name: "Bernie Roehl Award",
    amount: "$1,500",
    icon: "https://img.icons8.com/bubbles/100/000000/services.png"
  },
  {
    name: "Jim Kalbfleisch Award",
    amount: "$1,500",
    icon: "https://img.icons8.com/bubbles/100/000000/services.png"
  },
  {
    name: "Colonel Hugh Heasley Engineering Scholarship",
    amount: "$10,000",
    icon: "https://img.icons8.com/bubbles/100/000000/services.png"
  },
  {
    name: "University of Waterloo President's Scholarship of Distinction",
    amount: "$2,000",
    icon: "https://img.icons8.com/bubbles/100/000000/services.png"
  }
];

function renderAwards() {
  const container = document.getElementById('awards-list');
  if (!container) return;
  container.innerHTML = awards.map(award => `
    <div class="awards-item">
      <div class="icon"><img src="${award.icon}" /></div>
      <h2>${award.name} (${award.amount})</h2>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderAwards);