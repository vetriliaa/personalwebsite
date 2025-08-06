import React from 'react';
import '../styles.css'; // Use your main CSS if needed

function Projects() {
  const projects = [
    {
      name: 'Weather Genie',
      link: 'https://weather-genie-8ruosbxjo-vetriliaas-projects.vercel.app/',
      description: "A real-time weather application interface"
    },
    {
      name: 'College Compass',
      link: 'https://collegecompass2024.netlify.app/',
      description: "A web app to centralize resources (e.g., transit, grocery) for new international students at UT Dallas"
    },
    {
      name: 'Heartbot',
      link: 'https://www.codefornonprofit.org/heartbot',
      description: "A stress management app for teens built in collaboration with the Heartfulness Insitute, reaching students nationwide via the Heartful Schools program"
    },
    {
      name: 'Alphabet of the Heart',
      link: 'https://www.codefornonprofit.org/aoth',
      description: "A web app designed and built in collaboration with the CCARE institute at Stanford to centralize resources (e.g., transit, grocery) for new international students at UT Dallas"
    },
    {
      name: 'AI Ordering Assistant',
      link: 'https://docs.google.com/presentation/d/1eWHRpO8pyCtJhVVH2P22VqpibI2Cp6PxnxS_XybKhEU/edit?usp=sharing',
      description: 'An AI powered chatbot to help customers place and edit orders for In-N-Out'
    },
    {
      name: 'AI Text Classifier',
      link: 'https://docs.google.com/presentation/d/1eWHRpO8pyCtJhVVH2P22VqpibI2Cp6PxnxS_XybKhEU/edit?usp=sharing',
      description: 'Built and evaluated RNN, FFNN, and fine-tuned BERT models to classify AI vs. human-written text'
    },
     {
      name: 'Kesem',
      link: 'https://www.instagram.com/kesem.utdallas/',
      description: "Co-directed Kesem @ UTD, raising a record $23k and organizing a summer camp for 55 kids and 30 staff members across North Texas whose parents are impacted by cancer"
    },
    {
      name: 'Code for Nonprofit',
      link: 'https://www.codefornonprofit.org/',
      description: "Founded a nonprofit that develops free mobile apps with partner organizations, expanding access to mental health tools across nationwide programs"
    },
    {
      name: 'Student Wellness and Leadership Movement',
      link: 'https://docs.google.com/presentation/d/1eWHRpO8pyCtJhVVH2P22VqpibI2Cp6PxnxS_XybKhEU/edit?usp=sharing',
      description: 'Co-founded during COVID-19, delivering digital mental health resources to a global network of 100k students across 5 countries'
    },
  ];

  const articles = [
    {
      name: 'When a Parent has Cancer',
      link: 'https://heartfulness.org/magazine/when-a-parent-has-cancer',
    },
    {
      name: 'Sustaining the Soul, Nurturing the Earth',
      link: 'https://heartfulness.org/magazine/sustaining-the-soul-nurturing-the-earth',
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="resume-heading">
        <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">
          RESUME
        </a>
      </h1>

      <h2 className="projects-heading">Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <strong>{project.name}</strong>
          </a>
          <p>{project.description}</p>
        </div>
      ))}

     <h2 className="projects-heading">Things I've Written</h2>

      {articles.map((article, index) => (
        <div key={index} className="project-item">
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            <strong>{article.name}</strong>
          </a>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
