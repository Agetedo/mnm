import { Link } from "react-router-dom";
import './procces.scss';
import { cardLinks } from './cardData';
import BlockTitle from '../block-title/block-title';

function ProccesCard() {
   
    const cardList = cardLinks.map(link =>
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
        <div className="procces">
            <div className="conteiner">
                <BlockTitle title={'How we make brands thrive'}/>
                <ProccesCard />
            </div>
        </div>
    );
}