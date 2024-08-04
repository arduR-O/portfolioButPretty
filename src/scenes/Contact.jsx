import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const form = new FormData();
    Object.keys(data).forEach(key => form.append(key, data[key]));

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwrgBMMxS3ydg8jciY1CZir0jR_zVsTwdacaSRqjSAEKSNS3vQA1wkuIduBHE90RkwF/exec",
        {
          method: 'POST',
          body: form,
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        // alert("Success!");
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="contact"
      className="mt-24 h-[90vh] flex flex-col justify-evenly"
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
          {isAboveLarge && (
            <motion.div
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
            </motion.div>
          )}

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
            {isSubmitted ? (
              <p className="text-center text-2xl font-semibold">Thank you for your message!</p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    {errors.name.type === "maxLength" && "Max length is 100 char."}
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
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}

                <textarea
                  className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
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
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                  </p>
                )}

                <button
                  className={`p-5 font-semibold mt-5 transition duration-500 w-full
                    ${isLoading 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-yellow text-deep-blue hover:bg-red hover:text-white'
                    }`}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      SENDING...
                    </div>
                  ) : (
                    'SEND ME A MESSAGE'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
        <p className="text-center text-sm sm:text-base font-poppins font-medium tracking-wide mt-8">
          Developed with <span role="img" aria-label="emoji" className="animate-pulse">❤️</span> by <span className="text-gray-dark-5">Omansh Sharma</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;