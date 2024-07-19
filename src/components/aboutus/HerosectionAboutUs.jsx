import Card from "../../ui/Card";
import herosection from "/img/aboutus/aboutherosection.png";
import image1 from "/logos/mission-statement.png";
import image2 from "/logos/vision.png";
import image3 from "/logos/core-value.png";

function Herosection() {
  const cards = [
    {
      imageSrc: image1,
      iconWidth: "w-1/2",
      altText: "Circle 1",
      title: "Mission Statement",
      content: `The mission of our company is to provide innovative investment solutions and strategic guidance. Our goal is to deliver superior returns to investors. Also, we are committed to fostering economic growth in the communities we serve.`,
    },
    {
      imageSrc: image2,
      iconWidth: "w-1/2",
      altText: "Circle 2",
      title: "Vision Statement",
      content: `Our vision is to be recognized as a global leader in investment management. In addition to creating value for our investors and partners, we generate value for all stakeholders. By embracing innovation, integrity, and impact, we empower individuals and organizations to thrive.`,
    },
    {
      imageSrc: image3,
      iconWidth: "w-1/2",
      altText: "Circle 3",
      title: "Core Values",
      content: `We conduct ourselves with honesty, transparency, and ethical integrity in all aspects of our business. We hold ourselves accountable to the highest standards of professionalism and adhere to the principles of fairness.`,
    },
  ];

  return (
    <div className="relative w-full max-h-auto sm:min-h-[55rem] 2xl:min-h-[48rem]">
      <div className="relative bg-gradient-to-tr from-gray-900 to-blue-gray-600 h-full w-full">
        <img
          alt="img"
          src={herosection}
          className="w-full h-auto min-h-screen xl:min-h-fit object-fill mix-blend-overlay opacity-75"
        />
        <div className="absolute p-2 gap-5 md:p-[5rem] md:top-1/3 top-0 flex md:-translate-y-1/2 text-white md:w-full">
          <div className="inset-0 flex flex-col justify-center items-center">
            <p className="text-center text-white font-inria text-5xl my-5 font-semibold  md:text-center">
              About Epiidosis Investments LLC
            </p>
            <p className="text-white p-5 lg:w-[75%] font-inter text-lg text-base font-light text-center leading-36">
              Epiidosis Investments LLC, headquartered in Dubai, is a leading
              investment firm dedicated to unlocking high-potential
              opportunities across diversified asset classes. We focus on
              sectors with robust demand fundamentals, particularly those
              prioritized by governments in the Middle East and East Africa.
            </p>
          </div>
        </div>
      </div>
      <div className="md:absolute w-full flex justify-center items-center md:h-[25%] h-[40%] bottom-20">
        <div className="flex flex-col md:flex-row gap-5 p-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              content={card.content}
              iconWidth={card.iconWidth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Herosection;
