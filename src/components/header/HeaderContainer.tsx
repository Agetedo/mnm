import "../header/HeaderContainer.scss";

interface HeaderContainerProps {
  className: string;
  children: JSX.Element;
}

export default function HeaderConteiner({ children, className }: HeaderContainerProps) {
  return (
    <header className={className}>
      <div className="header__conteiner">{children}</div>
    </header>
  );
}