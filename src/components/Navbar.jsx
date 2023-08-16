import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({currentPage, setCurrentPage, isTopOfThePage}) => {
    //now this navbar is going to be a banner for desktop users and a togglable button for mobile users, so we need a conditional statement to take care of that, for that we are going to use this cool hook that we have made
    const isDesktop = useMediaQuery("(min-width: 768px)"); //768px covers tablets and larger screens

    //we also want that while the user is on the home section the navbar has no color but when he goes down the navbar gets some bg
    const navBg = (isTopOfThePage)? "" : "bg-pink";
    
    
    return ( 
        // the layout that we desire for navbar is that we have website title OS on right and nav bar or toggle button on the left 
        //the navBg var handles the bg feature, the relative, top stuff is for positioning, z for positioning on z axis
        <nav className= {`${navBg} fixed z-40 top-0 h-auto w-full flex justify-between mx-7 px-5`}> 
            <h4 className="font-playfair text-4xl">OS</h4>
            <div className="flex gap-3">
                <p className="font-playfair text-2xl">sampel1</p>
                <p className="font-playfair text-2xl">sampel1</p>
                <p className="font-playfair text-2xl">sampel1</p>
            </div>
        </nav>
     );
}
 
export default Navbar;