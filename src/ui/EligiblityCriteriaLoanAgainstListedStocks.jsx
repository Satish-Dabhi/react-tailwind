/* eslint-disable react/prop-types */
import ButtonPrimaryUi from "./ButtonPrimaryUi";

const EligiblityCriteriaLoanAgainstListedStocks = ({ data }) => {
 
  return (
    <div className="bg-bgprimary mt-[16rem]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-5 items-center ">
          <div className="p-5">
            <img alt="exploring" src={data?.img} />
          </div>
          <div>
            <div className="text-xl md:text-4xl font-semibold mt-12">
              <span className="font-inria">{data?.titleOne}</span>
              <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
            </div>
            <p className="text-lg mt-5">{data?.titleTwo}</p>
            {data?.subsetion.map((items, index) => {
            
              return (
                <div key={index}>
                  <div className="flex gap-5 mt-5 mb-6 items-center">
                    <div className="bg-[#339FDE1A] p-5">
                      <img alt="logo" src={items?.logo} />
                    </div>
                    <div>
                      <p className="text-xl font-semibold font-inria">
                        {items?.title}
                      </p>
                      <ul className="font-intern list-disc ml-5">
                        <li>{items?.list1}</li>
                        <li>{items?.list2}</li>
                        <li>{items?.list3}</li>
                      </ul>
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
  );
};

export default EligiblityCriteriaLoanAgainstListedStocks;
