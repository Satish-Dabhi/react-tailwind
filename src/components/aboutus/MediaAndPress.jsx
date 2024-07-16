import mediaImage from "/img/aboutus/finacial.png"; // Update the path to your actual image
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";

const MediaAndPress = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-0">
      <div className="grid grid-cols-0 md:grid-cols-2 pt-0 pr-28 pb-0 pl-28"> 
               <div className="flex flex-col justify-center">
            <div className="text-2xl md:text-4xl font-semibold">
              <span className="font-inria">Media and Press</span>
              <div className="bg-darkyellow h-1 mt-2 w-[0rem]"></div>
            </div>
            <p className="text-gray-500 mt-4">
            Explore our latest announcements, press releases, and company news at Epiidosis Investments LLC. From new investment funds in renewable energy to expansions in emerging markets, our press releases keep you updated on our strategic moves and industry recognitions.
             Visit our Media Center for comprehensive press kits and resources, ensuring you stay connected with our latest developments in the financial services sector
            </p>
            <p className="text-md font-inter mt-4 text-justify">
              Epiidosis Investments LLC features prominently in leading publications and news outlets such as Bloomberg, Financial Times, and CNBC. Delve into our media coverage to learn more about our investment strategies, market insights, and interviews with our leadership team.
              For a deeper understanding of our impact and achievements, explore our Media Center for detailed press kits and additional resources.
            </p>
            <div className="mt-2 text-gray-500">
              <div className="flex gap-2 mt-5 md:mt-2">
                <ButtonPrimaryUi>
                  <span className="font-inria">Read More</span>
                </ButtonPrimaryUi>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img alt="mediaImage" src={mediaImage} className="w-[40rem] p-[7rem]" />
          </div>
        </div>
      </div>
    </>
  );
};


export default MediaAndPress;
