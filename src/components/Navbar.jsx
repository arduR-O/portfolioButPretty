import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "./Link";

const Navbar = ({ currentPage, setCurrentPage, isTopOfThePage }) => {
  //now this navbar is going to be a banner for desktop users and a togglable button for mobile users, so we need a conditional statement to take care of that, for that we are going to use this cool hook that we have made
  const isDesktop = useMediaQuery("(min-width: 768px)"); //768px covers tablets and larger screens
  console.log(isDesktop);
  //we also want that while the user is on the home section the navbar has no color but when he goes down the navbar gets some bg
  const navBg = isTopOfThePage ? "" : "bg-yellow";

  //this one is going to be used to track the toggled state of menu button for mobile screens
  const [isToggled, setIsToggled] = useState(false);

  return (
    // the layout that we desire for navbar is that we have website title OS on right and nav bar or toggle button on the left
    //the navBg var handles the bg feature, the relative, top stuff is for positioning, z for positioning on z axis
    //I want this to be a bg less bar when at top and then gain background as user scrolls, in mobile devices I want toggle butto to merge with banner on scrolling
    <nav
      className={`${navBg}fixed z-40 top-0 h-auto w-full flex justify-between mx-5 justify-items-center`}
    >
      <h4 className="font-playfair text-5xl">OS</h4>
      {isDesktop ? (
        <div className="flex gap-10 px-8 justify-items-center">
          <Link
            page="Home"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Skills"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Projects"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Testimonials"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Contact"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : !isToggled ? (
        <button className="fixed top-3 right-3 z-10 w-10 h-10">
          <img
            src="../assets/menu-icon.svg"
            alt="menu icon"
            onClick={() => {
              setIsToggled(true);
            }}
          />
        </button>
      ) : (
        <div className="fixed z-10 w-5/12 h-full top-0 right-0 bg-gradient-to-br from-cyan-400 to-indigo-600 flex flex-col">
          <Link
            page="Home"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Skills"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Projects"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Testimonials"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Link
            page="Contact"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
