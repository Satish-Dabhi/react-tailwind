/* eslint-disable react/prop-types */
import ButtonPrimaryUi from "./ButtonPrimaryUi";
 // Adjust the path as per your actual file structure

const ExploringOptionsUi = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-[13rem] bg-bgprimary">
      

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
          <div className="p-5 md:w-[80%] mt-12 md:mt-0 flex justify-center">
            <img alt="exploring" src={data?.img} className="max-w-full h-auto" />
          </div>
          
          <div className="mb-12">
          <div className="w-fit mt-12 text-2xl md:text-4xl font-semibold md:mt-12 grid justify-items-center">
          <span className="font-inria">{data?.titleOne}</span>
          <div className="bg-primary h-1 ml-2 mt-2 w-[10rem]"></div>
        </div>
            <p className="text-lg mt-2 font-inter">{data?.titleTwo}</p>
            <div className="flex gap-5 mt-5">
              <div className="md:mt-2">🔵</div>
              <div>
                <p className="text-xl font-semibold font-inria">
                  {data?.subtTitleOne}
                </p>
                <p className="font-inter">{data?.subDescOne}</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5 mb-5">
              <div className="mt-2">🔵</div>
              <div>
                <p className="text-xl font-semibold font-inria">
                  {data?.subTitleTwo}
                </p>
                <p className="font-inter">{data?.subDescTwo}</p>
              </div>
            </div>
            
            <ButtonPrimaryUi >
              <span className="font-inria">View More</span>
            </ButtonPrimaryUi>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploringOptionsUi;
