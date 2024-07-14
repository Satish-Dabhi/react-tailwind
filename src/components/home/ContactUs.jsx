import { Textarea } from "@material-tailwind/react";
import Inputs from "../../forms/Inputs";
import ButtonPrimaryUI from "../../ui/ButtonPrimaryUi";
const ContactUs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2 md:mt-5">
        <Inputs label="Enter you first name" className="bg-white " />
        <Inputs label="Enter you last name" className="bg-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-2 gap-2 md:mt-5">
        <Inputs label="Enter your email" className="bg-white" />
        <Inputs label="Enter phone number" className="bg-white" />
      </div>
      <div className="mt-5">
        <Textarea label="your message" className=" bg-white" />
      </div>
      <ButtonPrimaryUI>
        <span className="flex gap-3 items-center">
          Submit{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </ButtonPrimaryUI>
    </div>
  );
};

export default ContactUs;
