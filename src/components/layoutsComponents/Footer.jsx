import { Button, Input, Typography } from "@material-tailwind/react";
import companyLogo from "/logos/companyLogo.png";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Quicks Links",
    items: ["Home", "About Us", "Contact Us"],
  },
  {
    title: "Pages",
    items: ["Testimonials", "Blogs", "Privacy Policy", "Terms Of Services"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full flex justify-center items-center  bg-[#0F4767]  text-white     p-5 ">
      <div className=" w-full max-w-7xl  mt-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-12  ">
          <div >
            <img alt="logo" src={companyLogo} />
            <Typography>
              Lorem ipsum dolor sit amet consectetur. Enim facilisi amet egestas
              neque iaculis vestibulum. Ultrices iaculis et malesuada lacus et.
              Amet lectus congue porta tincidunt hendrerit maecenas. Id suscipit
              pharetra justo.
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="grid grid-cols-2  gap-4 ">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium opacity-80 text-white text-center"
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
                   <Link to={`${link .split(" ")
    .join("").toLowerCase()}`}> {link}</Link>    
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

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
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear}{" "}
          Compumatrix Technologies All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
        
          
           
          
            
          </div>
        </div>
      </div>
    </footer>
  );
}
