import ImageCarousel from "../components/ImageCarousel";
import LineGradient from "../components/LineGradient";

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="flex flex-col items-start justify-start min-h-screen p-3 sm:p-10">
        <div className="mb-10">
          <h1 className="text-4xl text-white font-playfair mb-2">
            My <span className="text-fuchsia-400">Certifications</span>
          </h1>
          <LineGradient width="w-64" />
        </div>
        <ImageCarousel
          images={[ "../assets/fespec.png", "../assets/mlspec.png" , "../assets/dlspec.png"]}
          links={["https://www.coursera.org/account/accomplishments/specialization/SZGQJ6HP7L29", "https://www.coursera.org/account/accomplishments/specialization/D8K6NEMB9MH4", "https://www.coursera.org/account/accomplishments/specialization/AUK4GDQZ39HS"]}
        />
      </div>
    </section>
  );
};

export default Certifications;
