import "../footer/FooterConteiner.scss";

interface FooterContainerProps {
  className: string;
  id?: string;
  children: React.ReactNode;
}

export default function FooterConteiner({ children, className, id }: FooterContainerProps) {
  return (
    <footer className={className} id={id}>
      <div className="footer__conteiner">{children}</div>
    </footer>
  );
}