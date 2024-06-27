import { Link } from "react-router-dom";
import Conteiner from "../Conteiner.tsx";
import { galleryCards } from "./galleryCards.ts";
import BlockTitle from "../blockTitle/BlockTitle.tsx";
import "./Gallery.scss";

function GalleryProject() {
  const galleryList = galleryCards.map( card =>
    <div key={card.id} className="gallery-project">
      <Link to={card.imageLink}>
        <img src={card.imageSrc} alt={card.caption} />
      </Link>
      <div className="project-caption">
        <h3 className="title">
          <Link to={card.captionLink} className="caption-link">
            {card.caption}
          </Link>
        </h3>
        <p>{card.projectKind}</p>
      </div>
    </div>
  ); 
  return <div className="gallery-items">{galleryList}</div>
}

export default function Gallery() {
  return (
    <Conteiner className="gallery">
      <BlockTitle title={"Recent projects"}/>
      <GalleryProject />
    </Conteiner>
  );
}