import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  // TODO:
  // TODO:
  // TODO:
  // Below you have to put your serviceID,template ID, userID that you have created on www.emailjs.com
  const serviceID = "emailjs service_ID";
  const templateID = "emailjs template_ID";
  const userID = "emailjs userID";
  // TODO:
  // TODO:
  // TODO:
  const form = useRef();

  const sendEmail = (serviceID, templateID, formCurrent, userID) => {
    emailjs
      .sendForm(serviceID, templateID, formCurrent, userID)
      .then(
        (result) => {
          console.log("CONTACT FORM SUBMITION SUCCEEDED :", result.text);
          setSuccessMessage(
            "Form sent successfully! I will contact you as soon as possible!"
          );
        },
        (error) => {
          console.log("CONTACT FORM SUBMITION FAILED :", error.text);
        }
      )
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    sendEmail(
      //
      serviceID,
      templateID,
      form.current,
      userID
    );
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I will
          contact you as soon as posible.
        </p>
        <div className="success-message">{successMessage}</div>
      </div>
      <div className="container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* left-inputs start */}
            <div className="col-md-6 col-sm-12">
              {/* */}
              {/* NAME INPUT */}
              <div className="input-container name-input-container">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                  name="name"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 30,
                      message:
                        "Please enter a name with fewer than 30 characters",
                    },
                  })}
                />
                <div className="line" />
              </div>
              <div className="error-message">
                {errors.name && errors.name.message}
              </div>
              {/* PHONE INPUT */}
              <div className="input-container">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone")}
                />
                <div className="line" />
              </div>

              {/* EMAIL INPUT */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email*"
                  name="email"
                  {...register("email", {
                    required: "Please provide your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line" />
              </div>
              <div className="error-message">
                {errors.email && errors.email.message}
              </div>
              {/* SUBJECT INPUT */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject*"
                  name="subject"
                  {...register("subject", {
                    required: "OOPS, you forget to add the subject",
                  })}
                />
                <div className="line" />
              </div>
              <div className="error-message">
                {errors.subject && errors.subject.message}
              </div>
              <div className="required-message text-md-start text-sm-end text-xs-end">
                *Required fields
              </div>
            </div>
            {/* left-inputs end */}

            {/* right-inputs start */}
            <div className="col-md-6 col-sm-12">
              {/* DESCRIPTION */}
              <div className="input-container textarea-container">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly your project*"
                  name="description"
                  {...register("description", {
                    required: "Please describe shortly your project needs...",
                  })}
                ></textarea>
                <div className="line" />
              </div>
              <div className="error-message description-error-message">
                {errors.description && errors.description.message}
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
            {/* right-inputs end */}
          </div>
          {/* row end*/}
        </form>
        {/* form end */}
      </div>
      {/* container End */}
      <div id="show-media"></div>
    </div>
    //* contact End
  );
};

export default Contact;
