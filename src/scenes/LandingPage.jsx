import useMediaQuery from "../hooks/useMediaQuery"
const LandingPage = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        //ok so the thing is, above large screens I want the image and text to be side by side but below that I want the image to stack on the top of text, in screen < xs, I want the brush graphic behind name to not even be there
        //in a way, for large screens I want a flexbox with text as first ele and image as second while in smaller screens I want flex-col with image as first ele
        //in screens less than large I don't want the border thing outside image

        //when screen is md I want section to be a flex box, else I want the normal stacking behaviour
        <section id="home" className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
            {/* this div is going to contain the image, also if screens are large I render the border thingy */}
            {/* we need two divs, one for the general flex box purpose and the other to just wrap around image and provide that border thingy design, which won't be there when screen is not large, also this div has mid:order-2 class what this does is that by defualt the image is top element but in large screens it goes to the right side */}
            <div className="h-full basis-3/5 mt-16 md:mt-32 flex justify-center md:order-2">
                {
                    isAboveLarge?
                    (
                        <div className="relative z-0 ml-20 before:absolute mt-16 md:mt-32 before:-top-20 before:-left-20 before:rounded-t-[400px]
                        before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img src="../assets/profile-image.jpg" alt="profile image" className="hover:filter hover:saturate-200 transition duration-500 z-10 max-w-[400px] md:max-w-[600px] rounded-t-[400px]" />
                        </div>
                    ):
                    (
                        <img src="../assets/profile-image.jpg" alt="profile image" className="hover:filter hover:saturate-200 transition duration-500 z-10 max-w-[400px] md:max-w-[600px]  rounded-t-[400px]" />
                    )
                }
            </div>
        </section>
     );
}
 
export default LandingPage;