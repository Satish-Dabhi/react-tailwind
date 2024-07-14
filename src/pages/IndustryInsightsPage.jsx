import FeaturedArticles from "../components/industryInsight/FeaturedArticles"
import GuestBlogsAndOpinions from "../components/industryInsight/GuestBlogsAndOpinions"
import HeroSectionIndustry from "../components/industryInsight/HeroSectionIndustry"
import IndustryInsights from "../components/industryInsight/IndustryInsights"
import LatestUpdates from "../components/industryInsight/LatestUpdates"
import VideoInsights from "../components/industryInsight/VideoInsights"
import DarkBgSecond from "../ui/DarkBgSecond"
import SubscribeNowUi from "../ui/SubscribeNowUi"
import UpcomingEventsUi from "../ui/UpcomingEventsUi"
const DarkBgSecondData = {
  title: "Welcome to our March Finance Newsletter",
  date:"2 march 2024",
  subTitle:
    "Lorem ipsum dolor sit amet consectetur. Egestas sit id varius tellus commodo congue ut. Maecenas nec facilisis massa diam.",
  buttonText: "Download Newsletter",
};
const IndustryInsightsPage = () => {
  return (
    <div>
     <HeroSectionIndustry/>
     <LatestUpdates />
     <IndustryInsights />
     <FeaturedArticles/>
     <VideoInsights />
     <DarkBgSecond data={DarkBgSecondData} />
     <GuestBlogsAndOpinions />
     <UpcomingEventsUi />
     <SubscribeNowUi/>
    </div>
  )
}

export default IndustryInsightsPage
