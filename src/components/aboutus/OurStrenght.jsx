import ellipse from "/img/aboutus/ellipse.png";

const OurStrenght = () => {
  return (
    <div className="container mx-auto">
      <div className="flex max-lg:flex-col my-3">
        <div className="flex flex-col border-r-2 border-[#5F5D5E] align-right">
          <div className="flex flex-col my-8 ml-36 mr-16">
            <div className="flex justify-end items-center">
              <p className="text-2xl font-inria mb-3">Established</p>
              <img src={ellipse} height={35} width={35} />
            </div>
            <div className="text-right  font-inter text-base font-light ">
              Founded in 2020, Epiidosis Investments LLC set out to provide
              access to diversified high-potential investments in the Middle
              East and East Africa.
            </div>
          </div>
          <div className="flex flex-col mb-8 ml-36 mr-16">
            <div className="flex justify-end items-center">
              <p className="text-2xl font-inria mb-3">Strategic Partnerships</p>
              <img src={ellipse} height={35} width={35} />
            </div>
            <div className="text-right  font-inter text-base font-light ">
              Forged strategic alliances with global financial institutions,
              enabling us to offer attractive investment opportunities through
              our capital markets, private equity, and private debt platforms.
            </div>
          </div>
        </div>
        <div className="flex flex-col align-left">
          <div className="flex flex-col my-8 mr-32 ml-16">
            <div className="flex items-center">
              <img src={ellipse} height={35} width={35} />
              <p className="text-2xl font-inria mb-3 mb-3">Our Investment Expert:</p>
            </div>
            <div className="font-inter text-base font-light">
              Within a few years, we built a reputation as investment experts,
              with successful ventures across various sectors including finance,
              fintech, energy, and healthcare.
            </div>
          </div>
          <div className="flex flex-col mb-8 mr-32 ml-16">
            <div className="flex items-center">
              <img src={ellipse} height={35} width={35} />
              <p className="text-2xl font-inria">Global Expansion:</p>
            </div>
            <div className="font-inter text-base font-light mb-3">
              Expanded our portfolio globally, managing credit and equity
              investments that enhanced diversification and liquidity for our
              investors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrenght;
