/* eslint-disable react/prop-types */
import { Badge, CardHeader, CardBody } from "@material-tailwind/react";
import { useState } from "react";

const HowItWorksCard = ({ data }) => {
  const [textHide, setTextHide] = useState(false);
  const toggleText = () => {
    setTextHide(!textHide);
  };
  return (
    <div className="relative flex flex-col align-middle items-center mb-5 p-1 mt-12 ">
      <Badge
        withBorder
        placement="top"
        color="white"
        content={data?.no}
        className="absolute  w-12 font-bold h-12 text-lg top-0 transform  z-[12] from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
      />
      <div className=" flex flex-col justify-center   md:flex-row ">
        <div className=" relative  md:max-w-[25rem] h-[30rem] flex flex-col justify-center w-auto  overflow-hidden border shadow-xl bg-white z-10 ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="ml-6 rounded-none   flex justify-center items-center"
          >
            <img
              alt="logos"
              src={data?.img}
              className="mt-5 object-fill w-10 h-10  md:w-[10rem] md:h-[10rem]"
            />
          </CardHeader>
          <CardBody>
            <p className="md:text-lg text-sm font-semibold mb-2 font-inria ">
              {data?.title}
            </p>
            <ul className="text-[15px] font-inter list-disc p-5 space-y-2 ">
              <li>
                <span className={`${textHide ? "" : "line-clamp-2"}`}>
                  {data?.item1}
                </span>
                <span
                  className="cursor-pointer text-primary"
                  onClick={toggleText}
                >
                  more
                </span>
              </li>
              {data?.item2 ? (
                <li>
                  <span className={`${textHide ? "" : "line-clamp-2"}`}>
                    {data?.item2}
                  </span>
                  <span
                    className="cursor-pointer text-primary"
                    onClick={toggleText}
                  >
                    more
                  </span>
                </li>
              ) : null}
            </ul>
          </CardBody>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
