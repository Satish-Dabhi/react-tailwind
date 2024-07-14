import InvestorPortFolioShowcase from '../components/investorRelation/InvestorPortFolioShowcase'
import AboutUsInvestorRelation from "../components/investorRelation/AboutUsInvestorRelation"
import HeroInvestorRelations from "../components/investorRelation/HeroInvestorRelations"
import WhyChooseInvestorRelation from "../components/investorRelation/WhyChooseInvestorRelation"
import WhyInvestWithEpiidosis from "../components/investorRelation/WhyInvestWithEpiidosis"
import CurrentInvestmentOpportunities from '../components/investorRelation/CurrentInvestmentOpportunities'
import InvestorProposal from '../components/investorRelation/InvestorProposal'
import InvestorBenefit from '../components/investorRelation/InvestorBenefit'
import GetAFreeConsultation from '../components/home/GetAFreeConsultation'
const InvestorRelations = () => {
  return (
    <>
    <HeroInvestorRelations/>
    <AboutUsInvestorRelation />
    <WhyInvestWithEpiidosis/>
    <InvestorPortFolioShowcase/>
    <CurrentInvestmentOpportunities/>
    <InvestorProposal />
    <InvestorBenefit/>
    <WhyChooseInvestorRelation />
    <GetAFreeConsultation/>
    </>
  )
}

export default InvestorRelations
