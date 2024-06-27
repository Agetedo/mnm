import "..//styles/Conteiner.scss";

interface ContainerProps {
  className: string;
  children?: React.ReactNode;
}

export default function Conteiner({ children, className }: ContainerProps) {
  return (
    <div className={className}>
      <div className="conteiner">{children}</div>
    </div>
  );
}