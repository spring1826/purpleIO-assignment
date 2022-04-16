import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import * as S from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <S.Wrapper>
      <div className="header__container">
        <Header />
      </div>
      <S.Container>{props.children}</S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
