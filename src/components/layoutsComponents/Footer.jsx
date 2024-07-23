/* eslint-disable react/prop-types */

import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import companyLogo from "/logos/logo-white.png";
import { FaLinkedin } from "react-icons/fa";

const LINKS = [
  {
    title: "Quick Links",
    items: [
      { text: "Home", showArrow: false },
      { text: "About Us", showArrow: false },
      { text: "Contact Us", showArrow: false },
      { text: "Structured Finance", showArrow: false },
      { text: "Asset Monetization", showArrow: false },
      { text: "Loans Secured by Listed Stocks", showArrow: false },
    ],
  },
  {
    title: "Useful Links",
    items: [
      { text: "Invest With Us", showArrow: false },
      { text: "Blogs", showArrow: false },
      { text: "Privacy Policy", showArrow: false },
      { text: "Terms Of Services", showArrow: false },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const socialColorFill = "#FFFFFF";
  return (
    <footer
      className="relative w-full flex justify-center text-white p-5"
      style={{
        background: "linear-gradient(262.98deg, #339FDE 0%, #1C5678 99.52%)",
      }}
    >
      <div className="w-full mt-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:px-12 ">
          <div className="flex flex-col md:items-start">
            <img
              alt="logo"
              src={companyLogo}
              className="mb-4 w-[270px] h-[50px]"
            />
            <Typography className="md:text-left text-lg mt-8 font-poppins font-normal">
              818, Park Lane Tower, Business Bay,
              <br />
              415203, Dubai
            </Typography>
            <div className="flex items-center gap-2 mt-1 text-white mt-3">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3168 2.07826L20.2838 2.05762L16.1073 0L11.5994 6.0105L13.6733 8.77597C13.6113 9.8189 13.169 10.8029 12.4302 11.5416C11.6915 12.2804 10.7075 12.7227 9.66455 12.7847L6.89913 10.7107L0.888672 15.2185L2.92917 19.3602L2.94634 19.3951L2.96703 19.4281C3.07592 19.6036 3.2279 19.7482 3.40852 19.8483C3.58913 19.9484 3.79236 20.0006 3.99885 20H5.07654C7.15302 20 9.20917 19.591 11.1276 18.7964C13.046 18.0017 14.7891 16.837 16.2574 15.3687C17.7257 13.9004 18.8904 12.1573 19.6851 10.2389C20.4797 8.32046 20.8887 6.2643 20.8887 4.18782V3.11008C20.8893 2.90359 20.8371 2.70036 20.737 2.51975C20.6369 2.33914 20.4923 2.18715 20.3168 2.07826ZM19.3452 4.18782C19.3452 12.0556 12.9443 18.4566 5.07654 18.4566H4.20451L2.83926 15.685L6.89942 12.6399L9.1599 14.3352H9.41712C10.9567 14.3335 12.4328 13.7211 13.5215 12.6325C14.6101 11.5438 15.2225 10.0677 15.2242 8.52811V8.27089L13.5289 6.01046L16.5737 1.95054L19.3452 3.31603V4.18782Z"
                  fill="white"
                />
              </svg>

              <Typography className="text-base font-poppins">+971 (04) 884-8644</Typography>
            </div>
            <div className="flex items-center gap-2 mt-3 text-white mt-5">
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.88867 5.5L10.8887 9L15.8887 5.5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.888672 13.5V3.5C0.888672 2.39543 1.7841 1.5 2.88867 1.5H18.8887C19.9933 1.5 20.8887 2.39543 20.8887 3.5V13.5C20.8887 14.6046 19.9933 15.5 18.8887 15.5H2.88867C1.7841 15.5 0.888672 14.6046 0.888672 13.5Z"
                  stroke="white"
                  strokeWidth="1.6"
                />
              </svg>

              <Typography className="text-base font-poppins">
                info@epiidosisinvestments.com
              </Typography>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {LINKS.map(({ title, items }) => (
              <div key={title} className="flex flex-col md:items-start">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium text-white text-2xl"
                >
                  {title}
                </Typography>
                <ul className="space-y-1">
                  {items.map(({ text, showArrow }) => (
                    <li key={text}>
                      <Typography
                        as={Link}
                        to={`/${text.split(" ").join("").toLowerCase()}`}
                        color="gray"
                        className="flex items-center text-white gap-1 font-extralight transition-colors font-poppins text-base font-light"
                      >
                        {showArrow && (
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
                        )}
                        {text}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0 font-poppins"
          >
            &copy; {currentYear} All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <div className="flex gap-4 text-blue-gray-900 justify-center md:justify-start">
              {/* <p className="transition-opacity hover:opacity-100"> */}
              <Typography
                as="a"
                href="https://www.facebook.com/epiidosisinvestments"
                className="transition-opacity hover:opacity-100"
              >
                <svg
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.1621 3.90124V6.41671H0V9.4924H2.1621V18.6334H6.60011V9.49332H9.57917C9.57917 9.49332 9.85829 8.01863 9.99356 6.40573H6.61836V4.30218C6.61836 3.9882 7.10145 3.56529 7.58025 3.56529H10V0.363281H6.71068C2.05153 0.363281 2.1621 3.44172 2.1621 3.90124Z"
                    fill="white"
                  />
                </svg>
              {/* </p> */}
              </Typography>

              {/* Links */}
              <Typography
                as="a"
                href="https://www.instagram.com/epiidosisinvestments/"
                className="transition-opacity hover:opacity-100"
              >
                {/* Placeholder icon */}
                <svg
                  className="h-5 w-5"
                  fill={socialColorFill}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>

              {/* LinkedIn icon */}
              <Typography
                as="a"
                href="https://www.linkedin.com/company/epiidosis-investments-llc/"
                className="transition-opacity hover:opacity-100 flex items-center"
              >
                <FaLinkedin className="h-5 w-5" color={socialColorFill} />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
