import { Outlet } from "react-router-dom";
import Navbar from "../components/layoutsComponents/Navbar";
import { Footer } from "../components/layoutsComponents/Footer";
const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
