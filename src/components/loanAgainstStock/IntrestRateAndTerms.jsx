import intrestratesandterm from "/img/loanagainstlistedstocks/intrestratesandterm.png";

import discount from "/img/loanagainstlistedstocks/discount.png";
import prepayment from "/img/loanagainstlistedstocks/prepayment.png";
import fess from "/img/loanagainstlistedstocks/fees.png";

const gridData = [
  {
    logo: discount,
    title: "Discounts and Incentives",
    desc: "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
  },
  {
    logo: discount,
    title: "Discounts and Incentives",
    desc: "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
  },
  {
    logo: prepayment,
    title: "Discounts and Incentives",
    desc: "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
  },
  {
    logo: fess,
    title: "Discounts and Incentives",
    desc: "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
  },
];

const IntrestRateAndTerms = () => {
  return (
    <div className="container mx-auto p-5 mt-12 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-5 items-center">
        <div className="text-xl md:text-4xl  ">
          <span className="font-inria ">Interest Rates and Terms</span>
          <div className="bg-primary h-1 ml-2 mt-2  w-[8rem] "></div>

          <p className="text-sm mt-8 font-inter">
            Lorem ipsum dolor sit amet consectetur. Vulputate magna fermentum
            platea tincidunt commodo. Quam massa vel et ornare proin vitae vitae
            massa. Quis justo venenatis nulla placerat eu arcu erat id eget.
            Velit ut sit ac fusce et.
          </p>
          <div className="grid grid-cols-2 justify-items-center mt-10 p-2 gap-8">
            {gridData.map((item, index) => {
              return <div key={index}>
              <div className="bg-bgprimary w-fit h-fit p-4"><img alt="icon" src={item?.logo} /></div>
                
                <p className="text-lg mt-2 font-inria">Discounts and Incentives</p>
                <p className="text-sm font-inter">Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards</p>
              </div>;
            })}{" "}
          </div>
        </div>
        <div className="mt-12 p-5">
          <img alt="intrestratesandterm" src={intrestratesandterm} />
        </div>
      </div>
    </div>
  );
};

export default IntrestRateAndTerms;
