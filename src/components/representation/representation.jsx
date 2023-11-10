import './representation.scss';

function RepresentationContent({ content }) {
  return (
    <div className="conteiner">
      <h1 className="title">{content.title}</h1>
      <hr className="line"/>
      <p className="text">{content.text}</p>
    </div>
  );
}

export default function Representation() {
  return (
    <div className="representation">
      <RepresentationContent
      content={{ title:'Making brands stand out is our obsession',
      text:'Let us help your brand stand out' }} />
    </div>
  );
}