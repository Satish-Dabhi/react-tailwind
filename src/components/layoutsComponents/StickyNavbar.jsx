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
    title: "Fundraising ",
    link: "/fundraising",
  },
  {
    title: "Asset Monetization",
    link: "/assetmonetization",
  },
  {
    title: "Loan Against Listed Stocks",
    link: "/loanagainststocks",
  },
  {
    title: "Investoers Relations",
    link: "/investorrelation",
  },
  {
    title: "Knowledge Center Section",
    link: "/knowledge",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, link }, key) => (
    <Link to={link} key={key}> 
      <MenuItem className="flex items-center gap-3 rounded-lg">
      
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
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
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to={"/"}>
        <Typography variant="small" color="blue-gray" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Typography>
      </Link>
      <Link to={'/aboutus'}>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
</Link>
<Link to={'/industryinsight'}>
      <Typography
       
       
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Industry Insights
        </ListItem>
      </Typography>
      </Link>

      <NavListMenu />
      <Link to={'/support'}>
      <Typography
       
       
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Support
        </ListItem>
      </Typography>
      </Link>
      <Link to={'/contactus'}>
      <Typography
        
      
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      </Link>

    </List>
  );
}

// eslint-disable-next-line react/prop-types, no-unused-vars
export function StickyNavbar({color}) {
  const [openNav, setOpenNav] = React.useState(false);
console.log(color)
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className={`mx-auto max-w-full px-4 py-2 bg-${color} rounded-none`}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <img alt="logo" src={companyLogo} />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="outlined" size="sm" color="#339FDE">
            Log In
          </Button>
          <Button size="sm" className="bg-primary">
            Sign In
          </Button>
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
          <Button variant="outlined" size="sm" color="#339FDE" fullWidth>
            Log In
          </Button>
          <Button className="bg-primary" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
