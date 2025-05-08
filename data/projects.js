const projects = [
  {
    title: "Hand Detection using openCV",
    programs: "Visual Studio Code, GitHub",
    languages: "Python, openCV",
    description: [
      "Finger Counting in Real-Time Video in Python with OpenCV and MediaPipe",
      "Detects number of fingers raised in real-time"
    ],
    img: "./img/img-1.png"
  },
  {
    title: "File Directory Visualizer",
    programs: "Visual Studio Code, GitHub",
    languages: "C++",
    description: [
      "File Directory visualization displayed through the command line",
      "Handles inserting and deleting new nodes, and displays the tree in a visual format",
      "Used to help peers visualize binary trees for their academic courses"
    ],
    img: "./img/img-1.png"
  },
  {
    title: "Handwritten Digit Detection",
    programs: "Visual Studio Code, GitHub",
    languages: "Python, MNIST Data Set",
    description: [
      "Designed a handwritten digit detector with Python using the MNIST digits dataset",
      "Measured time metrics and presented data using python, Jupyter notebook, and JavaScript files"
    ],
    img: "./img/img-1.png"
  },
  {
    title: "Multi-layer Perceptron",
    programs: "Visual Studio Code, Jupyter Notebook, Conda, GitHub",
    languages: "Python, JavaScript",
    description: [
      "Designed a multi-layer perceptron (MLP) model to classify the MNIST digits dataset",
      "Measured time metrics and presented data using python, Jupyter notebook, and JavaScript files"
    ],
    img: "./img/img-1.png"
  },
  {
    title: "PCL PC Assistant",
    programs: "Visual Studio",
    languages: "C#",
    description: [
      "Program allows Technology Analysts at PCL to complete tedious tasks within seconds",
      "Web-application maps the controls from the computer to complete certain tasks",
      "PC Assistant allows user to self-troubleshoot using buttons on screen to correct simple issues on their computer"
    ],
    img: "./img/img-1.png"
  },
  {
    title: "FitCheck Now",
    programs: "Visual Studio Code, Atom, Flask",
    languages: "Python, HTML, CSS",
    description: [
      "Program asks user for various health-related variables (calorie intake, exercise hours, etc.)",
      "Web-application will provide a healthy meal plan option for user to meet specific goals",
      "FitCheck was designed for the 2022 TOHacks Hackathon - Team placed in the top 20"
    ],
    img: "./img/img-1.png"
  }
];

function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;
  container.innerHTML = projects.map(project => `
    <div class="project-item">
      <div class="project-info">
        <h1>${project.title}</h1>
        <h2>Programs: ${project.programs}</h2>
        <h2>Languages: ${project.languages}</h2>
        <p>
          ${project.description.map(line => `- ${line}<br>`).join('')}
        </p>
      </div>
      <div class="project-img">
        <img src="${project.img}" alt="img">
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);