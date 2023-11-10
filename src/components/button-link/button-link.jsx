import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import './button-link.scss';

export default function ButtonLink({ caption }) {
    return (
        <div className="button-link">
            <div className="conteiner">
                <div className="button-link__caption">
                    <Link to={PathConstants.PROJECTSPAGE}>{caption}</Link>
                </div>
            </div>
        </div>
    );
}