/* eslint-disable react/prop-types */

import ellipse from "/img/aboutus/ellipse.png";

const ServiceComponentInvest = ({ servicesCard1, servicesCard2 }) => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8 p-5 mt-12 mb-12">
        <img
          src={servicesCard1.img}
          alt="Sustainable Growth and Risk Management"
          className="h-[18rem] md:h-[20rem] object-cover md:w-[40%]"
        />
        <div className="text-start md:w-[60%] lg:pl-16 lg:pr-8 flex flex-col justify-center">
          <h2
            className="ml-2 text-2xl md:text-3xl font-semibold text-center md:text-start font-inria"
            style={{ color: "#5F5D5E" }}
          >
            {servicesCard1.title}
          </h2>
          <ul className="text-gray-600 mt-3 font-inter text-xl leading-normal font-light">
            {servicesCard1.content &&
              servicesCard1.content.length > 0 &&
              servicesCard1.content.map((item, index) => {
                return (
                  <li className="flex items-start" key={index}>
                    <img
                      src={ellipse}
                      height={35}
                      width={35}
                      className="mr-2"
                    />
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="bg-bgprimary p-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8 p-5 mt-6 mb-6">
          <div className="text-start md:w-[60%] lg:pr-20 flex flex-col justify-center">
            <h2
              className="text-2xl md:text-3xl font-semibold text-center md:text-start font-inria"
              style={{ color: "#5F5D5E" }}
            >
              {servicesCard2.title}
            </h2>
            <ul className="text-gray-600 mt-3 font-inter text-xl leading-normal font-light">
              {servicesCard2.content &&
                servicesCard2.content.length > 0 &&
                servicesCard2.content.map((item, index) => {
                  return (
                    <li className="flex items-start" key={index}>
                      <img
                        src={ellipse}
                        height={35}
                        width={35}
                        className="mr-2"
                      />
                      {item}
                    </li>
                  );
                })}
            </ul>
          </div>
          <img
            src={servicesCard2.img}
            alt="Identifying High-Potential Opportunities"
            className="h-[18rem] md:h-[20rem] object-cover md:w-[40%]"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceComponentInvest;
