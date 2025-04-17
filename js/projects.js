fetch('/data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('projects-container');

    projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(', ')}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading projects:', error);
  });