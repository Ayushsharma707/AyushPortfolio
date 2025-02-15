import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Home from "./views/Home";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";
import "./index.css"
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
