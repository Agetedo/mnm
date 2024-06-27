import { Link } from "react-router-dom";
import Conteiner from "../Conteiner";
import PathConstants from "../../routes/pathConstants";
import "./ButtonLink.scss";

export default function ButtonLink({ caption }: { caption:string }) {
  return (
    <Conteiner className="button-link">
      <div className="button-link__caption">
        <Link to={PathConstants.PROJECTSPAGE}>{caption}</Link>
      </div>
    </Conteiner>
  );
}