import { Button } from "@material-tailwind/react";
import herosection from "/img/herosection.png";
// import playbutton from "/img/playbutton.png";
import { CardBody, CardHeader } from "@material-tailwind/react";
// import userslogo from "/logos/userslogo.png";
import guidelogo from "/logos/guide-icon.png";
import guidancelogo from "/logos/guidance.png";
// import userwings from "/logos/userwings.png";
// import calling from "/logos/calling.png";
// import handshake from "/logos/handshake.png";

function Herosection() {
  return (
    <div className="relative w-full max-h-auto sm:min-h-[55rem] 2xl:min-h-[55rem]">
      <div className="relative bg-gradient-to-br from-[#102741] via-[#134562] to-[#D9D9D9] h-full w-full">
        <img
          alt="img"
          src={herosection}
          className="w-full h-auto min-h-screen  xl:min-h-fit object-fill mix-blend-overlay opacity-75"
        />
        <div className="absolute p-2 gap-5 md:p-[5rem] md:pt-0 top-1/4 flex md:top-1/2 md:-translate-y-1/2 text-white md:w-full ">
          <div
            className="h-[15rem] md:h-[18rem] bg-primary mt-5 animate-slidein [--slidein-delay:100ms] opacity-0"
            style={{ width: "5px" }}
          ></div>{" "}
          <div className="w-fit md:w-[55rem] md:ml-5  flex flex-col justify-center">
            <p className="text-3xl text-start md:text-6xl font-inria font-bold  md:leading-[4.5rem] animate-slidein [--slidein-delay:300ms] opacity-0">
              Unlock Opportunities with Epiidosis Investments
            </p>
            {/* <p className=" md:text-[60px] font-inria font-bold "></p> */}
            <p className=" font-inter text-start mt-5  font-light md:text-2xl md:mt-5 animate-slidein [--slidein-delay:500ms] opacity-0">
              Empower your investments with Epiidosis Investments LLC, driving
              sustainable socio-economic growth through strategic, innovative,
              and globally diversified investment solutions.{" "}
            </p>
            <Button className="mt-8 px-8 py-6 rounded-none bg-gradient-to-r from-[#339FDE] to-[#1C5678] normal-case flex items-center w-fit  bg-primary mt-5 animate-slidein [--slidein-delay:700ms] opacity-0">
              <span className="font-inter font-normal text-2xl">
                Invest with Us
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
          {/* <img
            alt="playbutton"
            src={playbutton}
            className="self-center w-[15%] h-[15%] ml-auto    "
          /> */}
        </div>
      </div>
      <div className="md:absolute w-full flex justify-center items-center h-[30%]">
        <div className=" flex flex-col md:flex-row gap-5">
          <div className="relative md:max-w-[20rem] md:justify-center overflow-hidden border shadow-2xl bg-white z-10 flex flex-col justify-end">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="mx-auto rounded-none w-[10rem] h-[10rem] flex justify-center items-center"
            >
              <img alt="logos" src={guidelogo} className="mt-5" />
            </CardHeader>
            <CardBody>
              <p className="text-2xl lg:text-3xl font-inria font-bold mb-2 text-center text-[#339FDE]">
                Professional advice
              </p>
              <p className="px-5 text-base lg:text-lg font-inter md:text-md font-light text-center">
                Expert guidance, tailored strategies. Begin confidently with us on your financial journey toward success.
              </p>
            </CardBody>
            {/* <div className="bg-primary mt-12 h-3 w-auto "></div> */}
          </div>

          <div className="relative md:max-w-[20rem] md:justify-center overflow-hidden border shadow-2xl bg-white z-10 flex flex-col justify-end">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="mx-auto rounded-none w-[10rem] h-[10rem] flex justify-center items-center"
            >
              <img alt="logos" src={guidancelogo} className="mt-5" />
            </CardHeader>
            <CardBody>
              <p className="text-2xl lg:text-3xl font-inria font-bold mb-2 text-center text-[#339FDE]">
                Fully independent
              </p>
              <p className="px-5 text-base lg:text-lg font-inter md:text-md font-light text-center">
                Expert guidance, tailored strategies. Begin confidently with us on your financial journey toward success.
              </p>
            </CardBody>
            {/* <div className="bg-primary mt-12 h-3 w-auto "></div> */}
          </div>

          <div className=" relative md:max-w-[20rem] lg:min-h-20  overflow-hidden border shadow-2xl bg-white z-10">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="mx-auto rounded-none w-[10rem] h-[10rem] flex justify-center items-center"
            >
              <img alt="logos" src={guidelogo} className="mt-5" />
            </CardHeader>
            <CardBody>
              <p className="text-2xl lg:text-3xl mb-2 font-inria font-bold text-center text-[#339FDE]">
                Transparant
              </p>
              <p className="px-5 text-base lg:text-lg font-inter md:text-md font-light text-center">
                Expert guidance, tailored strategies. Begin confidently with us on your financial journey toward success.
              </p>
            </CardBody>
            {/* <div className="bg-primary  mt-12 h-3 w-auto "></div> */}
          </div>
          <div className=" relative md:max-w-[20rem]  overflow-hidden border shadow-2xl bg-white z-10">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="mx-auto rounded-none w-[10rem] h-[10rem] flex justify-center items-center"
            >
              <img alt="logos" src={guidelogo} className="mt-5" />
            </CardHeader>
            <CardBody>
              <p className="text-2xl lg:text-3xl font-inria font-bold  mb-2 text-center text-[#339FDE]">
                Great Support
              </p>
              <p className="px-5 text-base lg:text-lg font-inter md:text-md font-light text-center">
                Expert guidance, tailored strategies. Begin confidently with us on your financial journey toward success.
              </p>
            </CardBody>
            {/* <div className="bg-primary  mt-12 h-3 w-auto "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
