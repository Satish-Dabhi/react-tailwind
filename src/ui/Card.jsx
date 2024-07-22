import { CardBody, CardHeader } from "@material-tailwind/react";
import PropTypes from "prop-types";

function Card({ imageSrc, altText, title, iconWidth }) {
  // Example content for each card
  const cardContent = {
    Guidance: {
      content:
        "Expert guidance, tailored strategies. Begin confidently with us on your financial journey toward success, wealth, stability, and prosperity. Achieve your dreams with our support.",
    },
    Transparency: {
      content:
        "Clear insights, integrity, and honesty in business. Trust us for transparency in every interaction, ensuring your peace of mind and confidence. We prioritize ethical practices and your best interests.",
    },
    Independence: {
      content:
        "Freedom to invest your way. Explore opportunities with confidence in our unwavering independence and commitment. Make informed decisions, leveraging our unbiased advice and support for your financial growth.",
    },
    Support: {
      content:
        "Dedicated assistance, exceptional service. Count on us for unwavering support, guiding you to financial prosperity. Our team is here to assist you at every step, ensuring your success and satisfaction.",
    },
    "Mission Statement": {
      content:
        "The mission of our company is to provide innovative investment solutions and strategic guidance. Our goal is to deliver superior returns to investors. Also, we are committed to fostering economic growth in the communities we serve.",
    },
    "Vision Statement": {
      content:
        "Our vision is to be recognized as a global leader in investment management. In addition to creating value for our investors and partners, we generate value for all stakeholders. By embracing innovation, integrity, and impact, we empower individuals and organizations to thrive.",
    },
    "Core Values": {
      content:
        "We conduct ourselves with honesty, transparency, and ethical integrity in all aspects of our business. We hold ourselves accountable to the highest standards of professionalism and adhere to the principles of fairness.",
    },
    "Retain Portfolio Ownership": {
      content: `Preserve your long-term investment strategy by keeping ownership of your securities while accessing immediate funds through a loan against listed stocks.`,
    },
    "Flexible Fund Utilization": {
      content: `Use funds for new investments, debt consolidation, or personal needs, offering flexibility to meet various financial goals.`,
    },
    "Efficient and Competitive": {
      content: `Enjoy a streamlined process and competitive rates, minimizing disruption to your investments and ensuring cost-effective financing solutions.`,
    },
    "Unlock Value": {
      content: `Convert your assets into capital that can be utilized for business growth, expansion initiatives, or debt consolidation, unlocking new financial opportunities.`,
    },
    "Rigorous Due Diligence": {
      content: `Ensure transparency and reliability through comprehensive audits and assessments conducted by reputable firms, safeguarding the integrity and value of your assets.`,
    },
    "Global Reach & Flexible Solutions": {
      content: `Access a diverse pool of international investors and benefit from customized financing solutions tailored to meet the specific needs and goals of your asset portfolio.`,
    },
    "Comprehensive Funding Process": {
      content:
        "Guiding fundraisers from onboarding to fund deployment with clarity and transparency.",
    },
    "Rigorous Verification Process": {
      content:
        "Ensuring authenticity through thorough KYC and document verification, enhancing investor confidence.",
    },
    "Flexible Investment Range": {
      content:
        "Supporting projects from USD 2 million and more, accommodating various stages of development.",
    },
  };

  // Retrieve content based on title
  const { content } = cardContent[title];

  return (
    <div className="w-full lg:w-80 flex flex-col items-center overflow-hidden border shadow-2xl bg-white z-10 transition-transform transform hover:scale-105 hover:shadow-xl">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="mx-auto w-24 h-24 bg-gradient-to-br from-[#1FA0EB] to-[#125B85] rounded-full flex items-center justify-center"
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={altText}
            className={`inset-0 object-cover rounded-full ${iconWidth}`}
          />
        )}
      </CardHeader>
      <CardBody className="text-center p-5 pt-2">
        <p className="text-blue-500 text-lg font-inria">{title}</p>
        <p className="text-gray-700 text-sm mt-3 mx-4 font-inter font-light text-base leading-[25px] tracking-[0.01em] text-center">
          {content}
        </p>
      </CardBody>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconWidth: PropTypes.string,
};

export default Card;
