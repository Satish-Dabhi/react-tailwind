/* eslint-disable react/prop-types */
import { CardBody } from "@material-tailwind/react";
import quote from "/img/fundraising/doublequote.png";
const QuoteCard = ({data}) => {
  return (
    <div className="relative  h-[12rem] md:min-w-[15rem] md:min-h-[15rem] flex flex-col justify-center w-auto overflow-hidden border shadow-2xl bg-white z-10 mb-4">
      <CardBody className="space-y-6  flex justify-center flex-col ">
        <div className="w-full flex justify-center ">
          <img alt="quote" src={quote} className="w-5 h-5 md:w-10 md:h-10" />
        </div>{" "}
        
        <p className="text-center text-xs md:text-lg font-inter">
          {data?.desc}
        </p>
        <p className="text-center text-lg font-semibold mb-2 font-inria">{data?.author}</p>
      </CardBody>
    </div>
  );
};

export default QuoteCard;
