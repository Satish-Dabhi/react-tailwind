import { Button } from "@material-tailwind/react";
import herosection from "/img/herosection.png";
import image1 from "/img/home/image1.png";
import image2 from "/img/home/image2.png";
import image3 from "/img/home/image3.png";
import Card from '../../ui/Card';

function Herosection() {
  const cards = [
    {
      imageSrc: image1,
      altText: 'Circle 1',
      title: 'Mission Statement',
      content: `The mission of our company is to provide innovative investment solutions and strategic guidance. Our goal is to deliver superior returns to investors. Also, we are committed to fostering economic growth in the communities we serve.`,
    },
    {
      imageSrc: image2,
      altText: 'Circle 2',
      title: 'Vision Statement',
      content: `Our vision is to be recognized as a global leader in investment management. In addition to creating value for our investors and partners, we generate value for all stakeholders. By embracing innovation, integrity, and impact, we empower individuals and organizations to thrive.`,
    },
    {
      imageSrc: image3,
      altText: 'Circle 3',
      title: 'Core Values',
      content: `We conduct ourselves with honesty, transparency, and ethical integrity in all aspects of our business. We hold ourselves accountable to the highest standards of professionalism and adhere to the principles of fairness.`,
    },
  ];

  return (
    <div className="relative w-full max-h-auto sm:min-h-[55rem] 2xl:min-h-[48rem]">
      <div className="relative bg-gradient-to-tr from-gray-900 to-blue-gray-600 h-full w-full">
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
          <div className="w-full md:w-[75%] md:ml-5 flex flex-col justify-center">
            <p className="text-3xl text-start md:text-6xl font-inria font-bold md:leading-[4.5rem] animate-slidein [--slidein-delay:300ms] opacity-0">
              Unlock Opportunities with Epiidosis Investments
            </p>
            <p className="font-inter text-start mt-5 font-light md:text-2xl md:mt-5 animate-slidein [--slidein-delay:500ms] opacity-0">
              Empower your investments with Epiidosis Investments LLC, driving <br />
              sustainable socio-economic growth through strategic, innovative, and
              <br /> globally diversified investment solutions.
            </p>
            <Button
              className="flex items-center w-fit mt-5 animate-slidein [--slidein-delay:700ms] opacity-0"
              style={{
                backgroundImage:
                  "linear-gradient(278.35deg, #1C5678 14.04%, #339FDE 97.09%)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "0",
              }}
            >
              <span className="font-inter font-normal"> Invest With Us </span>{" "}
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
      <div className="md:absolute w-full flex justify-center items-center md:h-[25%] h-[40%] ">
        <div className="flex flex-col md:flex-row gap-5 p-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Herosection;
