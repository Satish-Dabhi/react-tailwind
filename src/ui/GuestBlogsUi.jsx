/* eslint-disable react/prop-types */

import ButtonSecondaryUi from "./ButtonSecondaryUi";

const GuestBlogsUi = ({ data }) => {
  console.log(data);
  return (
    <section className="bg-[#f3f2f2] shadow-lg">
      <img alt="img" src={data?.img} className="size-auto" />
      <div className="mt-5 p-5">
        <div className="flex gap-5 items-center">
          <p className="text-md font-inria font-medium text-primary">
            {data?.title}
          </p>
          <p className="text-lg font-inria font-medium ">{data?.date}</p>
        </div>
        <p className="text-xl font-semibold font-inria mt-2 mb-2">{data?.mainTitle}</p>
        <p className="font-inter mb-2">{data?.subTitle}</p>
        <ButtonSecondaryUi>
        <span className="flex items-center gap-2">
          Read More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>{" "}
      </ButtonSecondaryUi>
      </div>
     
    </section>
  );
};

export default GuestBlogsUi;
