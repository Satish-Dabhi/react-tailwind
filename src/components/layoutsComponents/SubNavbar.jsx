import { Typography } from "@material-tailwind/react";
// import { FaLinkedin } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SubNavbar = ({ color }) => {
  const knowledgeColor = color ? "bg-primary text-white" : null;
  const socialColorFill = knowledgeColor ? "white" : "#339FDE";
  // const socialStroke = knowledgeColor ? 'black' : '#339FDE';
  return (
    <div
      className={`flex w-full md:w-full  flex-col justify-center ${knowledgeColor} border-b border-blue-gray-50 py-6 md:flex-row md:justify-between`}
    >
      <div className="container mx-auto  flex flex-col  md:items-center justify-start md:flex-row">
        <Typography
          variant="small"
          className="mb-4  text-center font-normal text-blue-gray-900 md:mb-0 flex items-center gap-1"
        >
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 14.759C1.45 14.759 0.979333 14.5833 0.588 14.2318C0.196667 13.8804 0.000666667 13.4574 0 12.9629V2.18667C0 1.69276 0.196 1.27009 0.588 0.918661C0.98 0.567236 1.45067 0.391224 2 0.390625H18C18.55 0.390625 19.021 0.566637 19.413 0.918661C19.805 1.27069 20.0007 1.69335 20 2.18667V12.9629C20 13.4568 19.8043 13.8798 19.413 14.2318C19.0217 14.5839 18.5507 14.7596 18 14.759H2ZM10 8.47282L18 3.98271V2.18667L10 6.67677L2 2.18667V3.98271L10 8.47282Z"
              fill="#339FDE"
            />
          </svg>

          <span className={`text-${socialColorFill} pl-2`}>
            info@epiidosisinvestments.com
          </span>
        </Typography>
        <Typography
          variant="small"
          className="mb-4 text-center flex items-center font-normal text-blue-gray-900 md:mb-0 pl-8"
        >
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.62 7.58934C5.06 10.1307 7.38 12.2052 10.21 13.5073L12.41 11.5317C12.68 11.2892 13.08 11.2084 13.43 11.3161C14.55 11.6484 15.76 11.828 17 11.828C17.55 11.828 18 12.2321 18 12.726V15.8601C18 16.354 17.55 16.7581 17 16.7581C7.61 16.7581 0 9.92419 0 1.49177C0 0.99786 0.45 0.59375 1 0.59375H4.5C5.05 0.59375 5.5 0.99786 5.5 1.49177C5.5 2.6143 5.7 3.69192 6.07 4.69771C6.18 5.01202 6.1 5.36224 5.82 5.61369L3.62 7.58934Z"
              fill="#339FDE"
            />
          </svg>

          <span className={`text-${socialColorFill} pl-2`}>+971 (04) 884-8644</span>
        </Typography>
        {/* <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <p
           
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill={socialColorFill}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill={socialColorFill}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill={socialColorFill}
              viewBox="0 0 24 24"
              aria-hidden="true"
              stroke={socialStroke}
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 flex items-center"
          >
            <FaLinkedin className="h-5 w-5" color={socialColorFill} />
          </Typography>
        </div> */}
      </div>
    </div>
  );
};

export default SubNavbar;
