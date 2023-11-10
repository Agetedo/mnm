import { clientsLogos } from "./clientsData";
import './clientage.scss';

function ClientsTitle({ title }) {
    return ( <><h2 className="client__title">{title}</h2></> );
}

function ClientItem() {
    const clientsList = clientsLogos.map(logo =>
        <div key={logo.id} className="client__card">
            <img src={logo.imageSrc} alt={logo.imageAlt}/>
        </div>
    );   
    return <div className="clients__item">{clientsList}</div>
}

export default function Clientage() {
    return (
        <div className="clients__content">
            <div className="conteiner">
                <ClientsTitle title={'Our Clients and Partners'} />
                <ClientItem />
            </div>
        </div>
    );
}