import ProccesItemsConteiner from "./ProccesItemsConteiner.tsx";
import { itemsContent } from "./itemsContent.ts";
import "./ProccesItems.scss";

export default function TargetItem() {
  const target = itemsContent.filter( item =>
    item.caption === "Set a target"
  );

  const targetList = target.map( item =>
    <div key={item.id} className="procces__content">
      <img src={item.imageSrc} alt={item.imageAlt}/>
      <h2>{item.caption}</h2>
      <p>{item.text}</p>
      <p>{item.text}</p>
      <p>{item.text}</p>
    </div>
  );
   
  return (
    <ProccesItemsConteiner className="procces-item">
      {targetList}
    </ProccesItemsConteiner>
  );
}