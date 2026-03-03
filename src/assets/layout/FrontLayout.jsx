import { Outlet } from "react-router";
import Header from "../pages/front/Header";
import Footer from "../pages/front/Footer";

function FrontLayout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default FrontLayout;
