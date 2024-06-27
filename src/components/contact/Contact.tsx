import ConteinerWithBg from "../ConteinerWithBg.tsx";
import BlockTitle from "../blockTitle/BlockTitle.tsx";
import { socials } from "./socials.ts";
import "./Contact.scss";

interface ContactAddressProps {
  imageLink: string;
  addressIcon: string; 
  caption: string;
  adress: string;
}
function ContactAddress({ imageLink, addressIcon, caption, adress }: ContactAddressProps) {
  return (
    <div className="contact-address">
      <a href={imageLink} target="_blank" rel="noreferrer">
        <img src={addressIcon} alt="#" />
        <h3 className="contact-caption">{caption}</h3>
      </a>
      <p className="contact-text">{adress}</p>
    </div> 
  );
}

interface ContactEmailProps {
  imageLink: string; 
  emailIcon: string; 
  caption: string;
  emailAdress: string;
  text1: string;
  text2: string;
}
function ContactEmail(
  { imageLink, 
    emailIcon, 
    caption, 
    emailAdress, 
    text1, 
    text2 
  }: ContactEmailProps) {
  return (
    <div className="contact-email">
      <a href={imageLink} target="_blank" rel="noreferrer">
        <img src={emailIcon} alt="#" />
        <h3 className="contact-caption">{caption}</h3>
      </a>
      <div className="email-adress">
        {emailAdress}
        <a href="#footer" id="contactFormScroll">
          <span>{text1}<br />{text2}</span>
        </a>
      </div>
    </div>  
  );
}

function SocialLink() {
  const socialList = socials.map( agent =>
    <a key={agent.id} href={agent.socialLink} target="_blank" rel="noreferrer" className="social-link">
      <img src={agent.iconSrc} alt="#" />
      <span>{agent.socialName}</span>
    </a> 
  );
  return <>{socialList}</>
}

interface ContactSocialProps {
  iconSrc:string;
  caption: string;
  children: React.ReactNode;
}
function ContactSocial({ children, iconSrc, caption }: ContactSocialProps) {
  return (
    <div className="contact-social">
      <img src={iconSrc} alt="#" />
      <h3 className="contact-caption">{caption}</h3>
      {children}
    </div>
  );
}

function ContactItems({ children }: { children: React.ReactNode }) {
  return(
    <div className="contact-items">
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <ConteinerWithBg className="contact" imageUrl={"../contact-bg.jpg"}>
      <BlockTitle title={"Let's get in touch"}/>

      <ContactItems>
        <ContactAddress 
          imageLink={"https://goo.gl/maps/YL6c"}
          addressIcon={"/address-icon.png"} 
          caption={"MEET US IN PERSON"}
          adress={"8776 Juniper Street Unit #204 Merriweather, Ontorio Canada"}
        />
    
        <ContactEmail 
          imageLink={"mailto:contact@minimal.com"} 
          emailIcon={"/post-icon.png"} 
          caption={"The traditional way"}
          emailAdress={"Email us contact@minimal.com"}
          text1={"Contact form"} text2={"scroll down"}
        />

        <ContactSocial iconSrc={"/like-icon.png"} caption={"Let's get social"}>
          <SocialLink />
        </ContactSocial >

      </ContactItems>
    </ConteinerWithBg>
  );
}