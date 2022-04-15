import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import * as S from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
