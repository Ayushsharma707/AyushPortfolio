import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold text-center"
              : "text-5xl font-bold text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Hello, my name is Ayush Sharma, and I am a Computer Science student with a passion for web development. As a self-taught developer, I have built expertise in front-end development and am currently expanding my skills to become a full-stack developer.

              I enjoy creating websites that are easy to use and visually appealing, as it allows me to combine my technical knowledge with creativity. From designing user-friendly interfaces to exploring new features, I’m always excited to try new ideas and improve.

            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
