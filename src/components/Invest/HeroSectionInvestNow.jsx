import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png"; // Update the path to your background image

const HeroSectionInvestNow = () => {
  return (
    <div
      className="relative w-full h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${herosectionfundraising})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6 py-8 text-left">
        <h1 className="text-white text-2xl md:text-5xl font-bold mb-8 font-inria">
          Why Choose Epiidosis Investments <br />
          as your Investing Partner?
        </h1>
        <p className="text-white text-base md:text-lg mb-8 mt-4 font-inria">
          Our portfolio includes assets from financial services, fintech,
          commercial enterprises, agriculture, energy, and many other sectors.
          Our portfolio management ensures that capital is deployed where demand
          is strong. Corporate governance and ethics drive our approach to risk
          management.
        </p>
        <ButtonPrimaryUi>
          <span className="flex items-center gap-2 font-inria">
            Invest Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </ButtonPrimaryUi>
      </div>
    </div>
  );
};

export default HeroSectionInvestNow;
