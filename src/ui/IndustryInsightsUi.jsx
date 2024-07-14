/* eslint-disable react/prop-types */


const IndustryInsightsUi = ({data}) => {
  return (
    <div className="bg-gray-100 w-auto md:h-[22rem] p-5 mt-10  ">
    <div className="flex flex-col items-center"> 
      <div className="bg-[#4BA96A30] rounded-full w-fit h-fit p-5 mt-3 mb-3 flex justify-center items-center">
        <img alt="e-commerce" src={data?.icon} className="size-12" />
      </div>
      <h1 className="text-xl mt-3 mb-3 font-inria font-semibold text-center">
        {data?.title}
      </h1>
      <p className=" font-inter mt-3 mb-3">
        {data?.desc}
      </p>
     
    </div>
    </div>
  )
}

export default IndustryInsightsUi
