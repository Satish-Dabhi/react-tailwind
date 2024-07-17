import Ujjwall from "../../public/img/aboutus/Ujjwal.png";
import Mohit from "../../public/img/aboutus/mohit-rana.png";
import Narendar from "../../public/img/aboutus/Narendar.jpg";
import { useState } from "react";

const teamMembers = [
  {
    name: "Narender Chauhan",
    title: "Director",
    image: Narendar,
  },
  {
    name: "Mohit Rana",
    title: "CEO/Director",
    image: Mohit,
  },
  {
    name: "Ujjwal Singh",
    title: "Director Administration",
    image: Ujjwall,
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
    <div className="text-center py-10 bg-gray-50">
      <div className="text-center font-inria my-5">
        <p className="text-lg font-inria my-2">Our Team</p>
        <p className="text-2xl font-semibold">Executive Management</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[55rem] mx-auto mb-5">
        {teamMembers.map((member, index) => (
          <div
            className={`py-6 bg-transparent transform transition-all duration-300 flex justify-center ${
              activeMember === index ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <img
              src={member.image}
              className="relative shadow-2xl"
              height={250}
              width={250}
            />
            <div className="absolute bg-white p-3 w-[12rem] text-center top-[89%] left-[15%]">
              <p className="font-inria text-base font-semibold">
                {member.name}
              </p>
              <p className="font-inria text-[#339FDE] text-sm font-light">
                {member.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
