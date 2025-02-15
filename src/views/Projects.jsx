import { Fade, Zoom } from "react-awesome-reveal";
import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import mrmenu from '../assets/mrmenu.png';
import farway from '../assets/farway.png';
import vk18 from '../assets/vk18.png';
import portfolio from '../assets/portpolio.png';

const projects = [
  {
    id: "1",
    title: "Mr. Menu",
    image: mrmenu,
    description:
      "A feature-rich website showcasing over 10,000 recipes with dynamic search capabilities and a user-friendly interface. Includes functionalities to adjust ingredient portions based on the number of servings, bookmark favorite recipes, and allow users to upload their own recipes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://mr-menu.netlify.app/#664c8f193e7aa067e94e8297",
    codeLink: "https://github.com/Ayushsharma707/Mr.menu",
  },

  {
    id: "2",
    title: "FarAway",
    image: farway,
    description:
      "A React-based application designed to help travelers manage and track their to-do lists. Features include dynamic state management to add, organize, and mark tasks as complete, along with a user-friendly interface for seamless task management and navigation.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    liveLink: "https://faraway49.netlify.app/",
    codeLink: "https://github.com/Ayushsharma707/Travelling-List",
  },

  {
    id: "3",
    title: "My Portfolio",
    image: portfolio,
    description:
      "A personal portfolio website to showcase my skills, experience, projects, and contact information. Designed with a responsive layout to ensure compatibility across devices and optimized for performance.",
    technologies: ["React.js", "CSS", "HTML", "JavaScript"],
    liveLink: "#",
    codeLink: "https://github.com/Ayushsharma707/AyushPortfolio",
  },

  {
    id: "4",
    title: "VK18: The Portfolio",
    image: vk18,
    description:
      "A personalized portfolio website designed for Virat Kohli, showcasing a professional layout and user-friendly design. Includes sections for career highlights, achievements, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://vk18-portfolio.netlify.app/",
    codeLink: "https://github.com/Ayushsharma707/VK18?tab=readme-ov-file",
  }
];

export default function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="projects"
      className={`px-4 py-10 sm:px-10 md:px-16 min-h-screen ${darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}`}
    >
      <div className="mx-auto px-4">
        <Fade cascade triggerOnce direction="down">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Projects
          </h2>
          <h3 className={`text-base sm:text-lg md:text-xl mb-6 text-center max-w-2xl mx-auto ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            Explore a selection of my recent work, showcasing my skills.
          </h3>
        </Fade>
        <div>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-1 mb-1 md:gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <Zoom triggerOnce>
                <div className="relative">
                  <a
                    href={project.liveLink}
                    target={
                      project.id === "3" || project.title === "My Portfolio"
                        ? "_self"
                        : "_blank"
                    }
                    rel={
                      project.id === "3" || project.title === "My Portfolio"
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover rounded-lg duration-200 hover:scale-105"
                    />
                  </a>
                </div>
              </Zoom>


              <div className="flex flex-col items-start">
                <Fade cascade triggerOnce direction="left">
                  <h3 className={`font-bold text-xl mb-2 md:text-2xl ${darkMode ? "text-gray-900" : "text-white"}`}>
                    {project.title}
                  </h3>
                  <p className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full text-sm ${darkMode ? "bg-gray-200 text-gray-700" : "bg-gray-700 text-gray-200"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </p>
                  <p className={`text-base mb-6 md:text-lg ${darkMode ? "text-gray-500" : "text-gray-300"}`}>
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target={
                          project.id === "3" || project.title === "My Portfolio"
                            ? "_self"
                            : "_blank"
                        }
                        rel="noopener noreferrer"
                        className={`btn px-4 py-2 rounded ${darkMode ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-500"}`}
                      >
                        Live Link
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn px-4 py-2 rounded ${darkMode ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                    >
                      Code Link
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          ))}
        </div>
        {/* Show More Button */}
        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/Ayushsharma707?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn px-6 py-3 rounded ${darkMode ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-500"}`}
          >
            Show More...
          </a>
        </div>
      </div>
    </section>
  );
}
