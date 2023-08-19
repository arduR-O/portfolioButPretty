import AnchorLink from "react-anchor-link-smooth-scroll";

const Dot = ({page, currentPage, setCurrentPage }) => {
  console.log(currentPage);

    //ok so we used 'before' to make an outer circle, now the positioning of it is absolute, which means that it is now out of the document flow, now, the inner circle has w-3 h-3 and the outer circle has twice the dimensions, now we have set the inner circle to relative, we did this because REFERENCE FOR ABSOLUTE ARE THE NEAREST POSITIONED ELEMENTS
    //now once we added these properties we found that the circles were not aligned, we found that the outer circle was going towards bottom right, so we set top to -50, pushing it upwards, similarly we used left to push it to left
    const style =
    page === currentPage.toLowerCase()
      ? "relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:top-[-50%] before:left-[-50%]"
      : "bg-grey";
  const handleClick = () => {
    setCurrentPage(page);
  };
    return ( 
        <AnchorLink href={`#${page}`} className={`${style} w-3 h-3 rounded-full`} onClick={handleClick}/>
     );
}
 
export default Dot;