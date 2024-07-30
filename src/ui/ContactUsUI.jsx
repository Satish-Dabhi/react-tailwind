/* eslint-disable react/prop-types */
import { useState } from "react";
import ContactUsForm from "../forms/ContactUsForm";

const OfficeDetails = ({ office }) => {
  const officeData = {
    dubai: {
      email: "info@epiidosisinvestments.com",
      phone: "+971 (04) 884 8644",
      address: "818, Park Lane Tower, Business Bay,415203,Dubai",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28884.310132672523!2d55.25359281654428!3d25.185047260295335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s818%2C%20Park%20Lane%20Tower%2C%20Business%20Bay%2C415203%2CDubai!5e0!3m2!1sen!2sin!4v1722323750353!5m2!1sen!2sin",
    },
    india: {
      email: "info@epiidosisinvestments.com",
      phone: "+91 (120) 4015401",
      address:
        "1210, 2ND FLOOR, TOWER A, THE CORRENTHUM, SECTOR 62, NOIDA-201301",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3502.0957406105267!2d77.37135947450979!3d28.626892534338584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1210%2C%202ND%20FLOOR%2C%20TOWER%20A%2C%20THE%20CORRENTHUM%2C%20SECTOR%2062%2C%20NOIDA-201301!5e0!3m2!1sen!2sin!4v1722323893133!5m2!1sen!2sin",
    },
  };

  const { email, phone, address, mapSrc } = officeData[office];

  return (
    <div className=" mt-5">
      <p className="text-3xl font-bold mb-4 font-inria">Connect with Us</p>
      <ul className="mb-4 w-[80%]">
        <li className="flex items-center mb-4">
          <svg
            className="w-6 flex-shrink-0"
            viewBox="0 0 41 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.1 33.9766C2.9725 33.9766 2.00763 33.573 1.2054 32.7659C0.403167 31.9587 0.00136667 30.9873 0 29.8516V5.10156C0 3.96719 0.4018 2.99644 1.2054 2.18931C2.009 1.38219 2.97387 0.977937 4.1 0.976562H36.9C38.0275 0.976562 38.993 1.38081 39.7966 2.18931C40.6002 2.99781 41.0014 3.96856 41 5.10156V29.8516C41 30.9859 40.5989 31.9574 39.7966 32.7659C38.9944 33.5744 38.0289 33.9779 36.9 33.9766H4.1ZM20.5 19.5391L36.9 9.22656V5.10156L20.5 15.4141L4.1 5.10156V9.22656L20.5 19.5391Z"
              fill="#339FDE"
            />
          </svg>

          <span className="text-[#5F5D5E] ml-3"> {email}</span>
        </li>
        <li className="flex items-center mb-4">
          <svg
            className="w-6 flex-shrink-0"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.64222 17.4221C10.6822 23.3966 15.58 28.2732 21.5544 31.3343L26.1989 26.6899C26.7689 26.1199 27.6133 25.9299 28.3522 26.1832C30.7167 26.9643 33.2711 27.3866 35.8889 27.3866C37.05 27.3866 38 28.3366 38 29.4977V36.8655C38 38.0266 37.05 38.9766 35.8889 38.9766C16.0656 38.9766 0 22.911 0 3.08767C0 1.92656 0.95 0.976562 2.11111 0.976562H9.5C10.6611 0.976562 11.6111 1.92656 11.6111 3.08767C11.6111 5.72656 12.0333 8.2599 12.8144 10.6243C13.0467 11.3632 12.8778 12.1866 12.2867 12.7777L7.64222 17.4221Z"
              fill="#339FDE"
            />
          </svg>

          <span className="text-[#5F5D5E] ml-3"> {phone}</span>
        </li>
        <li className="flex items-center mb-4">
          <svg
            className="w-6 flex-shrink-0"
            viewBox="0 0 37 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 26.1516C16.7477 26.1516 15.0671 25.4536 13.828 24.2111C12.589 22.9687 11.8929 21.2836 11.8929 19.5266C11.8929 17.7695 12.589 16.0844 13.828 14.842C15.0671 13.5996 16.7477 12.9016 18.5 12.9016C20.2523 12.9016 21.9329 13.5996 23.172 14.842C24.411 16.0844 25.1071 17.7695 25.1071 19.5266C25.1071 20.3966 24.9362 21.2581 24.6042 22.0618C24.2722 22.8656 23.7855 23.596 23.172 24.2111C22.5584 24.8263 21.8301 25.3143 21.0284 25.6473C20.2268 25.9802 19.3677 26.1516 18.5 26.1516ZM18.5 0.976562C13.5935 0.976562 8.88795 2.93093 5.41852 6.40973C1.9491 9.88853 0 14.6068 0 19.5266C0 33.4391 18.5 53.9766 18.5 53.9766C18.5 53.9766 37 33.4391 37 19.5266C37 14.6068 35.0509 9.88853 31.5815 6.40973C28.1121 2.93093 23.4065 0.976563 18.5 0.976562Z"
              fill="#339FDE"
            />
          </svg>

          <span className="text-[#5F5D5E] ml-3"> {address}</span>
        </li>
      </ul>

      <iframe
        title={`${office} Office Map`}
        src={mapSrc}
        width="90%"
        height="250"
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
    <div className="bg-white shadow-md rounded-[50px] lg:mx-[5rem]">
      <div className="flex justify-center mb-6">
        <nav className="flex space-x-4 relative">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-[8rem]">
        <OfficeDetails office={selectedOffice} />
        <div className="md:px-5 md:mt-0">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsUI;
