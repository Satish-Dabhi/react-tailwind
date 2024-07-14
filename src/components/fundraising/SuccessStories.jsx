import SuccessStoriesUi from "../../ui/SuccessStoriesUi";

const SuccessStoriesData = {
  successStore:
    "These success stories showcase how experienced finance companies navigate challenges, innovate, and drive positive impact in the financial sector, reaffirming their leadership and resilience in an ever-changing environment.",
};

const secondSectionData ={
  title:"Exploring Fundraising Strategies for Success",
  desc:"Lorem ipsum dolor sit amet consectetur. Egestas sit id varius tellus commodo congue ut. Maecenas nec facilisis massa diam.",
  buttonText:"Monetize Your Assets Today"
}

const quoteData = [
  {
    desc: "Financial Group, with over 50 years of experience in the finance industry, has consistently demonstrated resilience and adaptability in navigating market challenges.",
    author: "Michael Johnson",
  },
  {
    desc: "Summit Capital Management, with a proven track record spanning several decades, has consistently delivered superior investment performance for its clients.",
    author: "James Jones",
  },
  {
    desc: "Pinnacle Investment Group, with decades of experience in asset management, continues to innovate and evolve to meet the changing needs of investors.",
    author: "Robert Davis",
  },
  {
    desc: "Everest Insurance Solutions, a trusted name in the insurance industry for over 75 years, has been a beacon of stability and security for individuals and businesses alike.",
    author: "Richard Taylor",
  },
];
const SuccessStories = () => {
  return (
    <>
      <SuccessStoriesUi
        quoteData={quoteData}
        successData={SuccessStoriesData}
        secondSectionData={secondSectionData}
      />
    </>
  );
};

export default SuccessStories;
