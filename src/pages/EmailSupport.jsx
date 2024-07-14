import { Breadcrumbs } from "@material-tailwind/react";
import InputUi from "../ui/InputUi";
import { Textarea } from "@material-tailwind/react";
import ButtonPrimaryUi from "../ui/ButtonPrimaryUi";
const EmailSupport = () => {
  return (
    <aside>
      <div className="grid justify-items-center">
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            Home
          </a>
          <a href="#" className="opacity-60">
            Contact Support
          </a>
          <a href="#">Email Support</a>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-3xl mt-5 mb-5 text-primary font-inria font-semibold">
          Email Support
        </p>
      </div>
      <div className="mt-5">
        <p className="font-inria font-semibold text-xl">
          Lorem ipsum dolor sit amet
        </p>
        <p className="text-inter">
          Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis
          ultrices venenatis. In pulvinar et senectus non eu. I.
        </p>
      </div>
      <div className="grid grid-cols-1 p-3 md:grid-cols-2 md:justify-around">
        <p className="flex gap-4 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#339FDE"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>{" "}
          <span className="font-inter font-semibold">
            epiidosisinvestment@gmail.com
          </span>
        </p>
        <p className="flex gap-4 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#339FDE"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>{" "}
          <span className="font-inter font-semibold">9756545662</span>
        </p>
      </div>
      <p className="mt-2 p-3 flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#339FDE"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <span className="font-inter font-semibold">
          Fahad BLDG - M18 - Hor Al Anz - Dubai - United Arab Emirates
        </span>
      </p>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8 ">
          <InputUi label={"Enter First name"} />
          <InputUi label={"Enter Last name"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8">
          <InputUi label={"Enter Your Email"} />
          <InputUi label={"Enter Phone number"} />
        </div>
        <div className="mt-3 mb-5">
          <Textarea label="message" />
        </div>
        <ButtonPrimaryUi>
          <span className="flex gap-3 ">
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
        </ButtonPrimaryUi>
      </form>
    </aside>
  );
};

export default EmailSupport;
