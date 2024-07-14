import SuccessStoriesUi from "../../ui/SuccessStoriesUi";
const SuccessStoriesData = {
    successStore:
      "These success stories showcase how experienced finance companies navigate challenges, innovate, and drive positive impact in the financial sector, reaffirming their leadership and resilience in an ever-changing environment.",
  };
  
  const secondSectionData ={
    title:"Explore Asset Monetization opportunities",
    desc:"Lorem ipsum dolor sit amet consectetur. Egestas sit id varius tellus commodo congue ut. Maecenas nec facilisis massa diam.",
    buttonText:"Monetize Your Assets Today"
  }
  
  const quoteData = [
    {
      desc: "A multinational corporation, had several underutilized properties in prime locations across the globe. By implementing a strategic asset monetization plan",
      author: "Samuel Wilson",
    },
    {
      desc: "Technology firm, owned a valuable portfolio of patents and trademarks developed through years of research and innovation",
      author: "Daniel Taylor",
    },
    {
      desc: "A manufacturing company, faced cash flow challenges due to excess inventory and outdated equipment. Through asset monetization strategies such as equipment leasing and sale-leaseback transactions",
      author: "Christopher Anderson",
    },
    {
      desc: "A conglomerate with diverse business interests, decided to divest non-core assets to streamline operations and focus on core businesses",
      author: "David Brown",
    },
  ];
const AssetMonetizationSuccessStories = () => {
  return (
    <>
         <SuccessStoriesUi
        quoteData={quoteData}
        successData={SuccessStoriesData}
        secondSectionData={secondSectionData}
      />
    </>
  )
}

export default AssetMonetizationSuccessStories
