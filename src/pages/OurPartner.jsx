import Ujjwall from "../../public/img/aboutus/Ujjwal.png";
import Mohit from "../../public/img/aboutus/Mohit.png";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg transform transition-all duration-300 ${
              activeMember === index ? "scale-105 shadow-xl" : "scale-100"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto rounded-t-lg object-cover"
              style={{ maxHeight: "250px" }}
            />
            <div className="p-3">
              <p className="font-inria text-base font-bold">{member.name}</p>
              <p className="font-inria text-[#339FDE] text-sm font-bold">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
