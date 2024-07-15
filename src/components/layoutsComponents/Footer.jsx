import { Typography } from "@material-tailwind/react";
import companyLogo from "/logos/logo-white.png";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Quicks Links",
    items: [
      "Home",
      "About Us",
      "Contact Us",
      "Structured Finance",
      "Asset Monetization",
      "Loans Secured by Listed Stocks ",
    ],
  },
  {
    title: "Useful Links",
    items: ["Invest with us", "Blogs", "Privacy Policy", "Terms Of Services"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full flex justify-center items-center  bg-[#0F4767]  text-white     p-5 ">
      <div className=" w-full max-w-7xl  mt-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-12 justify-center">
          <div>
            <img alt="logo" src={companyLogo} />
            <Typography className="mt-[15%]">
              818, Park Lane Tower, Business Bay, 415203, Dubai
            </Typography>
            <Typography className="flex mt-5">
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

              <span className="pl-3">+971 (04) 884-8644</span>
            </Typography>
            <Typography className="flex mt-2">
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
                />
                <path
                  d="M0.888672 13.5V3.5C0.888672 2.39543 1.7841 1.5 2.88867 1.5H18.8887C19.9933 1.5 20.8887 2.39543 20.8887 3.5V13.5C20.8887 14.6046 19.9933 15.5 18.8887 15.5H2.88867C1.7841 15.5 0.888672 14.6046 0.888672 13.5Z"
                  stroke="white"
                />
              </svg>

              <span className="pl-3">info@epiidosisinvestments.com</span>
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="grid grid-cols-2  gap-4 ">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-large opacity-80 text-white"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 flex font-inter items-center text-white gap-1 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {/* <svg
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
                        </svg> */}
                        <Link to={`${link.split(" ").join("").toLowerCase()}`}>
                          {" "}
                          {link}
                        </Link>
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            {/* 
            <div className="flex flex-col gap-5 md:space-y-1 ">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-3 font-medium opacity-80 text-white text-center"
              >
                Newsletter
              </Typography>
              <div className="flex flex-col md:flex-col gap-2 md:items-center ">
                <div className="w-full md:w-auto">
                  <Input label="newsletter" className="w-full" />
                </div>

                <Button
                  variant="outlined"
                  className="mt-2 flex gap-2 w-full items-center justify-center bg-white text-black"
                >
                  Submit
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
                </Button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} Compumatrix Technologies All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center"></div>
        </div>
      </div>
    </footer>
  );
}
