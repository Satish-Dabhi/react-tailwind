import GuestBlogsUi from "../../ui/GuestBlogsUi";
import guestCard1 from "/img/industryInsights/guestCard1.png";
import guestCard2 from "/img/industryInsights/guestCard2.png";
import guestCard3 from "/img/industryInsights/guestCard3.png";

const guestCardData = [
  {
    img: guestCard1,
    title: "David Martinez",
    date: "1 Jan",
    mainTitle: "The Future of Work",
    subTitle: "Embracing Remote Collaboration- by David Martinez",
  },
  {
    img: guestCard2,
    title: "David Martinez",
    date: "1 Jan",
    mainTitle: "The Future of Work",
    subTitle: "Embracing Remote Collaboration- by David Martinez",
  },
  {
    img: guestCard3,
    title: "David Martinez",
    date: "1 Jan",
    mainTitle: "The Future of Work",
    subTitle: "Embracing Remote Collaboration- by David Martinez",
  },
];

const GuestBlogsAndOpinions = () => {
  return (
    <section className="container mx-auto flex flex-col  items-center mt-12 mb-12 p-2">
      <p className="text-2xl md:text-4xl font-semibold font-inria ">
        Guest Blogs and Opinions
      </p>
      <p className="md:w-[45rem] text-justify mt-2">
        Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et
        pretium. Commodo consequat eget tincidunt augue. Consequat non viverra
        eu ut amet justo nulla facilisis. Eu
      </p>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-12 mt-8 ">
      {guestCardData.map((items, index) => {
        return (
          <div key={index} >
            <GuestBlogsUi data={items}/>
          </div>
        );
      })}
      </div>
    </section>
  );
};

export default GuestBlogsAndOpinions;
