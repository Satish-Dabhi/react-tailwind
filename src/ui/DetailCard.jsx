/* eslint-disable react/prop-types */

import { Button, CardBody, CardHeader } from "@material-tailwind/react";

const DetailCard = ({ icon, title, description, detailItems, buttonText }) => {
  return (
    <div className="p-[2rem] overflow-hidden border shadow-2xl bg-white z-10">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="mx-auto rounded-none flex"
      >
        <div className="flex">
          {icon && (
            <img alt="logos" src={icon} className="mt-5 w-[5rem] h-auto" />
          )}
          <div className="card-detail-header">
            <p className="px-5 text-2xl lg:text-3xl font-inria font-bold  mb-2">
              {title}
            </p>
            <p className="px-5 text-base lg:text-lg font-inter md:text-md font-light">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-4">
          {detailItems &&
            detailItems.length > 0 &&
            detailItems.map((item, index) => (
              <div className="border-l-4 border-[#5F5D5E]" key={index}>
                <p className="px-5 lg:text-lg font-inria mb-2">
                  {item?.title}
                </p>
                <p className="text-xl px-5 text-base font-inter md:text-md font-bold ">
                  {item?.description}
                </p>
              </div>
            ))}
        </div>

        <Button
          size="sm"
          className="mt-5 border border-white font-inria rounded-none bg-gradient-to-r from-[#339FDE] to-[#1C5678] px-[50px] py-[15px] normal-case text-xl font-normal"
        >
          {buttonText}
        </Button>
      </CardBody>
    </div>
  );
};

export default DetailCard;
