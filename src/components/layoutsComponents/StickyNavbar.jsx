import React from "react";
import companyLogo from "/logos/companyLogo.png";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Structured Finance",
    link: "/structured-finance",
  },
  {
    title: "Asset Monetization",
    link: "/asset-monetization",
  },
  {
    title: "Loan Against Listed Stocks",
    link: "/loan-against-listed-stocks",
  },
];

const otherPagesMenuItems = [
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms Of Services",
    link: "/terms-of-services",
  },
];

function NavListMenu() {
  const [isFundraisingOpen, setIsFundraisingOpen] = React.useState(false);

  const toggleFundraisingMenu = () => {
    setIsFundraisingOpen(!isFundraisingOpen);
  };

  const renderItems = navListMenuItems.map(({ title, link }, key) => (
    <Link to={link} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg hover:text-blue-600 cursor-pointer">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold font-inria text-xl"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isFundraisingOpen}
        handler={setIsFundraisingOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom-start" // Adjust placement here
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium font-inria"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:text-blue-600 cursor-pointer text-xl"
              selected={isFundraisingOpen}
              onClick={toggleFundraisingMenu}
            >
              Funding Solutions
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isFundraisingOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className={`absolute bg-white shadow-lg mt-1 w-full lg:w-auto lg:block`}
          style={{ borderRadius: "8px" }}
        >
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0 p-4">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

function OtherPagesMenu() {
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const renderItems = otherPagesMenuItems.map(({ title, link }, key) => (
    <Link to={link} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg hover:text-blue-600 cursor-pointer">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold font-inria text-xl"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isResourcesOpen}
        handler={setIsResourcesOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom-start" // Adjust placement here
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium font-inria"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:text-blue-600 cursor-pointer text-xl"
              selected={isResourcesOpen}
              onClick={toggleResourcesMenu}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isResourcesOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className={`absolute bg-white shadow-lg mt-1 w-full lg:w-auto lg:block`}
          style={{ borderRadius: "8px" }}
        >
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0 p-4">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to={"/"}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-inria font-bold"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-blue-600 cursor-pointer text-xl">
            Home
          </ListItem>
        </Typography>
      </Link>
      <Link to={"/about-us"}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium font-inria"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-blue-600 cursor-pointer text-xl">
            About
          </ListItem>
        </Typography>
      </Link>
      <Link to={"/invest-with-us"}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium font-inria"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-blue-600 cursor-pointer text-xl">
            Invest with Us
          </ListItem>
        </Typography>
      </Link>
      <NavListMenu />
      <OtherPagesMenu />
    </List>
  );
}

// eslint-disable-next-line react/prop-types, no-unused-vars
export function StickyNavbar({ color }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className={`p-0 mx-auto max-w-full bg-${color} rounded-none `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <img alt="logo" src={companyLogo} className="w-[256px]"/>
          </Link>
          <div className="flex">
            <div className="hidden lg:block mr-8">
              <NavList />
            </div>

            <div className="hidden gap-2 lg:flex">
              <Link to={"/Login"}>
                <Button
                  size="sm"
                  className="hover:bg-[#1E8DCD]-600 hover:text-white transition duration-300 font-inria font-normal text-lg px-10"
                  style={{
                    background: "white",
                    color: "#1E8DCD",
                    border: "1px solid #1E8DCD",
                    borderRadius: "0",
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link to={"/contact-us"}>
                <Button
                  size="sm"
                  className="hover:bg-[#1E8DCD]-600 hover:text-white transition duration-300 font-inria font-normal text-lg px-10"
                  style={{
                    background:
                      "linear-gradient(104.32deg, #339FDE 3.51%, #1C5678 90.88%)",
                    borderRadius: "0",
                    textTransform: "none",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link to={"/Login"}>
              <Button
                size="sm"
                className="hover:bg-[#1E8DCD]-600 hover:text-white transition duration-300 font-inria font-normal"
                style={{
                  background: "white",
                  color: "blue",
                  border: "1px solid #1E8DCD",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.25rem",
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            </Link>
            <Link to={"/SignUp"}>
              <Button
                size="sm"
                className="hover:bg-[#1E8DCD]-600 hover:text-white transition duration-300 font-inria font-normal"
                style={{
                  background:
                    "linear-gradient(104.32deg, #339FDE 3.51%, #1C5678 90.88%)",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.25rem",
                  textTransform: "none",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
}
