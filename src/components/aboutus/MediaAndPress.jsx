/* eslint-disable react/no-unescaped-entities */
import finacial from "/img/aboutus/finacial.png";
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";

const MediaAndPress = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="text-2xl md:text-4xl font-semibold text-center">
            <span className="font-inria">Media and Press</span>
            <div className="bg-darkyellow h-1 ml-2 mt-2  w-[8rem] "></div>
          </div>
        </div>
        <p className="text-center text-gray-500">
          Stay updated with the latest news, press releases, and media coverage
          featuring Epiidosis Investments LLC:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="flex justify-center ">
          <img alt="finacial" src={finacial} className="w-[40rem] p-[7rem]" />
        </div>
        <div className="p-10 flex justify-center flex-col">
          <p className="font-inria text-lg md:text-2xl mt-4 font-semibold">
            News and Press Release
          </p>
          <p className="text-md font-inter mt-2 text-justify">
            Explore our latest announcements, press releases, and company news:
          </p>
          <ul className="list-disc pl-10 text-md font-inter text-justify">
            <li>
              Press Release: Epiidosis Investments Expands Presence in Emerging
              Markets
            </li>
            <li>
              Company News: Epiidosis Investments Named Top Performer in
              Financial Services Sector
            </li>
            <li>
              Press Release: Epiidosis Investments Launches New Investment Fund
              for Renewable Energy Projects
            </li>
          </ul>

          <p className="font-inria text-lg font-semibold mt-4 md:text-2xl">
            Media Coverage
          </p>
          <p className="text-sm font-inter mt-2 md:text-lg text-justify">
            Discover media coverage featuring Epiidosis Investments LLC in
            leading publications and news outlets:
          </p>
          <ul className="list-disc pl-10 text-sm font-inter md:text-md text-justify">
            <li>
              Bloomberg: Epiidosis Investments Leads Investment Round in Tech
              Startup
            </li>
            <li>
              Financial Times: Epiidosis Investments Recognized for Excellence
              in Investment Management
            </li>
            <li>
              CNBC: Interview with CEO of Epiidosis Investments on Market Trends
              and Outlook
            </li>
          </ul>
          <p className="font-inria text-2xl font-semibold mt-4">
            Link to Media Center for Press Kit and Resources
          </p>
          <p className="text-sm font-inter mt-2 text-justify">
            For press kits, media resources, and additional information, please
            visit our Media Center: Visit Our Media Center
          </p>
          <div className="mt-2 text-gray-500">
            <div className="flex gap-2 mt-5 md:mt-2 ">
              <ButtonPrimaryUi>
                <span className="font-inria">Read More</span>
              </ButtonPrimaryUi>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaAndPress;
