import { Button } from "@material-tailwind/react";
import herosection from "/img/herosection.png";
import image1 from "/img/home/image1.png";
import image2 from "/img/home/image2.png";
import image3 from "/img/home/image3.png";
import image4 from "/img/home/image4.png";
import Card from "../../ui/Card";

function Herosection() {
  const cardValues = [
    { imageSrc: image1, altText: "Circle 1", title: "Guidance" },
    { imageSrc: image2, altText: "Circle 2", title: "Independence" },
    { imageSrc: image3, altText: "Circle 3", title: "Transparency" },
    { imageSrc: image4, altText: "Circle 4", title: "Support" },
  ];

  return (
    <div className="relative w-full max-h-auto sm:min-h-[55rem] 2xl:min-h-[55rem]">
      <div className="relative bg-gradient-to-br from-[#102741] via-[#134562] to-[#D9D9D9] h-full w-full">
        <img
          alt="img"
          src={herosection}
          className="w-full h-auto min-h-screen xl:min-h-fit object-fill mix-blend-overlay opacity-75"
        />
        <div className="absolute p-2 gap-5 md:p-[5rem] top-1/4 flex md:top-1/2 md:-translate-y-1/2 text-white md:w-full">
          <div
            className="h-[12rem] md:h-[14.4rem] bg-primary mt-5 animate-slidein [--slidein-delay:100ms] opacity-0"
            style={{ width: "5px" }}
          ></div>
          <div className="w-full md:w-[55%] md:ml-5 flex flex-col justify-center">
            <p className="text-3xl text-start md:text-6xl font-inria font-bold md:leading-[4.5rem] animate-slidein [--slidein-delay:300ms] opacity-0 text-white">
              Unlock Opportunities with Epiidosis Investments
            </p>
            <p className="font-inter text-start mt-5 font-light md:text-2xl md:mt-5 animate-slidein [--slidein-delay:500ms] opacity-0 text-white">
              Empower your investments with Epiidosis Investments LLC, driving
              sustainable socio-economic growth through strategic, innovative,
              and globally diversified investment solutions.
            </p>
            <Button
              className="font-normal flex items-center w-fit mt-5 animate-slidein [--slidein-delay:700ms] opacity-0"
              style={{
                backgroundImage:
                  "linear-gradient(278.35deg, #1C5678 14.04%, #339FDE 97.09%)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "0",
                // width: "15rem",
                textAlign: "center",
                marginTop: "3rem",
              }}
            >
              <span className="font-inter font-normal normal-case text-xl px-[1rem]">
                {" "}
                Invest With Us{" "}
              </span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
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
      <div className="md:absolute w-full flex justify-center items-center md:h-[25%] h-[40%]">
        <div className="container flex flex-col md:flex-row gap-5 p-5">
          {cardValues.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              className="text-white font-helvetica"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Herosection;
