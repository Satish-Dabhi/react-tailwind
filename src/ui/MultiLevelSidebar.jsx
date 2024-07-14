import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  // ListItemPrefix,
  // ListItemSuffix,
  // Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import {
//   ChevronRightIcon,
//   ChevronDownIcon,
//   CubeTransparentIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-full w-full md:max-w-[20rem] rounded-none p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              {/* <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix> */}
              <Typography color="blue-gray" className="mr-auto font-normal">
                Support
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to={"/support"}>
                <ListItem>
                  {/* <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix> */}
                  FAQ
                </ListItem>
              </Link>
              <Link to={"/knowledge/base"}>
                <ListItem>
                  {/* <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix> */}
                  Knowledge Base
                </ListItem>
              </Link>
              <Link to={"/video/tutorial"}>
                <ListItem>
                  {/* <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix> */}
                  Video Tutorials
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              {/* <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix> */}
              <Typography color="blue-gray" className="mr-auto font-normal">
                Contact Support
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to={"/support/request/form"}>
                <ListItem className="ml-5">Support Request Form</ListItem>
              </Link>
              <Link to={"/live/chat"}>
                {" "}
                <ListItem className="ml-5">Live Chat</ListItem>{" "}
              </Link>
              <Link to={"/email/support"}>
                {" "}
                <ListItem className="ml-5">Emai Support</ListItem>
              </Link>
           
            </List>
          </AccordionBody>
        </Accordion>
        <Link to={'/technical/assistance'}>
        <ListItem>
          {/* <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix> */}
          Technical Assistance
          {/* <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix> */}
        </ListItem>
        </Link>
        <Link to={'/billing/payments'} >
        <ListItem>
          {/* <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix> */}
          Billing And Payments
        </ListItem>
        </Link>
        <Link to={'/emergency/support'}>
        <ListItem>
          {/* <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix> */}
          Emergency Support
        </ListItem>
        </Link>
      </List>
    </Card>
  );
}
