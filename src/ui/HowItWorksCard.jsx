/* eslint-disable react/prop-types */
import { Badge, CardHeader, CardBody } from "@material-tailwind/react";
import { useState } from "react";

const HowItWorksCard = ({ data }) => {
  const [textHide, setTextHide] = useState(false);
  const toggleText = () => {
    setTextHide(!textHide);
  };

  return (
    <div className="relative flex flex-col align-middle items-center mb-5 p-1 mt-12">
      <Badge
        withBorder
        placement="top"
        color="white"
        content={data?.no}
        className="absolute w-12 h-12 text-lg top-0 transform z-[12] from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
      />
      <div className="flex flex-col justify-center md:flex-row">
        <div className="relative md:max-w-[25rem] h-[30rem] flex flex-col justify-center w-auto overflow-hidden border shadow-xl bg-white z-10">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="ml-6 rounded-none flex justify-center items-center min-h-[8rem]"
          >
            <img
              alt="card-img"
              src={data?.img}
              className="object-cover w-full h-full rounded-t-lg"
            />
          </CardHeader>

          <CardBody>
            <p className="md:text-lg text-sm pl-5 font-semibold mb-2 font-inria">
              {data?.title}
            </p>
            <p className="text-[15px] font-inter pl-5 mb-4">{data?.item1}</p>
            {!textHide && (
              <p
                className="block font-semibold text-white bg-[#339FDE] ml-5 py-1 pl-10  cursor-pointer rounded w-40"
                onClick={toggleText}
              >
                Read More
              </p>
            )}
          </CardBody>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
