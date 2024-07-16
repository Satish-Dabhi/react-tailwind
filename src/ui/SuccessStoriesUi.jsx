/* eslint-disable react/prop-types */
import QuoteCard from "../ui/QuoteCard";
import success from "/img/fundraising/success.png";
import DarkBgSecond from "./DarkBgSecond";

const DarkBgSecondData = {
  title: "Explore Asset Monetization opportunities",
  subTitle:
    "Lorem ipsum dolor sit amet consectetur. Egestas sit id varius tellus commodo congue ut. Maecenas nec facilisis massa diam.",
  buttonText: "Monetize Your Assets Today",
};

const SuccessStoriesUi = ({ quoteData, successData }) => {
  return (
    <>
      <div className="container mx-auto flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br"></div>
          <div className="mt-10 relative z-10 text-center">
            <span className="text-2xl md:text-4xl font-inria">Success Stories</span>
            <div className="flex justify-center">
              <div className="bg-primary h-1 mt-2 w-[10rem]"></div>
            </div>
            <p className="mt-5 mb-8 font-inter">{successData?.successStore}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${success})`,
        }}
        className="bg-cover bg-center md:h-screen flex justify-center items-center"
      >
        <div className="grid md:grid-cols-2 p-5 md:gap-5 w-full container mx-auto">
          {quoteData.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="max-w-xs md:max-w-full">
                <QuoteCard data={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <DarkBgSecond data={DarkBgSecondData} />
    </>
  );
};

export default SuccessStoriesUi;
