import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import useMediaQuery from "./hooks/useMediaQuery";
import LandingPage from "./scenes/LandingPage";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import Certifications from "./scenes/Certifications";
import Contact from "./scenes/Contact";

function App() {
  //Structure: Scenes contians normal components, hooks contains hooks, components contain components that are being reused
  //we want to keep track of the current section of page so that we can render that onto the navbar and dotgroup, so we declare states for the same, default is home
  const [currentPage, setCurrentPage] = useState("Home");
  //we have this feature in navbar that needs to know whether the user is on the top of the page, so let's dig into that
  const [isTopOfThePage, setIsTopOfThePage] = useState(true);
  //by default user is on the top but that might change in future, let's handle that change using window api (a side effect)
  //basically we are going to plant a listener to just keep track if the user is on the top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        //this means that user is at the top, in this case
        setCurrentPage("Home");
        setIsTopOfThePage(true);
      } else {
        setIsTopOfThePage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //return the cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    //we are leaving dependency empty since we only need this to run once
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust this value to change when the callback is triggered
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  const isDesktop = useMediaQuery("(min-width: 840px)");
  return (
    <>
      {/* we are going to use relative positioning to positioning all elements*/}
      {/* we pass currentPage and setCurrentPage to both navbar and dotgroup because depending on that they have certain graphics, also both components involve interactions that update the current page */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isTopOfThePage={isTopOfThePage}
      />
      {isDesktop && (
        <DotGroup currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      <LandingPage setCurrentPage={setCurrentPage} />
      <Skills />
      <Projects/>
      <Certifications/>
      <Contact/>
    </>
  );
}

export default App;
