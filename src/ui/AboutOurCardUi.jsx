import LatestCardUi from "./LatestCardUi";
import aboutassest from "/img/assetmonetization/aboutasset.png";
import dollorhand from "/img/assetmonetization/dolloricon.png";
import handhome from "/img/assetmonetization/handhome.png";
import laptopicon from "/img/assetmonetization/laptopicon.png";

/* eslint-disable react/prop-types */
const AboutOurCardUi = ({ data }) => {
  console.log(data);

  const subData = data?.iconPlusData?.map((item, index) => {
    console.log(item);
    return (
      <div key={index}>
        <LatestCardUi data={item} />
      </div>
    );
  });

  return (
    <section className="container mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Left Column */}
        <div className="col-span-2">
          <div className="text-xl md:text-2xl font-semibold font-inria">
            <span className="whitespace-nowrap overflow-hidden">{data?.title}</span>
            <div className="bg-primary h-1 ml-2 mt-2 w-[8rem] "></div>
          </div>
          <p className="mt-6 font-inter">{data?.desc}</p>
          <div className="mt-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src={dollorhand} alt="Dollar Hand" className="w-[70px] h-[70px]" />
              <div>
                <h3 className="text-lg font-semibold">Unlock Value:</h3>
                <p className="text-sm">Convert your assets into capital that can be utilized for business growth, expansion initiatives, or debt consolidation, unlocking new financial opportunities.</p>
                {/* <p className="text-sm">Another line of subheading.</p> */}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={handhome} alt="Hand Home" className="w-[70px] h-[70px]" />
              <div>
                <h3 className="text-lg font-semibold">Rigorous Due Diligence:</h3>
                <p className="text-sm">Ensure transparency and reliability through comprehensive audits and assessments conducted by reputable firms, safeguarding the integrity and value of your assets.</p>
                {/* <p className="text-sm">Another line of subheading.</p> */}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={laptopicon} alt="Laptop Icon" className="w-[70px] h-[70px]" />
              <div>
                <h3 className="text-lg font-semibold">Global Reach and Flexible Solutions:</h3>
                <p className="text-sm">Access a diverse pool of international investors and benefit from customized financing solutions tailored to meet the specific needs and goals of your asset portfolio.</p>
                {/* <p className="text-sm">Another line of subheading.</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4 flex justify-center items-center">
          <div
            className="bg-gray-00 flex justify-center items-center"
            style={{ width: '1031px', height: '574px' }}
          >
            <img
              src={aboutassest}
              alt="About Asset Monetization"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mb-12 md:grid-cols-3 md:gap-2 mt-12">
        {subData}
      </div>
    </section>
  );
};

export default AboutOurCardUi;