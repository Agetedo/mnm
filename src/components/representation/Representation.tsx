import ConteinerWithBg from "../ConteinerWithBg";
import "./Representation.scss";

interface RepresentationContent {
  title: string;
  text: string;
}
function RepresentationContent({ content }: { content: RepresentationContent }) {
  return (
    <>
      <h1 className="title">{content.title}</h1>
      <hr className="line"/>
      <p className="text">{content.text}</p>
    </>
  );
}

export default function Representation() {
  return (
    <ConteinerWithBg className="representation" imageUrl={"/representation-bg.jpg"}>
      <RepresentationContent
        content={{ 
          title:"Making brands stand out is our obsession",
          text:"Let us help your brand stand out" 
        }} 
      />
    </ConteinerWithBg>
  );
}