import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="contact"
      className="mt-24 h-[90vh] flex flex-col justify-evenly "
    >
      <LineGradient/>
      <div className="py-10 px-14">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-end w-full"
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-yellow">CONTACT ME</span> TO GET STARTED
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="w-1/2" />
            </div>
          </div>
        </motion.div>

        {/* FORM & IMAGE */}
        <div className="md:flex md:justify-between gap-16 mt-5 md:items-center">
          {isAboveLarge && (<motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 flex justify-center max"
          >
            <img src="../assets/contact-image.svg" alt="contact" />
          </motion.div>)}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 mt-10 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://docs.google.com/forms/d/e/1FAIpQLSeM7CyJ2OJinI09g3jpHNsM6LipyG76WcadGtAEVGAL9CYyLw/viewform?embedded=true"
              method="POST"
            >
              <input
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      <p className="jsx-561ee4058b63bdb6 text-center text-sm sm:text-base font-poppins font-medium tracking-wide mt-8">Developed with <span role="img" aria-label="emoji" className="jsx-561ee4058b63bdb6 animate-pulse">❤️</span> by <span className="jsx-561ee4058b63bdb6 text-gray.dark.5">Omansh Sharma</span></p>
      </div>
    </section>
  );
};

export default Contact;
