import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import Typewriter from "typewriter-effect"; // ✅ Correct package

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundImage: `url('${darkMode ? cloud : cloudDark}')`,
        backgroundSize: "cover",
      }}
    >
      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="home"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
  <motion.span className={`${darkMode ? "text-black" : "text-white"}`}>
    Hi, I am{" "}
    <span className="inline-block">
      <Typewriter
        options={{
          strings: ["Ayush", "आयुष"],
          autoStart: true,
          loop: true,
          delay: 100, // Typing speed
          deleteSpeed: 50, // Erasing speed
        }}
      />
    </span>
  </motion.span>
  <br />
  <span className="text-blue-500 z-0 lg:inline">I build things for fun</span>
</h1>


          <p
            className={`mt-3 text-base ${
              darkMode ? "text-black" : "text-white"
            } sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}
          >
            I’m a passionate Front-End Developer, constantly expanding my
            skills towards Full-Stack development.
          </p>

          <div className="flex md:justify-start">
            {contactLinks.map((el) => (
              <a
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
                key={el.name}
              >
                <img alt={el.name} src={el.url} />
              </a>
            ))}
          </div>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 flex space-x-4 cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out"
                style={{ width: "200px" }}
              >
                Contact
              </Link>

              <a
                href="https://drive.google.com/file/d/1RrcaEgm1S0EhcwmrJ22OcMfd6XE8ecLW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out ${
                  darkMode
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
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          src={heroBg}
          alt="hero"
          className="md:w-3/6 hidden sm:block"
        />
      </main>
    </div>
  );
};

export default Home;
