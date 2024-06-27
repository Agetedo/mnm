import { useState,  useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FooterConteiner from "./FooterConteiner";
import "./Footer.scss";

function FooterFormButton({ buttonText }: { buttonText: string } ) {
  return (
    <div className="footer__button">
      <button type="submit">{buttonText}</button>
    </div>
  );
}

interface FooterLogoProps {
  logoSrc: string;
  logoAlt: string;
}
function FooterLogo({ logoSrc, logoAlt }: FooterLogoProps) {
  return (
    <div className="footer__logo">
      <img src={logoSrc} alt={logoAlt} />
    </div>
  );
}

function FooterRights({ rightsText }: { rightsText: string }) {
  return ( <p className="footer__text">{new Date().getFullYear()} &copy;{rightsText}</p> );
}

type InputRegister = {
  name: string;
  email: string;
  userBudget: string,
  userMessage: string;
}
function FooterForm() {
  const [budget, setBudget] = useState("1000");
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm<InputRegister>();

  const onSubmit: SubmitHandler<InputRegister> = (data) => console.log(data);
  const intialValues = { 
    name: "Your Name*", 
    email: "Email address*",
    userMessage: "Describe youre project...",
  };
  const budgetInputId = useId();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="footer__form">
      <input className="form__name"
        defaultValue={intialValues.name}
        placeholder="William Smith" 
        type="text" autoComplete="off"
        aria-invalid={errors.name ? "true" : "false"}
        {...register("name",  { 
          required: true, 
          maxLength: {
            value: 20, 
            message: "The Name should have at most 20 characters",
          },
          pattern: {
            value: /^[A-Za-z ]+$/i,
            message: "The Name must contain only letters",
          } 
        })}
      />
      <input className="form__email"
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

      <label className="budget__label" htmlFor={budgetInputId}>Budget $ {budget}</label>  
      <input id={budgetInputId} className="form__budget"
        type="range" 
        {...register("userBudget", {})}
        min={100} max={10000}
        value={budget} onChange={e => setBudget(e.target.value)}
      />

      <textarea className="form__describe"
        defaultValue={intialValues.userMessage}
        placeholder="Your message"
        aria-invalid={errors.userMessage ? "true" : "false"}
        {...register("userMessage", {
          pattern: /[A-Za-z]/,
        })}
      />

      {errors.email?.message && (
        <p role="alert" className="error-message">{errors.email.message}</p>
      )}
      {errors.name && errors.name.type === "required" && (
        <p role="alert" className="error-message">Name is required</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p role="alert" className="error-message">{errors.name.message}</p>
      )}
      {errors.name && errors.name.type === "pattern" && (
        <p role="alert" className="error-message">{errors.name.message}</p>
      )}
      <FooterFormButton buttonText={"Send Message"}/>
    </form>
  );
}

export default function Footer() {
  return (
    <FooterConteiner className="footer" id="footer">
      <FooterForm />
      <FooterLogo logoSrc={"/footer-logo.png"} logoAlt={"MNM logo"}/>
      <FooterRights rightsText={" Minimal All rights reserved."} />
    </FooterConteiner>  
  );
}