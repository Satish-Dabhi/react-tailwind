import { Button } from "@material-tailwind/react";
import herosection from "/img/herosection.png";
import playbutton from "/img/playbutton.png";
import { CardBody, CardHeader } from "@material-tailwind/react";
import userslogo from "/logos/userslogo.png";
import userwings from "/logos/userwings.png";
import calling from "/logos/calling.png";
import handshake from "/logos/handshake.png";

function Herosection() {
  return (
    <div className="relative w-full max-h-auto sm:min-h-[55rem] 2xl:min-h-[55rem]">
      <div className="relative bg-gradient-to-tr from-gray-900 to-blue-gray-600 h-full w-full">
        <img
          alt="img"
          src={herosection}
          className="w-full h-auto min-h-screen  xl:min-h-fit object-fill mix-blend-overlay opacity-75"
        />
        <div className="absolute p-2 gap-5 md:p-[5rem] top-1/4 flex md:top-1/2 md:-translate-y-1/2 text-white md:w-full ">
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
            Welcome to Epiidosis Investments LLC, where financial excellence meets strategic innovation.
            </p>
            <Button className="flex items-center w-fit  bg-primary mt-5 animate-slidein [--slidein-delay:700ms] opacity-0">
              <span className="font-inter font-normal"> Get Started</span>{" "}
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
          <img
            alt="playbutton"
            src={playbutton}
            className="self-center w-[15%] h-[15%] ml-auto    "
          />
        </div>
      </div>
      <div className="md:absolute w-full    flex  justify-center items-center md:h-[50%] h-[30%] ">
        <div className=" flex flex-col   md:flex-row gap-5 p-5">
        <div className="relative md:max-w-[20rem] md:justify-center overflow-hidden border shadow-2xl bg-white z-10 flex flex-col justify-end">
  <CardHeader
    floated={false}
    shadow={false}
    color="transparent"
    className="mx-auto rounded-none bg-yellow-100 w-[10rem] h-[10rem] flex justify-center items-center"
  >
    <img alt="logos" src={userslogo} className="mt-5 w-12" />
  </CardHeader>
  <CardBody>
    <p className="text-2xl lg:text-3xl font-inria font-bold mb-2 text-center lg:min-h-20">
      Professional advice
    </p>
    <p className="text-lg lg:text-xl font-inter md:text-md font-light xl:min-h-60 text-justify  lg:min-h-52">
      Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas
      mattis. Pulvinar leo vitae lacus in quis.
    </p>
  </CardBody>
  <div className="bg-primary mt-12 h-3 w-auto "></div>
</div>


<div className="relative md:max-w-[20rem] md:justify-center overflow-hidden border shadow-2xl bg-white z-10 flex flex-col justify-end">
  <CardHeader
    floated={false}
    shadow={false}
    color="transparent"
    className="mx-auto rounded-none bg-yellow-100 w-[10rem] h-[10rem] flex justify-center items-center"
  >
    <img alt="logos" src={userwings} className="mt-5 w-12" />
  </CardHeader>
  <CardBody>
    <p className="text-2xl lg:text-3xl font-inria font-bold mb-2 text-center lg:min-h-20">
    Fully independent
    </p>
    <p className="text-lg lg:text-xl font-inter md:text-md lg:min-h-52 xl:min-h-60 font-light text-justify">
      Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas
      mattis. Pulvinar leo vitae lacus in quis.
    </p>
  </CardBody>
  <div className="bg-primary mt-12 h-3 w-auto "></div>
</div>

          <div className=" relative md:max-w-[20rem] lg:min-h-20  overflow-hidden border shadow-2xl bg-white z-10">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="mx-auto rounded-none bg-yellow-100 w-[10rem] h-[10rem] flex justify-center items-center"
            >
              <img alt="logos" src={handshake} className="mt-5" />
            </CardHeader>
            <CardBody>
              <p className="text-2xl lg:text-3xl mb-2 font-inria font-bold text-center lg:min-h-20">Transparant</p>
              <p className="text-lg lg:text-xl md:min-h-30 font-inter lg:min-h-52 xl:min-h-60 text-justify md:text-md font-light md:mb-8 lg:mb-auto ">
                Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
                egestas mattis. Pulvinar leo vitae lacus in quis.
              </p>
            </CardBody>
            <div className="bg-primary  mt-12 h-3 w-auto "></div>
          </div>
          <div className=" relative md:max-w-[20rem]  overflow-hidden border shadow-2xl bg-white z-10">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="mx-auto rounded-none bg-yellow-100 w-[10rem] h-[10rem] flex justify-center items-center"
            >
              <img alt="logos" src={calling} className="mt-5" />
            </CardHeader>
            <CardBody>
              <p className="text-2xl lg:text-3xl font-inria font-bold  mb-2 text-center lg:min-h-20">
                Great Support
              </p>
              <p className="text-lg lg:text-xl font-inter lg:min-h-52 xl:min-h-60 text-justify md:text-md font-light ">
                Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
                egestas mattis. Pulvinar leo vitae lacus in quis.
              </p>
            </CardBody>
            <div className="bg-primary  mt-12 h-3 w-auto "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
