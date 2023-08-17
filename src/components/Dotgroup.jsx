import Dot from "./Dot";

const DotGroup = ({ currentPage, setCurrentPage }) => {

  //the purpose of this component is to provide dots in right bottom stacked on each other that show all the sections and stuff
  //I want it to have following feature: 1) if selected page, turn yellow with dot in between else remain gray 2) when clicked, change to yellow, jump to the required link and then update the currentPage
  
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <Dot page={"home"} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Dot page={"skills"} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Dot page={"projects"} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Dot page={"testimonials"} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Dot page={"contact"} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
     
    </div>
  );
};

export default DotGroup;
