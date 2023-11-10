import './creation-stages.scss';
import { creationContent } from './creationData';

function Description ({ intro }) {
    return (
        <div className='intro__description'>
            <div className='intro__items'>
                <div className='overview'>
                    <span>{intro.title}</span>
                    <p>{intro.text}</p>
                </div>

                <div className='deliverables'>
                    <span>{intro.points}</span>
                    <ul className='deliverables__points'>
                      <li>{intro.item1}</li>
                      <li>{intro.item2}</li>
                      <li>{intro.item3}</li>
                  </ul>
                </div>
            </div>
        </div>
    );
}

function MediaContent() {
    const creationList = creationContent.map(intro => 
        <img key={intro.id} src={intro.imageSrc} alt={intro.imageAlt} />
    );   
    return ( <div className='media__container'>{creationList}</div> );
}

function VideoContent({ video, imageSrc, imageAlt }) {
    return (
        <>
          <video src={video.case}
              autoPlay="autoplay" loop="loop" preload="preload" muted="muted" className="fill-background">
              <img src={video.poster} className="fill-background" alt={video.posterAlt} />
          </video>
          <img src={imageSrc} alt={imageAlt} />
        </>
    );
}

export default function Creation() {
    return (
        <>
         <Description intro={{ title: 'Overview', 
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dicta laudantium iste ipsum illum quibusdam inventore dolore consequatur, autem necessitatibus recusandae, expedita quisquam, labore id animi omnis alias provident tempore. Sor ipdolor sit amet consectetur adipisicing elit. Eligendi dicta laudantium iste ipsum illum quibusdam inventore dolore consequatur, autem necessitatibus recusandae, expedita quisquam, labore id animi omnis alias provident tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iste ipsum illum quibusdam inventore dolore consequatur, autem.',
            points: 'Deliverables', item1: 'Brand Strategy \& Architecture',
            item2: 'Design Systems', item3: 'Design Language', }} />
         <MediaContent />
         <VideoContent video={{ case: '/ourglass-case.mp4', poster:'/video-poster-fallback.jpg',
            posterAlt: 'Video is not available for viewing',}} 
            imageSrc={'/creation-image-08.jpg'} imageAlt={'App on phone'} />
        </>
    );
}