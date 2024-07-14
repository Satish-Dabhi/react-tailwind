/* eslint-disable react/prop-types */
import { useState } from "react";
import ButtonPrimaryUi from "./ButtonPrimaryUi";

const CardImgLeftRightContent = ({ data }) => {
  const [textHide,setTextHide] = useState()
  const textToggle = ()=>{
    setTextHide(!textHide)
  }
  return (
    <div className="bg-bgprimary mt-[10rem]">
      <div className="container mx-auto">
        <div className="grid justify-items-center">
          <div className="text-xl md:text-4xl font-semibold mt-12">
            <span className="font-inria">{data?.titleOne}</span>
            <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
          </div>
          <p className="text-lg mt-5 w-[80%]">{data?.titleTwo}</p>
        </div>
       
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-5 items-center ">
            <div className="p-5">
              <img alt="exploring" src={data?.img} />
            </div>
            <div>
              {data?.subsetion.map((items, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-5 mt-5 mb-6 items-center">
                      <div className="bg-[#339FDE1A] p-5">
                        <img alt="logo" src={items?.logo} className="w-[10rem] h-[2rem]"/>
                      </div>
                      <div>
                        <p className="text-xl font-semibold font-inria">
                          {items?.title}
                        </p>
                        <p className={`'font-inter ${textHide ? '':'line-clamp-3'} `}>{items?.subTitle}</p>
                        <span onClick={textToggle} className="text-primary cursor-pointer ">view more</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="flex gap-5 mt-5 mb-5">
            <div>🔵</div>
            <div>
              <p className="text-lg font-semibold">{data?.subTitleTwo}</p>
              <p>
                {data?.subDescTwo}
              </p>
            </div>
          </div> */}
              <ButtonPrimaryUi>View More</ButtonPrimaryUi>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImgLeftRightContent;
