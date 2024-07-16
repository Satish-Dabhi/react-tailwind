import { Carousel } from "@material-tailwind/react";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";
import { BreadcrumbsDefault } from "../../ui/BreadcrumbsDefault";
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import Card from "../../ui/Card";

const breadcrumbs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Our Services",
    link: "/aboutus",
  },
  {
    title: "Fundraising",
    link: "/aboutus",
  },
];

const cards = [
  {
    imageSrc: "/img/home/image1.png",
    altText: 'Unlock Value',
    title: 'Unlock Value',
    content: `Convert your assets into capital that can be utilized for business growth, expansion initiatives, or debt consolidation, unlocking new financial opportunities.`,
  },
  {
    imageSrc: "/img/home/image2.png",
    altText: 'Rigorous Due Diligence',
    title: 'Rigorous Due Diligence',
    content: `Ensure transparency and reliability through comprehensive audits and assessments conducted by reputable firms, safeguarding the integrity and value of your assets.`,
  },
  {
    imageSrc: "/img/home/image3.png",
    altText: 'Global Reach & Flexible Solutions',
    title: 'Global Reach & Flexible Solutions',
    content: `Access a diverse pool of international investors and benefit from customized financing solutions tailored to meet the specific needs and goals of your asset portfolio.`,
  },
];

const HeroSectionAssetMonetization = () => {
  return (
    <div className="relative w-full max-h-auto sm:min-h-[55rem] 2xl:min-h-[55rem]">
      <Carousel>
        <div
          style={{ backgroundImage: `url(${herosectionfundraising})` }}
          className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[600px]"
        >
          <div className="absolute inset-0 flex flex-col container mx-auto">
            <BreadcrumbsDefault data={breadcrumbs} />
            <div className="ml-12">
              <p className="text-white mt-5 text-xl md:text-start md:text-4xl font-inria">
                Unlock the Value of Your Assets with Epiidosis Investments
              </p>
              <p className="md:w-[56%] md:text-lg text-gray-400 mt-1 font-inter">
                Epiidosis Investments provides access to a diverse range of investment opportunities across different sectors, both locally and globally. With a focus on high-demand sectors and strong government priorities, investors can explore avenues for substantial growth potential.
              </p>
              <div className="w-fit mt-8">
                <ButtonPrimaryUi>
                  <span className="flex items-center gap-2 font-inria">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </ButtonPrimaryUi>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="md:absolute w-full flex justify-center items-center md:h-[25%] h-[40%]">
        <div className="flex flex-col md:flex-row gap-5 p-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAssetMonetization;
