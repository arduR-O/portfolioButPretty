import useMediaQuery from "../hooks/useMediaQuery";
import Link from "./Link";

const Navbar = ({currentPage, setCurrentPage, isTopOfThePage}) => {
    //now this navbar is going to be a banner for desktop users and a togglable button for mobile users, so we need a conditional statement to take care of that, for that we are going to use this cool hook that we have made
    const isDesktop = useMediaQuery("(min-width: 768px)"); //768px covers tablets and larger screens

    //we also want that while the user is on the home section the navbar has no color but when he goes down the navbar gets some bg
    const navBg = (isTopOfThePage)? "" : "bg-pink";
    
    
    return ( 
        // the layout that we desire for navbar is that we have website title OS on right and nav bar or toggle button on the left 
        //the navBg var handles the bg feature, the relative, top stuff is for positioning, z for positioning on z axis
        <nav className= {`${navBg} fixed z-40 top-0 h-auto w-full flex justify-between mx-5 justify-items-center`}> 
            <h4 className="font-playfair text-5xl">OS</h4>
            <div className="flex gap-10 px-8 justify-items-center">
                <Link page="Home" currentPage setCurrentPage/>
                <Link page="About" currentPage setCurrentPage/>
                <Link page="Skills" currentPage setCurrentPage/>
                <Link page="Testimonials" currentPage setCurrentPage/>
                <Link page="Contact Me" currentPage setCurrentPage/>
            </div>
        </nav>
     );
}
 
export default Navbar;