import { useState } from "react";
import { CardHeader, CardBody } from "@material-tailwind/react";
import target from "/img/aboutus/target.png";
import eye from "/img/aboutus/eye.png";
import donate from "/img/aboutus/donate.png";
const OurStrenght = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <div className="container mx-auto mt-12">
      <div className="flex justify-center">
        <div className="text-2xl md:text-4xl font-semibold text-center">
          <span className="font-inria">Our Strengths</span>
          <div className="bg-darkyellow h-1 ml-2 mt-2  w-[8rem] "></div>
        </div>
      </div>

      <div className=" w-full  flex  justify-center items-center h-[25%]">
        <div className=" flex flex-col  md:flex-row gap-5 p-5">
          <div className="flex relative md:max-w-[20rem] h-fit overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={target} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-semibold mb-2 font-inria ">
                  Financial Expertise
                </p>
                <p
                  className={` font-inter mb-3 ${
                    showFullText ? "" : "line-clamp-5"
                  }`}
                >
                  At Epiidosis Investments LLC, our mission is to empower
                  individuals and organizations to achieve their financial goals
                  by providing innovative investment solutions, strategic
                  guidance, and unparalleled service. We are committed to
                  delivering superior returns for our investors, fostering
                  economic growth in the communities we serve, and upholding the
                  highest standards of integrity, transparency, and
                  professionalism in all our endeavors.
                </p>
                <a
                  onClick={toggleText}
                  className="text-primary cursor-pointer "
                >
                  {showFullText ? "View Less" : "View More"}
                </a>
              </CardBody>
            </div>
          </div>
          <div className="flex relative md:max-w-[20rem] h-fit  overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={eye} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-inria font-semibold mb-2">
                  Proven Track Record
                </p>
                <p
                  className={`mb-3 font-inter ${
                    showFullText ? "" : "line-clamp-5"
                  }`}
                >
                  Our track record speaks volumes about our success in
                  delivering value to our investors. Over the years, we have
                  executed numerous successful projects and investments across
                  various sectors and geographies, generating substantial
                  returns and creating lasting value for our stakeholders. From
                  strategic acquisitions to successful exits, our portfolio of
                  success stories reflects our ability to identify
                  high-potential opportunities, navigate market dynamics, and
                  achieve superior results.
                </p>
                <a
                  onClick={toggleText}
                  className="text-primary cursor-pointer "
                >
                  {showFullText ? "View Less" : "View More"}
                </a>
              </CardBody>
            </div>
          </div>
          <div className="flex relative md:max-w-[20rem] h-fit  overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-12"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={donate} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-inria font-semibold mb-2">
                  Global Presence
                </p>
                <p
                  className={` font-inter mb-3 ${
                    showFullText ? "" : "line-clamp-5"
                  }`}
                >
                  With a presence spanning across continents, Epiidosis
                  Investments LLC boasts a robust global presence that enables
                  us to access and capitalize on opportunities in diverse
                  markets. From the Middle East to East Africa, Asia, India,
                  Australia, Latin America, and beyond, we have established
                  strong partnerships and alliances that allow us to navigate
                  international markets with confidence and efficiency. Our
                  global footprint provides us with unique insights, access to
                  local networks, and opportunities for strategic expansion,
                  positioning us as a trusted partner for investors seeking
                  exposure to global markets.
                </p>
                <a
                  onClick={toggleText}
                  className="text-primary cursor-pointer "
                >
                  {showFullText ? "View Less" : "View More"}
                </a>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrenght;
