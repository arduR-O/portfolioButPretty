import LineGradient from "../components/LineGradient";

const Skills = () => {
  return (
    <section id="skills">
      <LineGradient />
      <div className="flex flex-col items-start justify-start min-h-screen  p-10 ">
        <div>
          <h1 className="text-4xl text-white font-playfair mb-2">
            My <span className="text-rose-500">Skills</span>
          </h1>
          <LineGradient width="w-32" />
        </div>
        <div>
          <div className="flex flex-col justify-between mt-10">
            <p className="text-2xl font-poppins font-semibold">Languages and Tools</p>
            <div className="flex flex-wrap items-center justify-start">
              <img className="h-20 m-5" src="../assets/html.svg" alt="html" />
              <img className="h-20 m-5" src="../assets/css.svg" alt="css" />
              <img
                className="h-20 m-5"
                src="../assets/javascript.svg"
                alt="js"
              />
              <img className="h-20 m-5" src="../assets/cpp.svg" alt="cpp" />
              <img
                className="h-20 m-5"
                src="../assets/python.svg"
                alt="python"
              />
              <img className="h-20 m-5" src="../assets/java.svg" alt="java" />
              <img className="h-20 m-5" src="../assets/figma.svg" alt="figma" />
            </div>
          </div>
          <div className="flex flex-col justify-between mt-10">
            <p className="text-2xl font-poppins font-semibold">Frameworks</p>
            <div className="flex flex-wrap items-center justify-start">
              <img className="h-20 m-5" src="../assets/react.svg" alt="react" />
              <img className="h-20 m-5" src="../assets/tailwind.svg" alt="tailwind css" />
              <img
                className="h-20 m-5"
                src="../assets/framer-motion.svg"
                alt="framer motion"
              />
              <img
                className="h-20 m-5"
                src="../assets/graphql.svg"
                alt="graphql"
              />
              <img className="h-20 m-5" src="../assets/numpy.svg" alt="numpy" />
              <img
                className="h-20 m-5"
                src="../assets/tensorflow.svg"
                alt="tensorflow"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between mt-10">
            <p className="text-2xl font-poppins font-semibold">Others</p>
            <div className="flex flex-wrap items-center justify-start">
              <img className="h-20 m-5" src="../assets/git.svg" alt="git" />
              <img className="h-20 m-5" src="../assets/mongodb.svg" alt="mongodb" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
