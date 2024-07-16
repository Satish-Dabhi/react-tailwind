/* eslint-disable react/prop-types */

import React from "react";
import ContactUs from "../components/home/ContactUs";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//     </svg>
//   );
// }

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
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
const data = [
  {
    Department: "Administration",
    Email: [
      "admin@epiidosisinvestments.com",
      "admin.india@epiidosisinvestments.com",
    ],
  },
  {
    Department: "HR Department",
    Email: ["hr@epiidosisinvestments.com"],
  },
  {
    Department: "Business Development",
    Email: [
      "associates@epiidosisinvestments.com",
      "brokers@epiidosisinvestments.com",
      "bdindia@epiidosisinvestments.com",
    ],
  },
  {
    Department: "Billing and Accounts",
    Email: [
      "billing@epiidosisinvestments.com",
      "accounts@epiidosisinvestments.com",
    ],
  },
  {
    Department: "Career and Recruitment",
    Email: ["career@epiidosisinvestments.com"],
  },
  {
    Department: "Customer Support",
    Email: ["support@epiidosisinvestments.com"],
  },
  {
    Department: "IT and Technical Support",
    Email: [
      "devsupport@epiidosisinvestments.com",
      "webadmin@epiidosisinvestments.com",
    ],
  },
  {
    Department: "Managing Director",
    Email: ["md@epiidosisinvestments.com"],
  },
  {
    Department: "Token Services",
    Email: ["epiitoken@epiidosisinvestments.com"],
  },
  {
    Department: "Sales and Deals",
    Email: ["deals@epiidosisinvestments.com"],
  },
  {
    Department: "General Business Inquiries",
    Email: ["business@epiidosisinvestments.com"],
  },
  {
    Department: "Legal Department",
    Email: ["legal@epiidosisinvestments.com"],
  },
];

// const renderData = data.map((item,index)=>{
//   // const [open, setOpen] = useState(0);

//   // const handleOpen = (value) => setOpen(open === value ? 0 : value);
//   console.log(item)
//   return(
// <section key={index}>
//   hello
// </section>

//   )
// })

// const renderGridData = data.map((item, index) => {
//   const emails = item.Email.map((email, idx) => (
//     <Typography
//       key={idx}
//       variant="small"
//       className="text-center font-normal text-blue-gray-900 md:mb-0 flex items-center gap-1"
//     >
//       <span className="text-sm font-inria flex gap-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="#339FDE"
//           className="w-8 h-8"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
//           />
//         </svg>
//         {email}
//       </span>
//     </Typography>
//   ));

//   return (
//     <section key={index}>
//       <section className="grid md:grid-cols-2 items-start mt-5">
//         <div className="flex items-center justify-center ">
//           <p className="text-sm font-medium font-inria">{item.Department}</p>
//         </div>
//         <div className="flex flex-col text-xs">{emails}</div>
//       </section>
//     </section>
//   );
// });

const ContactUsUI = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const renderData2 = data.map((item, index) => {
    console.log(item);
    const accordionDesc = item?.Email.map((email, index) => {
      return <div key={index} className="text-lg font-inter font-semibold">{email}</div>;
    });
    return (
      <section key={index} className="w-[20rem] ">
        <Accordion
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open}  />}
        >
          <AccordionHeader onClick={() => handleOpen(index + 1)}>
            {item?.Department}
          </AccordionHeader>
          <AccordionBody>{accordionDesc}</AccordionBody>
        </Accordion>
      </section>
    );
  });
  return (
    <>
      <div className="bg-bgcream w-full p-10">
        <div className="">
          <p className="mt-2  mb-5 font-inter text-center">
            Connect with Epiidosis Investments LLC. Reach out to our dedicated team for personalized assistance, inquiries about our services, or to explore collaboration opportunities.
          </p>
        </div>
        <div className="grid justify-items-center">
          <div className="mt-5 md:mt-5 md:mb-12 md:w-[70%] ">
            <ContactUs />
          </div>
        </div>
        <div>
          {/* <p className="mt-5 text-xl font-inter">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-600 mt-2 font-inter ">
            Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis
            ultrices venenatis. In pulvinar et senectus non eu. I.
          </p> */}
          <div className="grid md:grid-cols-3 justify-items-center">{renderData2}</div>
        </div>
      </div>

      <section className="container mx-auto mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-center">
        <div>
        <iframe 
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.482678850987!2d55.26850901549535!3d25.187607283902174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ad8b9cde8c3%3A0xc426e0d40297036d!2sEpiidosis%20Investments%20LLC!5e0!3m2!1sen!2sae!4v1647849017922!5m2!1sen!2sae" 
        width="500" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
      </div>
        <div className="grid justify-center mt-10">
          <div className="font-inter">
            <p className="text-lg mb-5">Dubai Office:</p>
            <ul>
              <ol>Epiidosis Investments LLC</ol>
              <ol>
                Address: 818, Park Lane Tower, Business Bay, Dubai – 415203,
                United Arab Emirates
              </ol>
              <ol>Email: info@epiidosisinvestments.com </ol>
              <ol>Phone: +971–04–884-8644</ol>
            </ul>
          </div>
          <div className="font-inter">
            <p className="text-lg mb-5">India Office::</p>
            <ul>
              <ol>Epiidosis India Pvt. Ltd.</ol>
              <ol>
                Address: 1210, 2nd Floor, The Correnthum, Sector – 62, Noida –
                201301, India.
              </ol>
              <ol>Email: info@epiidosisindia.com </ol>
              <ol>Phone: +91-120-40-15401</ol>
            </ul>
          </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default ContactUsUI;
