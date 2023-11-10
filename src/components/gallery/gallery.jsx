import './gallery.scss';
import { galleryCards } from './galleryData';
import BlockTitle from '../block-title/block-title';

function GalleryProject() {
   
    const galleryList = galleryCards.map(card =>
        <div key={card.id} className="gallery-project">
            <a href={card.imageLink}><img src={card.imageSrc} alt={card.caption} /></a>
            <div className="project-caption">
                <h3><a href={card.captionLink} className="caption-link">{card.caption}</a></h3>
                <p>{card.projectKind}</p>
            </div>
        </div>
    ); 
    return <div className="gallery-items">{galleryList}</div>
}

export default function Gallery() {
    return (
        <div className="gallery">
            <div className="conteiner">
                <BlockTitle title={'Recent projects'}/>
                <GalleryProject />
            </div>
        </div>
    );
}