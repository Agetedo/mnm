import { clientsLogos } from "./clientsLogos.ts";
import "./Clientage.scss";

interface ClientsContainerProps {
  className: string;
  children: React.ReactNode;
}
function ClientsConteiner({ children, className }: ClientsContainerProps) {
  return (
    <div className={className}>
      <div className="clients__conteiner">{children}</div>
    </div>
  );
}

function ClientsTitle({ title }: { title:string }) {
  return ( <><h2 className="clients__title">{title}</h2></> );
}

function ClientsCards() {
  const clientsList = clientsLogos.map( logo =>
    <li key={logo.id} className="client__logo">
      <img src={logo.imageSrc} alt={logo.imageAlt}/>
    </li>
  );  
  return <ul className="clients__list">{clientsList}</ul>
}

export default function Clientage() {
  return (
    <ClientsConteiner className="clients">
      <ClientsTitle title={"Our Clients and Partners"} />
      <ClientsCards />
    </ClientsConteiner>
  );
}