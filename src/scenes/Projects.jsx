import LineGradient from "../components/LineGradient";
import ImageCarousel from "../components/ImageCarousel";


const Projects = () => {
    return (
        <section id="projects">
          <div className="flex flex-col items-start justify-start min-h-screen p-3 sm:p-10">
            <div className="mb-10">
              <h1 className="text-4xl text-white font-playfair mb-2">
                <span className="text-amber-500">Pro</span>jects
              </h1>
              <LineGradient width="w-24" />
            </div>
            <ImageCarousel
              images={[ "../assets/cookoff.png", "../assets/dashboardGen.png", "../assets/gamio.jpg"]}
              links={["https://cookoff23.codechefvit.com/","https://dashboard-genie-nfoz.vercel.app/","https://gamio.vercel.app/"]}
            />
          </div>
        </section>
      );
}
 
export default Projects;