import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";

import profile1 from "/img/meetexperiencedteam/profile1.png";
import profile2 from "/img/meetexperiencedteam/profile2.png";
import profile3 from "/img/meetexperiencedteam/profile3.png";
import profile4 from "/img/meetexperiencedteam/profile4.png";

const MeetOurExperiencedTeam = () => {
  return (
    <div className="container mt-12  p-2 mx-auto flex flex-col items-center justify-center h-full mb-10 md:mb-[5rem] md:mt-[5rem] 2xl:mb-[7rem] 2xl:mt-[7rem]">
      <p className="text-3xl  md:text-5xl lg:text-6xl font-inria font-semibold">Meet Our Experienced Team</p>
      <div className="bg-primary h-1 w-[16rem] mr-[35%] md:w-[30rem]  md:mr-[26%] mt-3"></div>
      <div className="grid md:grid-cols-4 gap-5 mt-12 mb-8  ">
        <div className="flex flex-col justify-center h-fit">
          <img alt="profile" src={profile2} />
          <p className="text-2xl text-primary text-center font-inter mt-2 font-medium">
            Oliver Thomas
          </p>
          <p className="text-lg text-center font-normal font-inter">Founder</p>
          <p className="text-gray-600 text-center text-wrap p-2 font-inria">
            Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id
            lacus in mollis egestas.
          </p>
        </div>

        <div className="flex flex-col justify-center h-fit">
          <img alt="profile" src={profile3} />
          <p className="text-2xl text-primary text-center font-medium font-inter mt-2">
            Emily Smith
          </p>
          <p className="text-lg text-center font-normal font-inter">
            Chief Operations Officer
          </p>
          <p className="text-gray-600 text-center text-wrap p-2 font-inria">
            Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id
            lacus in mollis egestas.
          </p>
        </div>
        <div className="flex flex-col justify-center h-fit">
          <img alt="profile" src={profile4} />
          <p className="text-2xl text-primary text-center font-medium font-inter mt-2">
            James Smith
          </p>
          <p className="text-lg text-center font-normal">Marketing Manager</p>
          <p className="text-gray-600 text-center text-wrap p-2 font-inria">
            Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id
            lacus in mollis egestas.
          </p>
        </div>
        <div className="flex flex-col justify-center h-fit">
          <img alt="profile" src={profile1} />
          <p className="text-2xl text-primary text-center font-medium mt-2 font-inter">
            Ava Jones
          </p>
          <p className="text-md text-center font-medium font-inter">IT Consultant</p>
          <p className="text-gray-600 text-center text-wrap p-2 font-inria">
            Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id
            lacus in mollis egestas.
          </p>
        </div>
      </div>
      <ButtonPrimaryUi>
        <span className="flex gap-2 items-center ">
          Meet our team{" "}
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
        </span>{" "}
      </ButtonPrimaryUi>
    </div>
  );
};

export default MeetOurExperiencedTeam;
