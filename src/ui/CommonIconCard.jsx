/* eslint-disable react/prop-types */
import { CardBody, CardHeader } from "@material-tailwind/react";

export function CommonIconCard({ icon, title, description }) {
  return (
    <div className=" relative md:max-w-[20rem]  overflow-hidden border shadow-2xl bg-white z-10">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="mx-auto rounded-none w-[10rem] h-[10rem] flex justify-center items-center"
      >
        {icon && <img alt="logos" src={icon} className="mt-5" />}
      </CardHeader>
      <CardBody>
        <p className="text-2xl lg:text-3xl font-inria font-bold  mb-2 text-center text-[#339FDE]">
          {title}
        </p>
        <p className="px-5 text-base lg:text-lg font-inter md:text-md font-light text-center">
          {description}
        </p>
      </CardBody>
    </div>
  );
}
