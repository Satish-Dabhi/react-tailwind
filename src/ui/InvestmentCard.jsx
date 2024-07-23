import PropTypes from "prop-types";
import ButtonPrimaryUi from "./ButtonPrimaryUi";

const InvestmentCard = ({
  title,
  subtitle,
  investment,
  ticketSize,
  roi,
  sector,
  image,
}) => {
  return (
    <div className="max-w-[700px] w-full h-auto p-8 lg:p-14 transition-shadow duration-300 bg-white rounded-none mx-4">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className=" rounded-full bg-gradient-to-br from-[#1FA0EB] to-[#125B85] flex items-center justify-center mb-4 md:mb-0 mr-3">
          <img
            src={image}
            alt="icon"
            className="w-[90px] h-auto"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="text-center md:text-left">
          <h6
            className="font-bold text-2xl md:text-3xl leading-relaxed font-inria text-left mb-2 md:mb-1"
            style={{ color: "#5F5D5E" }}
          >
            {title}
          </h6>
          <p
            className="font-light text-xl leading-relaxed font-inria text-left"
            style={{ color: "#5F5D5E" }}
          >
            {subtitle}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border-l-4 border-[#5F5D5E] px-3">
          <p
            className="font-bold leading-tight font-inria text-left mb-2"
            style={{ color: "#5F5D5E" }}
          >
            Total Investment Required
          </p>
          <h6
            className="text-xl md:text-2xl font-bold leading-tight font-helvetica text-left"
            style={{ color: "#5F5D5E" }}
          >
            {investment}
          </h6>
        </div>
        <div className="border-l-4 border-[#5F5D5E] px-3">
          <p
            className="font-bold leading-tight font-inria text-left mb-2"
            style={{ color: "#5F5D5E" }}
          >
            Ticket Size
          </p>
          <h6
            className="text-xl md:text-2xl font-bold leading-tight font-helvetica text-left"
            style={{ color: "#5F5D5E" }}
          >
            {ticketSize}
          </h6>
        </div>
        <div className="border-l-4 border-[#5F5D5E] px-3">
          <p
            className="font-bold leading-tight font-inria text-left mb-2"
            style={{ color: "#5F5D5E" }}
          >
            ROI (%)
          </p>
          <h6
            className="text-xl md:text-2xl font-bold leading-tight font-helvetica text-left"
            style={{ color: "#5F5D5E" }}
          >
            {roi}
          </h6>
        </div>
        <div className="border-l-4 border-[#5F5D5E] px-3">
          <p
            className="font-bold leading-tight font-inria text-left mb-2"
            style={{ color: "#5F5D5E" }}
          >
            Sector
          </p>
          <h6
            className="text-xl md:text-2xl font-bold leading-tight font-helvetica text-left"
            style={{ color: "#5F5D5E" }}
          >
            {sector}
          </h6>
        </div>
      </div>
      <div className="text-center md:text-left">
        <ButtonPrimaryUi text="Invest Now">Invest Now</ButtonPrimaryUi>
      </div>
    </div>
  );
};

InvestmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  investment: PropTypes.string.isRequired,
  ticketSize: PropTypes.string.isRequired,
  roi: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default InvestmentCard;
