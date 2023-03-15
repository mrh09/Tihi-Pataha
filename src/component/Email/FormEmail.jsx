import { React, useRef } from "react";
import Lottie from "lottie-react";
import Logo from "../../assets/img/logo.json";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const FormEmail = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_qvwg10t",
        "template_u57yls4",
        form.current,
        "lUFy-KZf5Pq96QJHV"
      )
      .then(
        () => {
          toast.success("Email Send !!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        },
        () => {
          toast.error("Error Masangges !!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );
    event.target.reset();
  };

  return (
    <>
      <section className="form-email">
        <div className="container container-md">
          <div className="row">
            <div className="col-email-form col-sm-12 col-md-6">
              <form className="email-form" onSubmit={sendEmail} ref={form}>
                <h3>Contact Us</h3>
                <label>Email*</label>
                <input type="email" name="user_email" required />
                <br />
                <label>Subject*</label>
                <input type="text" name="user_subject" required />
                <br />
                <label>Message *</label>
                <textarea type="text" name="message" required />
                <br />
                <button
                  className="btn btn-line"
                  type="submit"
                  onClick={sendEmail}>
                  Send
                </button>
              </form>
            </div>
            <div className="col-email-lottie col-sm-12 col-md-6">
              <Lottie animationData={Logo} />
            </div>
          </div>
          <ToastContainer autoClose={3000} />
        </div>
      </section>
    </>
  );
};

export default FormEmail;
