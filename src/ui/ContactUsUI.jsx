/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import ContactUsForm from "../forms/ContactUsForm";

const OfficeDetails = ({ office }) => {
  const officeData = {
    dubai: {
      email: "info@epiidosisinvestments.com",
      phone: "+971 (04) 884 8644",
      address:
        "818, Park Lane Tower, Business Bay,415203,Dubai",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.482678850987!2d55.26850901549535!3d25.187607283902174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ad8b9cde8c3%3A0xc426e0d40297036d!2sEpiidosis%20Investments%20LLC!5e0!3m2!1sen!2sae",
    },
    india: {
      email: "info@epiidosisinvestments.com",
      phone: "+91 (120) 4015401",
      address:
        "1210, 2ND FLOOR, TOWER A, THE CORRENTHUM, SECTOR 62, NOIDA-201301",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.241263965979!2d78.96343261505283!3d20.593684986191605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf72b40587d27%3A0x5d0a210b670b6d53!2sIndia!5e0!3m2!1sen!2sin",
    },
  };

  const { email, phone, address, mapSrc } = officeData[office];

  return (
    <div className="px-10 lg:pl-20 mt-5">
      <p className="text-3xl font-bold mb-4 font-inria">
        Get A free consultation
      </p>
      <ul className="mb-4">
        <li className="flex items-center mb-4">
          <MdMail className="h-5 w-5 mr-4 text-3xl text-blue-500" />
          <span className="text-[#5F5D5E]"> {email}</span>
        </li>
        <li className="flex items-center mb-4">
          <MdPhone className="h-5 w-5 mr-4 text-3xl text-blue-500" />
          <span className="text-[#5F5D5E]"> {phone}</span>
        </li>
        <li className="flex items-center mb-4">
          <MdLocationOn className="h-5 w-5 mr-4 text-3xl text-blue-500" />
          <span className="text-[#5F5D5E]"> {address}</span>
        </li>
      </ul>
      <iframe
        title={`${office} Office Map`}
        src={mapSrc}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const ContactUsUI = () => {
  const [selectedOffice, setSelectedOffice] = useState("dubai");

  const handleOfficeChange = (office) => {
    setSelectedOffice(office);
  };

  return (
    <div className="bg-white shadow-md rounded-[50px]">
      <div className="flex justify-center mb-6">
        <nav className="flex space-x-4 relative">
          {/* Solid line below the entire nav */}
          <span className="absolute bottom-0 left-0 w-full bg-gray-300 h-1" />

          <button
            className={`px-4 py-2 transition-colors duration-300 text-xl ${
              selectedOffice === "dubai"
                ? "text-[#39A1DE] font-bold"
                : "text-gray-700 hover:text-[#39A1DE]"
            }`}
            onClick={() => handleOfficeChange("dubai")}
          >
            Dubai Office
          </button>
          <button
            className={`px-4 py-2 transition-colors duration-300 text-xl ${
              selectedOffice === "india"
                ? "text-[#39A1DE] font-bold"
                : "text-gray-700 hover:text-[#39A1DE]"
            }`}
            onClick={() => handleOfficeChange("india")}
          >
            India Office
          </button>
          {/* Dynamic position for the active indicator */}
          <span
            className={`!ml-0 absolute bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#339FDE] to-[#1C5678] h-1 transition-transform duration-300 ${
              selectedOffice === "india"
                ? "transform translate-x-full"
                : "transform translate-x-0"
            }`}
          />
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <OfficeDetails office={selectedOffice} />
        <div className="md:px-10 lg:pl-20 mt-5">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsUI;
