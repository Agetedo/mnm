import "../proccesItems/ProccesItemsConteiner.scss";

interface ItemsContainerProps {
  className: string;
  children: React.ReactNode;
}

export default function ProccesItemsConteiner({ children, className }: ItemsContainerProps) {
  return (
    <div className={className}>
      <div className="procces-item__conteiner">{children}</div>
    </div>
  );
}