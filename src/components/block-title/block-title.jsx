import './block-title.scss';

function Line() {
  return ( <><hr className="title__line" /></> );
}

export default function BlockTitle ({ title }) {
  return (
    <div className="title">
      <h2>{title}</h2>
      <Line />
    </div>  
  );
}