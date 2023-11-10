import { itemsContent } from "./itemsData";
import './proccesItem.scss';

export default function DesignItem() {
    const design = itemsContent.filter(item =>
        item.caption === 'Design a solution'
    );

    const designList = design.map(item =>
        <div key={item.id} className="procces__content">
            <img src={item.imageSrc} alt={item.imageAlt}/>
            <h2>{item.caption}</h2>
            <p>{item.text}</p>
            <p>{item.text}</p>
            <p>{item.text}</p>
        </div>
    );
   
    return (
       <div className="procces__item">
            <div className="conteiner">{designList}</div>
       </div>
    );
}