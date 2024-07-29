import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import companyLogo from "/logos/companyLogo.png";

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
  // {
  //   title: "Contact Us",
  //   link: "/contact-us",
  // },
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
    <NavLink
      to={link}
      key={key}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg cursor-pointer ${isActive ? 'text-blue-600' : 'text-gray-900'}`
      }
    >
      <MenuItem>
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
    </NavLink>
  ));

  return (
    <Menu
        open={isFundraisingOpen}
        handler={setIsFundraisingOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom-start"
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
  );
}


function OtherPagesMenu() {
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const renderItems = otherPagesMenuItems.map(({ title, link }, key) => (
    <NavLink
      to={link}
      key={key}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg cursor-pointer ${isActive ? 'text-blue-600' : 'text-gray-900'}`
      }
    >
      <MenuItem>
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
    </NavLink>
  ));

  return (
    <Menu
        open={isResourcesOpen}
        handler={setIsResourcesOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom-start"
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
  );
}


function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `font-inria flex items-center gap-2 py-2 pr-4 cursor-pointer text-xl ${isActive ? 'text-blue-600' : 'text-gray-900'}`
        }
      >
        {/* <Typography
          variant="small"
          color="blue-gray"
          className={({ isActive }) =>
            `font-inria font-bold ${isActive ? 'text-blue-600' : 'text-gray-900'}`
          }
        > */}
          Home
        {/* </Typography> */}
      </NavLink>
      <NavLink
        to={"/about-us"}
        className={({ isActive }) =>
          `font-inria flex items-center gap-2 py-2 pr-4 cursor-pointer text-xl ${isActive ? 'text-blue-600' : 'text-gray-900'}`
        }
      >
        {/* <Typography
          variant="small"
          color="blue-gray"
          className="font-medium font-inria"
        > */}
          About
        {/* </Typography> */}
      </NavLink>
      <NavLink
        to={"/invest-with-us"}
        className={({ isActive }) =>
          `font-inria flex items-center gap-2 py-2 pr-4 cursor-pointer text-xl ${isActive ? 'text-blue-600' : 'text-gray-900'}`
        }
      >
        {/* <Typography
          variant="small"
          color="blue-gray"
          className="font-medium font-inria"
        > */}
          Invest with Us
        {/* </Typography> */}
      </NavLink>
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
    <Navbar className={`p-0 mx-auto max-w-full bg-${color} rounded-none `}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <img alt="logo" src={companyLogo} className="w-[200px] lg:-ml-[15px]" />
          </Link>
          <div className="flex items-center">
            <div className="hidden lg:block mr-8">
              <NavList />
            </div>

            <div className="hidden gap-2 lg:flex">
              {/* <Link to={"/Login"}>
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
              </Link> */}
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
            {/* <Link to={"/Login"}>
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
            </Link> */}
            <Link to={"/contact-us"}>
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
                Contact Us
              </Button>
            </Link>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
}
