import { CardHeader, CardBody } from "@material-tailwind/react";
import target from "/img/aboutus/target.png";
import eye from "/img/aboutus/eye.png";
import donate from "/img/aboutus/donate.png";
import { useState } from "react";
const CompanyOverview = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="container mt-12 mb-12 mx-auto flex flex-col items-center justify-center w-full p-5 ">
      <div className="text-2xl md:text-4xl font-semibold text-center">
        <span className="font-inria">Company overview</span>
        <div className="bg-darkyellow h-1 ml-2 mt-2  w-[8rem] "></div>
      </div>

      <div className=" w-full  flex  justify-center items-center h-[25%]">
        <div className=" flex flex-col  md:flex-row gap-5 p-5">
          <div className="flex relative md:max-w-[20rem] h-fit overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={target} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-semibold mb-2 font-inria ">
                  Our mission
                </p>
                <p className={` font-inter mb-3 ${showFullText ? '' : 'line-clamp-5'}`}>
                  At Epiidosis Investments LLC, our mission is to empower
                  individuals and organizations to achieve their financial goals
                  by providing innovative investment solutions, strategic
                  guidance, and unparalleled service. We are committed to
                  delivering superior returns for our investors, fostering
                  economic growth in the communities we serve, and upholding the
                  highest standards of integrity, transparency, and
                  professionalism in all our endeavors.
                </p>
                  <a onClick={toggleText} className="text-primary cursor-pointer ">{showFullText ? 'View Less' : 'View More' }</a>
              </CardBody>
            </div>
          </div>
          <div className="flex relative md:max-w-[20rem] h-fit  overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={eye} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-inria font-semibold mb-2">
                  Our vision
                </p>
                <p className={`mb-3 font-inter ${showFullText ? '' : 'line-clamp-5'}`}>
                  Our vision at Epiidosis Investments LLC is to be recognized as
                  a global leader in investment management, renowned for our
                  expertise, innovation, and commitment to excellence. We aspire
                  to create lasting value for our investors, partners, and
                  stakeholders, while contributing to the advancement of
                  sustainable and inclusive economic development worldwide.
                  Through our dedication to innovation, integrity, and impact,
                  we aim to shape the future of finance and empower individuals
                  and organizations to thrive in an ever-changing world.
            
                </p>
                <a onClick={toggleText} className="text-primary cursor-pointer ">{showFullText ? 'View Less' : 'View More' }</a>
              </CardBody>
              
            </div>
          </div>
          <div className="flex relative md:max-w-[20rem] h-fit  overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-12"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={donate} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-inria font-semibold mb-2">
                  Core Values
                </p>
                <p className={` font-inter mb-3 ${showFullText ? '' : 'line-clamp-5'}`}>
                  1. Integrity: We conduct ourselves with honesty, transparency,
                  and ethical integrity in all aspects of our business. We hold
                  ourselves accountable to the highest standards of
                  professionalism and adhere to the principles of fairness,
                  trust, and respect in our interactions with clients, partners,
                  and stakeholders. 2. Innovation: We embrace innovation as a
                  driving force for growth and progress. We continuously seek
                  new ideas, technologies, and strategies to enhance our
                  investment processes, optimize performance, and deliver value
                  to our investors. We foster a culture of creativity,
                  curiosity, and forward thinking, empowering our team to
                  challenge the status quo and pursue excellence in everything
                  we do. 3. Excellence: We strive for excellence in all our
                  endeavors, setting high standards for ourselves and
                  consistently delivering superior results. We are committed to
                  continuous improvement, learning, and development, seeking
                  excellence in every aspect of our business operations, from
                  investment management and client service to corporate
                  governance and social responsibility. 4. Collaboration: We
                  believe in the power of collaboration and teamwork to achieve
                  shared goals and drive collective success. We foster an
                  inclusive and supportive work environment where diversity is
                  celebrated, ideas are valued, and teamwork is encouraged. We
                  collaborate closely with our clients, partners, and
                  stakeholders, leveraging collective expertise, resources, and
                  networks to create mutually beneficial outcomes and
                  sustainable value for all. 5. Impact: We are driven by a sense
                  of purpose and a commitment to making a positive impact on the
                  world. We seek to create value not only for our investors but
                  also for society as a whole, by investing in projects and
                  initiatives that generate positive social, environmental, and
                  economic outcomes. We are dedicated to promoting
                  sustainability, diversity, and inclusion, and we actively
                  support initiatives that contribute to the betterment of our
                  communities and the planet.
                </p>
                <a onClick={toggleText} className="text-primary cursor-pointer ">{showFullText ? 'View Less' : 'View More' }</a>
              </CardBody>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
