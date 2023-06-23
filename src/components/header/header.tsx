import { HeaderContainer, HeaderH1 } from "./style-header";

export function Header() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <HeaderH1 onClick={handleScrollToTop}>App Masters Games</HeaderH1>
    </HeaderContainer>
  );
}