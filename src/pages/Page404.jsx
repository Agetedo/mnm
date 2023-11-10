import { Link } from "react-router-dom";
import '../App.scss';

export default function Page404() {
    return (
        <div className="page-404">
            <span>404</span>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist</p>
            <Link to="/" className={"back-to-home"}>Back to Home</Link>
        </div>
    );
}