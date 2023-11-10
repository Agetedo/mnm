import { Link } from "react-router-dom";
import './pageTitle.scss';
import PathConstants from "../../routes/pathConstants";
import pageTitleIcon from '/page-title-icon.svg';

export default function PageTitle({ pageTitleLink }) {
  return (
    <div className='procces-link'>
      <div className='conteiner'>
        <Link to={PathConstants.PROCESSPAGE} id="pageTitle">
          <img src={pageTitleIcon} alt='#'/>{pageTitleLink}
        </Link>
      </div>
    </div>
  );
}