import BlockTitle from '../block-title/block-title';
import './contact.scss';
import { socials } from './socialData.js';

function ContactAddress({ imageLink, addressIcon, caption, adress }) {
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

function ContactEmail({ imageLink, emailIcon, caption, emailAdress, text1, text2 }) {
    return (
        <div className="contact-email">
            <a href={imageLink} target="_blank" rel="noreferrer">
                <img src={emailIcon} alt="#" />
                <h3 className="contact-caption">{caption}</h3>
            </a>
            <div className="email-adress">
                {emailAdress}
                <span>{text1}<br />{text2}</span>
            </div>
        </div>  
    );
}

function SocialLink() {
    const socialList = socials.map(agent =>
        <a key={agent.id} href={agent.socialLink} target="_blank" rel="noreferrer" className="social-link">
            <img src={agent.iconSrc} alt="#" />
            <span>{agent.socialName}</span>
        </a> 
    );
    return <>{socialList}</>
}

function ContactSocial({ iconSrc, caption, children }) {
    return (
        <div className="contact-social">
            <img src={iconSrc} alt="#" />
            <h3 className="contact-caption">{caption}</h3>
            {children}
        </div>
    );
}

export default function Contact() {
    return (
        <div className="contact">
            <div className="conteiner" id='contactTitle'>
                <BlockTitle title={'Let\'s get in touch'}/>

                <div className="contact-items">
                    <ContactAddress imageLink={'https://goo.gl/maps/YL6c'}
                    addressIcon={'/address-icon.png'} caption={'MEET US IN PERSON'}
                    adress={'8776 Juniper Street Unit #204 Merriweather, Ontorio Canada'}/>
    
                    <ContactEmail imageLink={'mailto:contact@minimal.com'} 
                    emailIcon={'/post-icon.png'} caption={'The traditional way'}
                    emailAdress={'Email us contact@minimal.com'}
                    text1={'Contact form'} text2={'Scroll down'}/>

                    <ContactSocial iconSrc={'/like-icon.png'} caption={'Let\'s get social'}>
                        <SocialLink />
                    </ContactSocial >
                </div>

            </div>
        </div>
    );
}