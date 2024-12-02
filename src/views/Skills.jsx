import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Skills = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div
            id="skills"
            className={`pt-24 pb-12 ${darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                }`}
        >
            <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
                Technologies and Tools
            </h2>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
                {techStack.map((el, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 25,
                                },
                            },
                            hidden: { opacity: 0, y: 80 },
                        }}
                        className={`py-4 px-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:scale-110 shadow-lg transition-transform ${darkMode
                            ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                    >
                        <img
                            alt={el.name}
                            src={el.link}
                            className="w-16 h-16 object-contain"
                        />
                        <h4 className="text-lg mt-3">{el.name}</h4>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
