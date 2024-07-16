import { Typography } from "@material-tailwind/react";
import ContactUs from "./ContactUs";
const GetAFreeConsultation = () => {
  return (
    <div className="bg-bgcream ">
      <div className="container mx-auto mt-0 flex flex-col items-center justify-center w-full p-2 ">
        <div className="flex justify-center flex-col md:mt-8 ">
          <p className="text-2xl md:text-4xl uppercase font-semibold text-center w-fit font-inria">
            Get A free consultation
          </p>
          <div className="bg-primary h-1 mt-2 justify-start w-[10rem]  "></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 justify-items-center p-5">
          <div>
            <p className="mt-5 text-xl font-inter">Get in Touch with Epiidosis Investments LLC</p>
            <p className="text-gray-600 mt-2 font-inter">
              Reach out to Epiidosis Investments LLC via our online contact form. Connect with our team to explore 
              investment opportunities and discover how we can help you achieve your financial goals. We look forward to hearing from you!
            </p>
            <Typography
              variant="small"
              className="mb-4 mt-12 text-center font-normal text-blue-gray-900 md:mb-0 flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#339FDE"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-5 text-lg font-inria">
                info@epiidosisinvestments.com
              </span>
            </Typography>
            <Typography
              variant="small"
              className="mb-4 mt-5 text-center flex items-center font-normal text-blue-gray-900 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#339FDE"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="ml-5 text-lg font-inria">+971 (04) 884-8644</span>
            </Typography>
            <Typography
              variant="small"
              className="mb-4 mt-5 text-center flex items-center font-normal text-blue-gray-900 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#339FDE"
                className="w-8 h-8"
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
              <span className="ml-5 text-lg text-start font-inria">
                Fahad BLDG - M18 - Hor Al Anz - Dubai - United Arab Emirates
              </span>
            </Typography>
          </div>
          <div className="mt-5 md:mt-0 md:mb-12">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAFreeConsultation;
