import "..//styles/ConteinerWithBg.scss";

interface ContainerBgProps {
  className: string;
  imageUrl: string;
  children?: React.ReactNode;
}

export default function ConteinerWithBg({ className, imageUrl, children }: ContainerBgProps) {
  return (
    <div className={className} style={{ backgroundImage: `url("${imageUrl}")` }}>
      <div className="conteiner">{children}</div>
    </div>
  );
}