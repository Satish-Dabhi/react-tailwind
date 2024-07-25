import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../ui/Card";

function HeroSection({
  cards,
  bannerImg,
  bannerTitle,
  bannerDesc,
  buttonText,
  // contentSectionWidth,
  borderLeft,
  buttonLink,
}) {
  // const divWidth = contentSectionWidth || "70%";

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
          <div className={`w-full`}>
            <div
              className={` pl-5 ${borderLeft ? "border-l-4" : "border-none"}`}
              style={{
                borderImage: "linear-gradient(to bottom, #339FDE, #1C5678) 1",
                MozBorderImage:
                  "linear-gradient(to bottom, #339FDE, #1C5678) 1",
              }}
            >
              <p className="text-3xl text-start md:text-5xl font-inria font-bold md:leading-[4.5rem] animate-slidein [--slidein-delay:300ms] opacity-0 text-white">
                {bannerTitle.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>

              <p className="font-inter text-start mt-5 md:text-2xl font-extralight md:mt-5 animate-slidein [--slidein-delay:500ms] opacity-0 text-white md:leading-[2.5rem]">
                {bannerDesc.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>

            <Link to={buttonLink}>
              <Button
                className="ml-6 font-normal flex items-center w-fit mt-5 animate-slidein [--slidein-delay:700ms] opacity-0 hover:border-2 hover:border-white transition-all duration-300"
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
                <span className="font-inter font-normal normal-case text-xl">
                  {" "}
                  {buttonText}{" "}
                </span>{" "}
              </Button>
            </Link>
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
  contentSectionWidth: PropTypes.string,
  borderLeft: PropTypes.bool,
  buttonLink: PropTypes.string,
};

export default HeroSection;
