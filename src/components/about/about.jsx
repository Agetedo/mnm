import './about.scss';

function DifferenceTitle ({ title }) {
  return ( <><h3 className="difference__title">{title}</h3></> );
}

function DifferenceItems ({ content }) {
  return (
    <div className="difference__items">
      <div className="difference__text">
        <p>{content.text1}</p><p>{content.text2}</p>
        <p>{content.text3}</p><p>{content.text4}</p>
        <p>{content.text5}</p><p>{content.text6}</p>
        <p>{content.text7}</p>
      </div>
     <img src={content.image} alt={content.alt} />
    </div>
  );
}
  
export default function About() {
  return (
    <div className="difference">
      <div className="conteiner">
        <DifferenceTitle title={'Make a Difference For Your Business!'} />
        <DifferenceItems  
        content={{ text1: "We understand that not every company has an in-house department that is always updated and tracks the algorithms, trends, and changes within digital marketing, but we strongly believe every company should have somebody to do so!",
        text2: "Therefore, we started MINIMAL agency – to offer companies solutions that are completely customized to fit their business needs and goals.",
        text3: "We tailor high-performing marketing strategies intended to serve and benefit Your company long term.",
        text4: "MINIMAL is full-service digital creative agency with a highly motivated team.",
        text5: "Most of us have profound hands-on experience working with and for Google and Google Ads directly. Our marketing masters also have experience with Facebook Ads and SEO.", 
        text6: "Our team lives and breathes innovative, quick, and smart digital marketing solutions. We want to help as many businesses as possible to find new potential customers, reengage with old ones to reach far beyond growth expectations.", 
        text7: "Book a meeting with us today, free of charge, and we\'ll talk about how we can implement a thorough and solid marketing strategy.",
        image: "/mnm-about-image01.jpg",
        alt: "Desk with laptop and office supplies", }} />
      </div>
    </div>
  );
}