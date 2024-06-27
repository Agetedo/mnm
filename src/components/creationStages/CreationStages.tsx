import ReactPlayer from "react-player";
import { creationContent } from "./creationContent.ts";
import "./CreationStages.scss";

interface DescriptionContent {
  title: string;
  text: string;
  points: string;
  item1: string;
  item2: string;
  item3: string;
}
function Description ({ intro }: { intro: DescriptionContent }) {
  return (
    <div className="intro__description">
      <div className="intro__items">
        <div className="overview">
          <span>{intro.title}</span>
          <p>{intro.text}</p>
        </div>

        <div className="deliverables">
          <span>{intro.points}</span>
          <ul className="deliverables__points">
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
  const creationList = creationContent.map( intro => 
    <img key={intro.id} src={intro.imageSrc} alt={intro.imageAlt} />
  );   
  return ( <div className="media__container">{creationList}</div> );
}

interface VideoContentProps {
  video: string;
  imageSrc: string;
  imageAlt: string;
}
function VideoContent({ play }: { play: VideoContentProps }) {
  return (
    <>
      <ReactPlayer className="fill-background"
        url={play.video}
        playing={true} loop={true} muted={true} 
        width="100%" height="100%"
      />
      <img src={play.imageSrc} alt={play.imageAlt} />
    </>
  );
}

export default function Creation() {
  return (
    <>
      <Description 
        intro={{ 
          title: "Overview", 
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dicta laudantium iste ipsum illum quibusdam inventore dolore consequatur, autem necessitatibus recusandae, expedita quisquam, labore id animi omnis alias provident tempore. Sor ipdolor sit amet consectetur adipisicing elit. Eligendi dicta laudantium iste ipsum illum quibusdam inventore dolore consequatur, autem necessitatibus recusandae, expedita quisquam, labore id animi omnis alias provident tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iste ipsum illum quibusdam inventore dolore consequatur autem.",
          points: "Deliverables", item1: "Brand Strategy & Architecture",
          item2: "Design Systems", item3: "Design Language", 
        }} 
      />
      <MediaContent />
      <VideoContent 
        play={{
          video: "/ourglass-case.mp4",
          imageSrc: "/creation-image-08.jpg", imageAlt: "App on phone",
        }}
      />
    </>
  );
}