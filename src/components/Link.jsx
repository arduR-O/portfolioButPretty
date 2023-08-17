import AnchorLink from "react-anchor-link-smooth-scroll";

//I want the link to do following things, here page is the page the link is linked to: 1) go to particular section when clicked upon and update currentPage 2) turn yellow on hover 3)be yellow if currentPage === page 
const Link = ({page, currentPage, setCurrentPage}) => {
    //page is in title case, currentpage and ids in lowercase
    const lcpage = page.toLowerCase();
    //need to make a conditional statement for font color
    const fontCol = (page===currentPage)? "text-yellow" : "text-white";
    return (
        <AnchorLink
        //remember how we used to internally link sections using ID?? that's exactly what we want to do right now, just that we are doing it using variables
        href={`#${lcpage}`}
        className={`text-2xl ${fontCol} hover:text-yellow font-poppins py-3`}
        onClick={()=>{setCurrentPage(lcpage)}}
        >{page}</AnchorLink>
      );
}
 
export default Link;