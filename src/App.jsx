import { Route, Routes } from "react-router-dom/dist";
import "./App.css";
import AppLayout from "./layout/AppLyout";
import AboutUs from "./pages/AboutUs";
import AssetMonetization from "./pages/AssetMonetization";
import ContactUsPage from "./pages/ContactUsPage";
import Home from "./pages/Home";
import IndustryInsightsPage from "./pages/IndustryInsightsPage";
import InvestorRelations from "./pages/InvestorRelations";
import LoanAgainstListedStocks from "./pages/LoanAgainstListedStocks";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import StructuredFinance from "./pages/StructuredFinance";
import TermsOfServicePage from "./pages/TermsOfServicePage";

import SidebarLayout from "./layout/SidebarLayout";
import BillingPaymentsPage from "./pages/BillingPaymentsPage";
import Blogs from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import EmailSupport from "./pages/EmailSupport";
import EmergencySupportPage from "./pages/EmergencySupportPage";
import Invest from "./pages/Invest";
import KnowledgeBase from "./pages/KnowledgeBase";
import KnowledgeCenterSection from "./pages/KnowledgeCenterSection";
import LiveChat from "./pages/LiveChat";
import SupportPage from "./pages/SupportPage";
import SupportRequestPage from "./pages/SupportRequestPage";
import TechnicalAssistancePage from "./pages/TechnicalAssistancePage";
import VideoTutorial from "./pages/VideoTutorial";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/invest-with-us" element={<Invest />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogsDetails" element={<BlogDetails />} />
        <Route path="/structured-finance" element={<StructuredFinance />} />
        <Route path="/asset-monetization" element={<AssetMonetization />} />
        <Route
          path="/loan-against-stocks"
          element={<LoanAgainstListedStocks />}
        />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/terms-of-services" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/investorrelation" element={<InvestorRelations />} />
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
