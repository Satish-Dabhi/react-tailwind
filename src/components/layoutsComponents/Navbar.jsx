/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { StickyNavbar } from "./StickyNavbar";
import SubNavbar from "./SubNavbar";

const Navbar = ({ color }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-main-block ${scrolled ? "scrolled" : ""}`}>
      <SubNavbar color={color} />
      <StickyNavbar color={color} />
    </div>
  );
};

export default Navbar;
