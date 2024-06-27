import { Link } from "react-router-dom";
import "../App.scss";

interface NotFound {
  error: string;
  title: string;
  text: string;
  linkTo: string;
}

export default function Page404({ error, title, text, linkTo }: NotFound ) {
  return (
    <div id="notFound">
      <span className="error">{error}</span>
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
      <Link to="/" id="backToHome">{linkTo}</Link>
    </div>
  );
}