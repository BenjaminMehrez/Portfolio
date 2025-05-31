import BannerLanguage from "./Home/BannerLanguage";
import Footer from "./Navigation/Footer";
import NavBar from "./Navigation/NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <NavBar />
      <main>{children}</main>
      <BannerLanguage />
      <Footer />
    </div>
  );
};

export default Layout;
