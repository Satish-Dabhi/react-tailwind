import Ujjwall from "../../public/img/aboutus/Ujjwal.png";
import Mohit from "../../public/img/aboutus/mohit-rana.png";
import Narendar from "../../public/img/aboutus/Narendar.jpg";
import { useState } from "react";

const teamMembers = [
  {
    name: "Narender Chauhan",
    title: "Director",
    image: Narendar,
    desc: 'With 15+ years of experience in Business Development and Administration, Narender Kumar Chauhan is based in Epiidosis India and brings extensive experience and strategic insights to our leadership team.'
  },
  {
    name: "Mohit Rana",
    title: "CEO/Director",
    image: Mohit,
    desc: 'With 17+ years of sales and business development experience in the finance industry, Mohit Rana drives our business development strategies and spearheads our growth initiatives.'
  },
  {
    name: "Ujjwal Singh",
    title: "Director Administration",
    image: Ujjwall,
    desc: `With 10+ years of experience, Ujjwal Singh is based in our India office and ensures seamless operations and efficient administration, contributing to our company's success.`
  },
];

const OurPartner = () => {
  const [activeMember, setActiveMember] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMember(index);
  };

  const handleMouseLeave = () => {
    setActiveMember(null);
  };

  return (
    <div className="text-center py-10 bg-gray-50 container mx-auto p-3">
      <div className="text-center font-inria my-5">
        <p className="text-lg font-inria my-2">Our Team</p>
        <p className="text-2xl font-semibold">Executive Management</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-[55rem] mx-auto">
        {teamMembers.map((member, index) => (
          <div
            className={`lg:mb-[10rem] mb-[4rem] py-6 bg-transparent transform transition-all duration-300 flex justify-center shadow-2xl ${
              activeMember === index ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <img
              src={member.image}
              className="relative"
              height={250}
              width={'auto'}
            />
            <div className="absolute bg-white p-3 text-center top-[89%] shadow-2xl">
              <p className="font-inria text-base font-semibold">
                {member.name}
              </p>
              <p className="font-inria text-[#339FDE] text-sm font-light mb-3">
                {member.title}
              </p>
              <p className="font-inter text-[#5F5D5E] text-xs font-light px-4 pb-3">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
