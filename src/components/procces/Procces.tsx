import { Link } from "react-router-dom";
import Conteiner from "../Conteiner.tsx";
import { cardLinks } from "./cardLinks.ts";
import BlockTitle from "../blockTitle/BlockTitle.tsx";
import "./Procces.scss";

function ProccesCard() {
  const cardList = cardLinks.map( link =>
    <div key={link.id} className="procces__card">
      <Link to={link.imageLink}><img src={link.imageSrc} alt="#"/></Link>
      <h3>{link.caption}</h3>
      <p className="procces__text">
        <Link to={link.textLink}>{link.text}</Link>
      </p>
    </div>
  );   
  return <div className="procces__items">{cardList}</div>
}

export default function Procces() {
  return (
    <Conteiner className="procces">
      <BlockTitle title={"How we make brands thrive"}/>
      <ProccesCard />
    </Conteiner>
  );
}