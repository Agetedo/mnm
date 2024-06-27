import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import pageTitleIcon from "/page-title-icon.svg";
import "./PageTitle.scss";

interface PageTitleProps {
  className: string;
  children?: React.ReactNode;
}
function PageTitleConteiner({ children, className }: PageTitleProps) {
  return (
    <div className={className}>
      <div className="procces-link__conteiner">{children}</div>
    </div>
  );
}

export default function PageTitle({ pageTitleLink }: { pageTitleLink: string }) {
  return (
    <PageTitleConteiner className="procces-link">
      <Link to={PathConstants.PROCESSPAGE} id="pageTitle">
        <img src={pageTitleIcon} alt="#"/>{pageTitleLink}
      </Link>
    </PageTitleConteiner>
  );
}