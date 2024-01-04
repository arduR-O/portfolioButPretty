import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import {motion} from "framer-motion";
const LandingPage = ({ setCurrentPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  
  return (
    //ok so the thing is, above large screens I want the image and text to be side by side but below that I want the image to stack on the top of text, in screen < xs, I want the brush graphic behind name to not even be there
    //in a way, for large screens I want a flexbox with text as first ele and image as second while in smaller screens I want flex-col with image as first ele
    //in screens less than large I don't want the border thing outside image

    //when screen is md I want section to be a flex box, else I want the normal stacking behaviour
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 ml-10 md:mb-32"
    >
      {/* this div is going to contain the image, also if screens are large I render the border thingy */}
      {/* we need two divs, one for the general flex box purpose and the other to just wrap around image and provide that border thingy design, which won't be there when screen is not large, also this div has mid:order-2 class what this does is that by defualt the image is top element but in large screens it goes to the right side */}
      <div className="h-full basis-3/5 mt-16 md:mt-56 flex justify-center md:order-2 md:mx-0">
        {isAboveLarge ? (
          <div
            className="relative z-0 mx-20 before:absolute mt-16 md:mt-12 before:-top-20 before:-left-20 before:rounded-t-[400px]
                        before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-[40vw] before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              src="../assets/profile-image2.JPG"
              alt="profile image"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 max-w-[400px] md:max-w-[40vw] rounded-t-[400px]"
            />
          </div>
        ) : (
          <div className="px-10">
            <img
              src="../assets/profile-image2.JPG"
              alt="profile image"
              className=" z-10 max-w-[280px] xxs:max-w-[350px] xs:max-w-[400px] ss:max-w-[525px] mb-6 lg:max-w-[600px]  rounded-t-[400px]"
            />
          </div>
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-56">
        {/* the {""} thing is to add space between omansh and sharma, for screens above xs I want that brush effect, for that I am going to use "content-brush that I defined in tailwind config file" */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <p className="relative text-5xl ss2:text-6xl md:text-5xl lgtext:text-6xl font-playfair z-10 text-center md:text-start">
          Omansh {""}
          <span
            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brushButSmall ss2:before:content-brush
              before:absolute before:-left-8 before:-top-24 before:ss2:-left-10 before:ss2:-top-32 before:md:-top-36 before:lg:-top-32  before:z-[-10]"
          >
            Sharma
          </span>
        </p>
        {/* font-normal font-opensans mt-20 text-xl */}
        <p className="mt-10 mb-7 text-xl text-center md:text-start md:px-0 px-12 font-opensans">
          Web developer by day, I thrive on pushing boundaries as a creative
          problem solver. With a natural flair for teamwork and insatiable
          curiosity, I turn challenges into captivating digital
          experiences—whether coding dynamic web applications or delving into
          machine learning complexities.
        </p>
        </motion.div>
        <div className="flex mt-5 justify-center md:justify-start">
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 text-xl"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair text-xl">
              Let's talk.
            </div>
          </AnchorLink>
          </motion.div>
        </div>
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default LandingPage;
