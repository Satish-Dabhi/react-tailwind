/* eslint-disable react/prop-types */

import ButtonPrimaryUi from "./ButtonPrimaryUi"


const DarkBgSecond = ({data}) => {
  console.log(data)
  return (
    <div className="bg-bgsecond">
    <div className="container  mx-auto grid md:grid-cols-2 justify-between justify-items-center items-center p-5 ">
      <div className="text-white md:flex md:gap-2 flex flex-col mt-10 mb-10 ">
        <p className="text-xl md:text-2xl font-inria">
         {data?.title}
        </p>
        <p className="text-md md:text-lg font-inria">
         {data?.date? data?.date :null}
        </p>
        <p className="md:text-lg  font-inter">
          {data?.subTitle}
        </p>
      </div>
      <div className="mt-5 md:mt-0">
        <ButtonPrimaryUi><span className="text-sm md:text-lg font-inria">{data?.buttonText}</span> </ButtonPrimaryUi>
      </div>
    </div>
  </div>
  )
}

export default DarkBgSecond
