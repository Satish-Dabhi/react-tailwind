import PropTypes from "prop-types";
import partner1 from "/img/aboutus/partner1.png";
import partner2 from "/img/aboutus/partner2.png";
import partner3 from "/img/aboutus/partner3.png";

const OurPartner = () => {
  return (
    <div>
      <div className="text-center font-inria my-5">
        <p className="text-lg font-inria my-2">Our Partner</p>
        <p className="text-2xl font-semibold">Executive Management</p>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <DetailCard
            imagePath={partner1}
            name="Narender Chauhan"
            designation="Director"
          />
          <DetailCard
            imagePath={partner2}
            name="Mohit Rana"
            designation="CEO/Director"
          />
          <DetailCard
            imagePath={partner3}
            name="Ujjwal Singh"
            designation="Director Administration"
          />
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ imagePath, name, designation }) => {
  return (
    <div className="shadow-xl m-3 relative">
      <img src={imagePath} height={250} width={250} className="relative" />
      <div className="absolute bg-white p-3 w-[12rem] text-center top-[89%] left-[12%]">
        <p className="font-inria text-base font-semibold">{name}</p>
        <p className="font-inria text-[#339FDE] text-sm font-light">
          {designation}
        </p>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
};

export default OurPartner;
