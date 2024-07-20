import { Routes, Route } from "react-router-dom/dist";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLyout";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import StructuredFinance from "./pages/StructuredFinance";
import AssetMonetization from "./pages/AssetMonetization";
import LoanAgainstListedStocks from "./pages/LoanAgainstListedStocks";
import InvestorRelations from "./pages/InvestorRelations";
import ContactUsPage from "./pages/ContactUsPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import IndustryInsightsPage from "./pages/IndustryInsightsPage";

import KnowledgeCenterSection from "./pages/KnowledgeCenterSection";
import SupportPage from "./pages/SupportPage";
import SidebarLayout from "./layout/SidebarLayout";
import KnowledgeBase from "./pages/KnowledgeBase";
import VideoTutorial from "./pages/VideoTutorial";
import SupportRequestPage from "./pages/SupportRequestPage";
import LiveChat from "./pages/LiveChat";
import EmailSupport from "./pages/EmailSupport";
import TechnicalAssistancePage from "./pages/TechnicalAssistancePage";
import BillingPaymentsPage from "./pages/BillingPaymentsPage";
import EmergencySupportPage from "./pages/EmergencySupportPage";
// import LeadForm from "./components/Invest/LeadForm";
import Invest from "./pages/Invest";
import Blogs from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/investwithus" element={<Invest />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogsDetails" element={<BlogDetails />} />
        <Route path="/structuredfinance" element={<StructuredFinance />} />
        {/* <Route path="/structuredfinance" element={<StructuredFinance />} /> */}
        <Route path="/assetmonetization" element={<AssetMonetization />} />
        {/* <Route path="/test" element={<LeadForm />} /> */}
        <Route
          path="/loanssecuredbylistedstocks"
          element={<LoanAgainstListedStocks />}
        />
        <Route path="/investorrelation" element={<InvestorRelations />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/termsofservices" element={<TermsOfServicePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="/industryinsight" element={<IndustryInsightsPage />} />

        <Route element={<SidebarLayout />}>
          <Route index path="/support" element={<SupportPage />} />
          <Route path="/knowledge/base" element={<KnowledgeBase />} />
          <Route path="/video/tutorial" element={<VideoTutorial />} />
          <Route
            path="/support/request/form"
            element={<SupportRequestPage />}
          />
          <Route path="/live/chat" element={<LiveChat />} />
          <Route path="/email/support" element={<EmailSupport />} />
          <Route
            path="/technical/assistance"
            element={<TechnicalAssistancePage />}
          />
          <Route path="/billing/payments" element={<BillingPaymentsPage />} />
          <Route path="/emergency/support" element={<EmergencySupportPage />} />
        </Route>
      </Route>

      <Route path="/knowledge" element={<KnowledgeCenterSection />} />
    </Routes>
  );
};

export default App;
