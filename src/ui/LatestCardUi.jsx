/* eslint-disable react/prop-types */

import { useState } from "react";

const LatestCardUi = ({ data }) => {
  const [textHide, setHide] = useState(false);
  const toggleHandle = () => {
    setHide(!textHide);
  };
  console.log(data);
  return (
    <div className="bg-gray-100 w-[18rem] p-8 mt-10  gap-5 ">
      <div className="bg-bgprimary w-fit h-fit p-5 mt-3 mb-3 flex justify-center items-center">
        <img alt="e-commerce" src={data?.icon} className="size-12" />
      </div>
      <h1 className="text-xl mt-3 mb-3 font-inria font-semibold">
        {data?.title}
      </h1>
      <p
        className={` font-inter mb-3 text-justify ${
          textHide ? "" : "line-clamp-4"
        }`}
      >
        {data?.desc}
      </p>
      <p
        className="text-lg text-primary font-inter cursor-pointer"
        onClick={toggleHandle}
      >
        {textHide ? "View Less" : "View More"}
      </p>
    </div>
  );
};

export default LatestCardUi;
