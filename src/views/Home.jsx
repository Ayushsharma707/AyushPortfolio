import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import Typical from "react-typical";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={
        darkMode
          ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
          : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
      }
    >
      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="home"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <motion.span
              className={`block ${darkMode ? "text-black" : "text-white"}`}
            >
              <span>Hi, I am </span>
              <Typical
                steps={["Ayush", 2000, "आयुष", 2000]} // Set each word change to 2 seconds
                loop={Infinity}
                wrapper="span"
              />
            </motion.span>
            <span className="block text-blue-500 z-0 lg:inline">
              {"I build things for fun"}
            </span>
          </h1>

          <p
            className={
              darkMode
                ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            }
          >
            I’m a passionate Front-End Developer, constantly expanding my
            skills towards Full-Stack development.
          </p>
          <div className="flex md:justify-start">
            {contactLinks.map((el) => (
              <a
                href={el.link}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security measure
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
                key={el.name}
              >
                <img alt={el.name} src={el.url} />
              </a>
            ))}
          </div>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 flex space-x-4 cursor-pointer">
              {/* Contact Button */}
              <Link
                to="contact" // Link to the contact section (id="contact")
                smooth={true} // Enables smooth scrolling
                duration={500} // Duration for the scroll animation
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out"
                style={{ width: "200px" }}
              >
                Contact
              </Link>

              {/* Transparent Themed Resume Button */}
              <a
                href="https://drive.google.com/file/d/1RrcaEgm1S0EhcwmrJ22OcMfd6XE8ecLW/view?usp=sharing" // Path to the uploaded PDF
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security feature to avoid any potential vulnerabilities
                className={`w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out ${darkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
                  }`}
                style={{ width: "200px", backgroundColor: "transparent" }}
              >
                Resume
              </a>

            </div>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, y: 80 }} // Start off-screen (down)
          whileInView={{ opacity: 1, y: 0 }} // Slide into view (from bottom)
          transition={{ type: "spring", stiffness: 100, damping: 25 }} // Smooth transition
          src={heroBg}
          alt=""
          className="md:w-3/6 hidden sm:block"
        />

      </main>
    </div>
  );
};

export default Home;
