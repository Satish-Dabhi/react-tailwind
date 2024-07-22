import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import Card from "../../ui/Card";

function HeroSection({
  cards,
  bannerImg,
  bannerTitle,
  bannerDesc,
  buttonText,
}) {
  return (
    <div
      className={`relative w-full max-h-auto ${
        cards && cards.length > 0 ? "sm:min-h-[55rem] 2xl:min-h-[55rem]" : ""
      }`}
    >
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[600px]"
      >
        <div className="absolute inset-0 flex flex-col container mx-auto md:py-[70px] py-[50px] p-3">
          <div className="w-full lg:w-[80%]">
            <p className="text-3xl text-start md:text-6xl font-inria font-bold md:leading-[4.5rem] animate-slidein [--slidein-delay:300ms] opacity-0 text-white">
              {bannerTitle}
            </p>
            <p className="font-inter text-start mt-5 font-light md:text-2xl md:mt-5 animate-slidein [--slidein-delay:500ms] opacity-0 text-white">
              {bannerDesc}
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
                textAlign: "center",
                marginTop: "3rem",
              }}
            >
              <span className="font-inter font-normal normal-case text-xl px-[1rem]">
                {" "}
                {buttonText}{" "}
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
      {cards && cards.length > 0 && (
        <div className="lg:absolute w-full flex justify-center items-center lg:h-[15%] h-[40%]">
          <div className="flex flex-col lg:flex-row gap-5 lg:p-5 p-3 container mx-auto justify-center">
            {cards.map((card, index) => (
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
      )}
    </div>
  );
}

HeroSection.propTypes = {
  cards: PropTypes.array,
  bannerImg: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string.isRequired,
  bannerDesc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default HeroSection;
