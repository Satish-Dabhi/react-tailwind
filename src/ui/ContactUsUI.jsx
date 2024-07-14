/* eslint-disable react/prop-types */

import { useState } from "react";
import Inputs from "../forms/Inputs";
import { Textarea } from "@material-tailwind/react";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
// import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/24outline';

const ContactUsUI = () => {
  const [selectedOffice, setSelectedOffice] = useState("dubai");

  const handleOfficeChange = (office) => {
    setSelectedOffice(office);
  };

  return (
    <div className="container mx-auto m-6 p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-500">Contact Us</h1>
        <p className="mt-5 mb-5 font-inter">
          Lorem ipsum dolor sit amet consectetur. Sagittis cras augue malesuada
          pretium. <br />
          Pellentesque ridiculus volutpat amet accumsan eleifend aliquam amet.
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <nav className="flex space-x-4">
          <button
            className={`px-4 py-2 transition-colors duration-300 ${
              selectedOffice === "dubai"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "border-b-2 border-transparent hover:text-blue-500"
            }`}
            onClick={() => handleOfficeChange("dubai")}
          >
            Dubai Office
          </button>
          <button
            className={`px-4 py-2 transition-colors duration-300 ${
              selectedOffice === "india"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "border-b-2 border-transparent hover:text-blue-500"
            }`}
            onClick={() => handleOfficeChange("india")}
          >
            India Office
          </button>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {selectedOffice === "dubai" ? (
          <>
            <div className="px-10 lg:pl-20 mt-5">
              <p className="text-2xl font-bold mb-4 font-inria">
                Get A free consultation
              </p>
              <ul className="mb-4">
                <li className="flex items-center mb-4">
                  <MdMail className="h-5 w-5 mr-4 text-3xl text-blue-500" />
                  info@epiidosisinvestments.com
                </li>
                <li className="flex items-center mb-4">
                  <MdPhone className="h-5 w-5 mr-4 text-blue-500" />
                  +971 (04) 884 8644
                </li>
                <li className="flex items-center mb-4">
                  <MdLocationOn className="h-5 w-5 mr-4 text-blue-500" />
                  818, Park Lane Tower, Business Bay, Dubai – 415203, United
                  Arab Emirates
                </li>
              </ul>
              <iframe
                title="Dubai Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.482678850987!2d55.26850901549535!3d25.187607283902174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ad8b9cde8c3%3A0xc426e0d40297036d!2sEpiidosis%20Investments%20LLC!5e0!3m2!1sen!2sae!4v1647849017922!5m2!1sen!2sae"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="px-10 lg:pr-20 mt-5">
              <form>
                <div className="mb-6">
                  <Inputs label="Name" className="bg-white " />
                </div>
                <div className="mb-6">
                  <Inputs label="Email" className="bg-white " />
                </div>
                <div className="mb-6">
                  <Inputs label="Number" className="bg-white " />
                </div>
                <div className="mb-6">
                  <Textarea label="Description" className="bg-white " />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="px-10 lg:pl-20 mt-5">
              <p className="text-2xl font-bold mb-4 font-inria">
                Get A free consultation
              </p>
              <ul className="mb-4">
                <li className="flex items-center mb-4">
                  <MdMail className="h-5 w-5 mr-4 text-3xl text-blue-500" />
                  info@epiidosisinvestments.com
                </li>
                <li className="flex items-center mb-4">
                  <MdPhone className="h-5 w-5 mr-4 text-blue-500" />
                  +91 (120) 4015401
                </li>
                <li className="flex items-center mb-4">
                  <MdLocationOn className="h-5 w-5 mr-4 text-blue-500" />
                  1201,2ND FLOO, TOWER A, THE CORRENTHUM, SECTOR 62,
                  NOIDA-201301
                </li>
              </ul>
              <iframe
                title="Dubai Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.241263965979!2d78.96343261505283!3d20.593684986191605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf72b40587d27%3A0x5d0a210b670b6d53!2sIndia!5e0!3m2!1sen!2sin!4v1647849768898!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="px-10 lg:pl-20 mt-5">
              <form>
                <div className="mb-6">
                  <Inputs label="Name" className="bg-white" />
                </div>
                <div className="mb-6">
                  <Inputs label="Email" className="bg-white" />
                </div>
                <div className="mb-6">
                  <Inputs label="Number" className="bg-white" />
                </div>
                <div className="mb-6">
                  <Textarea label="Description" className="bg-white" />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactUsUI;
