import {
  BsFillPersonFill,
  BsFillPencilFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import emailjs from "emailjs-com";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const ContactForm = ({ email_id, client_id, template_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(client_id);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onFormSubmit = async ({ name, email, phone, message }) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        email_id,
        template_id,
        {
          name,
          email,
          phone: phone ? phone : "not provided",
          message,
        },
        client_id
      );
      setIsLoading(false);
    } catch (err) {
      enqueueSnackbar("Something Went Wrong", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }

    setIsLoading(false);
    enqueueSnackbar("Message Sent Successfully", {
      variant: "success",
      autoHideDuration: 2000,
    });
  };
  return (
    <>
      <div className="text-center">
        <ClipLoader color={"green"} loading={isLoading} size={75} />
      </div>

      <section className=" text-center mt-5 p-5 text-white ">
        <h2 className="text-2xl mb-1 font-semibold">
          How Can We Help with Your Experience
        </h2>
        <p className="max-w-sm m-auto">
          Feel free to voice all questions or concerns and we will get back to
          you as soon as possible !
        </p>
      </section>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="shadow-md shadow-[#9ae6a2] min-w-max bg-gray-500 lg:w-5/12  rounded-lg mt-3 p-5 min-h-fit w-3/4 m-auto grid gap-7 justify-center "
      >
        <h2 className="text-[24px] h-5 font-[Open-Sans] text-gray-50">
          Get In Touch
        </h2>
        <div className="grid gap-7">
          <div className="min-w-max">
            {!!errors.name && (
              <h3 className="text-red-800 mb-5">
                Name must be at least two characters
              </h3>
            )}
            <label htmlFor="name">
              <BsFillPersonFill className="inline-block text-main" size={24} />{" "}
            </label>

            <Controller
              name="name"
              control={control}
              id="name"
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <input
                  required
                  placeholder=" john doe"
                  type="text"
                  id="name"
                  className="rounded-md ml-3 p-1 w-60 lg:w-80 focus:scale-105"
                  {...field}
                />
              )}
            />
          </div>

          <div className="min-w-max">
            {!!errors.emails && <h3 className="text-main">Invalid Email</h3>}
            <label htmlFor="email">
              {" "}
              <AiTwotoneMail
                className="inline-block text-main "
                size={24}
              />{" "}
            </label>

            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <input
                  required
                  placeholder="joe@gmail.com"
                  type="email"
                  id="email"
                  className="rounded-md ml-3 p-1 w-60 lg:w-80 focus:scale-105"
                  {...field}
                />
              )}
            />
          </div>
          <div className="min-w-max">
            {!!errors.phone && (
              <div className="min-w-max">
                <h3 className="text-red-800">Invalid Phone Number</h3>
                <small className="text-red-800">*Must contain dashes*</small>
              </div>
            )}
            <label htmlFor="phone">
              {" "}
              <BsTelephoneFill
                className="inline-block text-main "
                size={24}
              />{" "}
            </label>

            <Controller
              name="phone"
              control={control}
              rules={{
                pattern: /^(\+0?1\s)?\(?\d{3}\)?[\s.-]*\d{3}[\s.-]\d{4}$/,
              }}
              render={({ field }) => (
                <input
                  placeholder="917-123-4323"
                  type="tel"
                  id="phone"
                  className="rounded-md ml-3 p-1 w-60 lg:w-80 focus:scale-105"
                  {...field}
                />
              )}
            />
          </div>
          <div className="min-w-max ">
            {!!errors.message && (
              <div className="min-w-max">
                <h3 className="text-red-800">Invalid Message Body</h3>
                <small className="text-red-800">* Must not be empty *</small>
              </div>
            )}
            <label htmlFor="message relative">
              {" "}
              <BsFillPencilFill className="absolute text-main" size={24} />{" "}
            </label>

            <Controller
              name="message"
              control={control}
              rules={{
                minLength: 1,
              }}
              render={({ field }) => (
                <textarea
                  placeholder=" Message"
                  id="message"
                  className="rounded-md ml-10 p-1 w-60 lg:w-80 focus:scale-105"
                  {...field}
                />
              )}
            />
          </div>
          {/*          */}
          <button className="bg-main shadow-sm shadow-green-50 text-white rounded-full p-2 hover:opacity-90 ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
