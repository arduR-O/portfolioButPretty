import { useEffect, useState, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../components/Link";

const Navbar = ({ currentPage, setCurrentPage, isTopOfThePage }) => {
  //now this navbar is going to be a banner for desktop users and a togglable button for mobile users, so we need a conditional statement to take care of that, for that we are going to use this cool hook that we have made
  const isDesktop = useMediaQuery("(min-width: 768px)"); //768px covers tablets and larger screens
  //we also want that while the user is on the home section the navbar has no color but when he goes down the navbar gets some bg
  const navBg = isTopOfThePage ? "" : "bg-yellow";

  //this one is going to be used to track the toggled state of menu button for mobile screens
  const [isToggled, setIsToggled] = useState(false);

  //I have this feature for mobile screens in which the navbar collapses when there is a click outside it, so let me write code for that, since there are going to be sideeffect, event listeners and stuff, lemme use a useEffect hook
  //first we need a reference to the nav element, so that we can access it
  const navbarRef = useRef(null); //initially it is null, it will gain value once I mount it onto the required navbar
  useEffect(()=>{
    //define function to handle clicks
    const handleOutsideClick = (e)=>{
      //we want to check two things: 1) navbar is actually mounted in the dom (navbarRef.current!=null) 2) that click has originated out of navbar
      if(navbarRef.current && !navbarRef.current.contains(e.target)){
        //if these are fulfilled I wanna change the value of toggle so that the menu collapses
        setIsToggled(false);
      }
    }
    //add event listener to listen to clicks in whole website
    document.addEventListener("click",handleOutsideClick);
    return ()=>document.removeEventListener("click",handleOutsideClick);

    //IMPORTANT NOTE: When I initially run this function, the toggle button won't work, what happens is that when I click that button it opens the menu, but then the click, which has been applied to whole document bubbles up and overwrites the change caused by the button click, that's why we need to stop propogation manually in the button so that it does not bubble up, and that fixes the issue
  }, [])

  return (
    // the layout that we desire for navbar is that we have website title OS on right and nav bar or toggle button on the left
    //the navBg var handles the bg feature, the relative, top stuff is for positioning, z for positioning on z axis
    //I want this to be a bg less bar when at top and then gain background as user scrolls, in mobile devices I want toggle butto to merge with banner on scrolling
    <nav
      className={`${navBg}fixed z-40 top-0 h-auto w-full flex justify-between mx-5 justify-items-center`}
    >
      <h4 className="font-playfair text-5xl">OS</h4>
      {isDesktop ? (
        /*Desktop View */
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
         /*Mobile View + No Toggle*/
        <button className="fixed top-3 right-3 z-10 w-10 h-10">
          <img
            src="../assets/menu-icon.svg"
            alt="menu icon"
            onClick={(e) => {
              setIsToggled(true);
              e.stopPropagation();
            }}
          />
        </button>
      ) : (
         /*Mobile View + With Toggle*/

        <nav ref={navbarRef} className="fixed z-10 w-6/12 xs:w-5/12 h-full top-0 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col px-3 xs:px-10 justify-evenly">
          <Link
            page="Home"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            style="font-semibold"
          />
          <Link
            page="Skills"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            style="font-semibold"
          />
          <Link
            page="Projects"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            style="font-semibold"
          />
          <Link
            page="Testimonials"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            style="font-semibold"
          />
          <Link
            page="Contact"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            style="font-semibold"
          />
        </nav>
      )}
    </nav>
  );
};

export default Navbar;



