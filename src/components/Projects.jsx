function Projects() {
  const projects = [
    {
      id: 1,
      title: "Shopping Cart",
      description:
        "Simple shopping cart application built with React, CSS and JavaScript. Demo on CodePen.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink:
        "https://codepen.io/Brandon-Daniel-Barrantes-Calder-n/pen/ByjdybR",
      codeLink: "#",
    },

    {
      id: 2,
      title: "User Manager with Dark Mode",
      description:
        "User manager application built with React, Context API, JavaScript and CSS with Dark Mode. Demo on CodePen.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink:
        "https://codepen.io/Brandon-Daniel-Barrantes-Calder-n/pen/pvgNojL?editors=1011",
      codeLink: "#",
    },

    {
      id: 3,
      title: "Contact List",
      description:
        "A simple contact list application built with React, JavaScript and CSS. Demo on CodePen.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink:
        "https://codepen.io/Brandon-Daniel-Barrantes-Calder-n/pen/XJXgPZx?editors=1111",
      codeLink: "#",
    },

    {
      id: 4,
      title: "Cronometer App",
      description:
        "Cronometer application built with React, JavaScript and CSS.Demo on CodePen.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink:
        "https://codepen.io/Brandon-Daniel-Barrantes-Calder-n/pen/vELjyaV",
      codeLink: "#",
    },

    {
      id: 5,
      title: "Task Manager",
      description:
        "Task manager application built with React, JavaScript and CSS. Demo on CodePen.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink:
        "https://codepen.io/Brandon-Daniel-Barrantes-Calder-n/pen/gbPRPVR",
      codeLink: "#",
    },

    {
      id: 6,
      title: "Coming Soon...",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-purple-500 w-full bg-gradient-to-br from-purple-900 to-blue-900  pt-20"
    >
      <div className="container mx-auto px-4 bg-white p-5 rounded-lg">
        <div className="p-4 rounded-lg mb-8">
          <h2 className="text-gray-900 text-3xl font-bold m-4 mt-1">
            Welcome to My Projects
          </h2>
          <h3 className="text-gray-900 text-lg font-bold m-4 mt-1">
            Here are some of the projects I've built while learning web
            development
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition duration-300"
              key={project.id}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="text-gray-500 mb-4">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 text-white hover:underline ml-4 bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl"
              >
                Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 text-white hover:underline ml-4 bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl"
              >
                Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
