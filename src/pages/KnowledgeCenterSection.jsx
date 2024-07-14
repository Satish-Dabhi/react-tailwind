import HeroSectionKnowledge from "../components/knowledgeCenterSection/HeroSectionKnowledge"
import KnowledgeFAQ from "../components/knowledgeCenterSection/KnowledgeFAQ"
import KnowledgeTabsComponents from "../components/knowledgeCenterSection/KnowledgeTabsComponents"
import { Footer } from "../components/layoutsComponents/Footer"
import Navbar from "../components/layoutsComponents/Navbar"


function KnowledgeCenterSection() {
    const color = "primary"
  return (
    <div>
        <Navbar color={color}/>
        <HeroSectionKnowledge color={color} />
        <KnowledgeTabsComponents />
        <KnowledgeFAQ />
        <Footer/>
    </div>
  )
}

export default KnowledgeCenterSection