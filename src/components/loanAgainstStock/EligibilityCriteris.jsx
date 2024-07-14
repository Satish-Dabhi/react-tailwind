import assetmonetization from "/img/assetmonetization/assetmonetization.png";
import baglogo from "/img/loanagainstlistedstocks/baglogo.png";

import EligiblityCriteriaLoanAgainstListedStocks from "../../ui/EligiblityCriteriaLoanAgainstListedStocks";
const EligibillyCardData = {
  img: assetmonetization,
  titleOne: "Eligibility Criteria",
  titleTwo: "Key Points of Eligibility Criteria",
  subsetion: [
    {
      logo: baglogo,
      title: "Who Qualifies for Stock-Backed Loans:",
      list1:
        "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
      list2: "Minimum value of stocks eligible for collateralization may vary.",
      list3:
        "Applicants must meet our creditworthiness and risk assessment criteria.",
    },
    {
      logo: baglogo,
      title: "Key Requirements:",
      list1:"Valid identification documents.",
      list2: "Proof of ownership for listed stocks.",
      list3:
        "Applicants must meet our creditworthiness and risk assessment criteria.",
    }
  ],
};
const EligibilityCriteris = () => {
  return (
    <>
      <EligiblityCriteriaLoanAgainstListedStocks data={EligibillyCardData} />
    </>
  );
};

export default EligibilityCriteris;
