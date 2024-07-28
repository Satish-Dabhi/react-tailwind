import { Outlet } from "react-router-dom";
import { Footer } from "../components/layoutsComponents/Footer";
import Navbar from "../components/layoutsComponents/Navbar";
const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="pt-[226px] md:pt-[180px] lg:pt-[140px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
