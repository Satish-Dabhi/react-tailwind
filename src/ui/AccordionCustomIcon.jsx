/* eslint-disable react/prop-types */
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={` mr-5 ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// eslint-disable-next-line no-unused-vars
export function AccordionCustomIcon({ data }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  console.log(open);
  const accordion = data.map((items, index) => {
    console.log(index);

    return (
      <div key={index}>
        <Accordion
       
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`mt-5 ${open === index + 1 ? "bg-primary text-white" : "bg-bgprimary text-black"}`}
          >
            <span   className={`ml-5 font-inria  ${open === index + 1 ? " text-white" : " text-black"}`} > {items?.title}</span>
          </AccordionHeader>
          <AccordionBody className="font-inter">{items?.content}</AccordionBody>
        </Accordion>
      </div>
    );
  });

  return <div className="p-5">{accordion}</div>;
}
