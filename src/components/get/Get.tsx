import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Conteiner from "../Conteiner";
import closeIcon from "/modal-close-icon.svg";
import mnmLogo from "/logo.svg";
import "./Get.scss";

function GetText({ text }: { text: string }) {
  return(
    <><p className="get__text">{text}</p></>
  );
}

interface ModalHeadingContent {
  imageAlt: string;
  text: string;
}
function ModalHeading({ imageAlt, text }: ModalHeadingContent) {
  return (
    <>
      <img src={mnmLogo} alt={imageAlt} id="modalLogo" />
      <p className="get-modal__text">{text}</p>
    </>
  );
}

type InputEmail = {
  email: string;
}
function GetForm({ buttonText }: { buttonText: string }) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm<InputEmail>();

  const onSubmit: SubmitHandler<InputEmail> = (data) => console.log(data);
  const intialValues = { 
    email: "Enter your email*",
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form2">
      <fieldset className="get-form__items">
        <input 
          defaultValue={intialValues.email}
          placeholder="contact@minimal.com"
          type="email" autoComplete="off"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) => v.length <= 30 || "The Email should have at most 50 characters",
              matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
            },
          })}
        />
        <button type="submit">{buttonText}</button>
      </fieldset>

      {errors.email?.message && (
        <p role="alert" id="getFormError">{errors.email.message}</p>
      )}
    </form>
  );
}

type ModalContentClose = {
  onClose: () => void;
};
function ModalContent({ onClose }: ModalContentClose) {
  return (
    <div className="get-modal">
      <div className="get-modal__content">
        <ModalHeading 
          imageAlt={"MNM logo"} 
          text={"Let Us help Your company grow!"}
        />
        <button id="modalClose" onClick={onClose}>Close
          <img src={closeIcon} alt={"close icon"} />
        </button>

        <GetForm buttonText={"SEND"}/>
      </div>
    </div>
  );
}

function GetModal({ getButtonText }: { getButtonText: string }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowY = "scroll";
    }
  }, [showModal]);

  return (
    <div className="modal-container">
      <button className="get-button" onClick={() => setShowModal(true)}>
        {getButtonText}
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}

export default function Get() {
  return (
    <Conteiner className="get">
      <GetText  
        text={"MINIMAL is a full-service digital creative agency located in Ontorio Canada. We focus on design,\
        consulting, technology, and photography. We've been building unique digital products, platforms\
        and experiences for the past 6 years. Let Us help Your company grow."}
      />
      <GetModal getButtonText={"Get in Touch"}/>
    </Conteiner>
  );
}