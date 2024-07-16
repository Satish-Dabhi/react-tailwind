import { CardHeader, CardBody } from "@material-tailwind/react";
import target from "/img/aboutus/target.png";
import eye from "/img/aboutus/eye.png";
import donate from "/img/aboutus/donate.png";
import { useState } from "react";
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const CompanyOverview = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalTitle('');
    setModalContent('');
  };

  return (
    <div className="container mt-12 mb-12 mx-auto flex flex-col items-center justify-center w-full p-5">
      <div className="text-2xl md:text-4xl font-semibold text-center">
        <span className="font-inria">Company Overview</span>
        <div className="bg-darkyellow h-1 ml-2 mt-2 w-[8rem]"></div>
      </div>

      <div className="w-full flex justify-center items-center h-[25%]">
        <div className="flex flex-col md:flex-row gap-5 p-5">
          <div className="flex relative md:max-w-[20rem] h-fit overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="Our mission" src={target} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-semibold mb-2 font-inria">Our Mssion</p>
                <p className="font-inter mb-3 line-clamp-5">
                  Providing innovative investment solutions, strategic guidance, and unparalleled customer service is our mission. As an investment firm, we are dedicated to delivering superior returns to investors. We also foster economic growth in the communities we serve, and maintain the highest standards of integrity, transparency, and professionalism.     
                 </p>
                <a onClick={() => openModal('Our Mission', 'At Epiidosis Investments LLC, our mission is to empower individuals and organizations to achieve their financial goals by providing innovative investment solutions, strategic guidance, and unparalleled service. We are committed to delivering superior returns for our investors, fostering economic growth in the communities we serve, and upholding the highest standards of integrity, transparency, and professionalism in all our endeavors.')} className="text-primary cursor-pointer">
                  View More
                </a>
              </CardBody>
            </div>
          </div>

          <div className="flex relative md:max-w-[20rem] h-fit overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="Our vision" src={eye} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-inria font-semibold mb-2">Our Vision</p>
                <p className="mb-3 font-inter line-clamp-5">
                  We strive to be recognized as a global leader in investment management, renowned for our expertise, innovation, and commitment to excellence. By advancing sustainable and inclusive economic development worldwide, we create lasting value for our investors, partners, and stakeholders. We aim to empower individuals and organizations to thrive in an ever-changing world by embracing innovation, integrity, and impact.
                </p>
                <a onClick={() => openModal('Our Vision', 'Our vision at Epiidosis Investments LLC is to be recognized as a global leader in investment management, renowned for our expertise, innovation, and commitment to excellence. We aspire to create lasting value for our investors, partners, and stakeholders, while contributing to the advancement of sustainable and inclusive economic development worldwide. Through our dedication to innovation, integrity, and impact, we aim to shape the future of finance and empower individuals and organizations to thrive in an ever-changing world.')} className="text-primary cursor-pointer">
                  View More
                </a>
              </CardBody>
            </div>
          </div>

          <div className="flex relative md:max-w-[20rem] h-fit overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="Core Values" src={donate} />
              </CardHeader>
              <CardBody>
                <p className="text-xl font-inria font-semibold mb-2">Our Core Values</p>
                <p className="font-inter mb-3 line-clamp-5">
                  At Epiidosis Investments LLC, our core values guide everything we do. We uphold integrity, embrace innovation, strive for excellence, foster collaboration, and are committed to making a positive impact. These principles drive our actions and define our commitment to our clients, partners, and society.
                </p>
                <a onClick={() => openModal('Core Values', '1. Integrity: We conduct ourselves with honesty, transparency, and ethical integrity in all aspects of our business. We hold ourselves accountable to the highest standards of professionalism and adhere to the principles of fairness, trust, and respect in our interactions with clients, partners, and stakeholders. 2. Innovation: We embrace innovation as a driving force for growth and progress. We continuously seek new ideas, technologies, and strategies to enhance our investment processes, optimize performance, and deliver value to our investors. 3. Excellence: We strive for excellence in all our endeavors, setting high standards for ourselves and consistently delivering superior results. 4. Collaboration: We believe in the power of collaboration and teamwork to achieve shared goals and drive collective success. 5. Impact: We are driven by a sense of purpose and a commitment to making a positive impact on the world.')} className="text-primary cursor-pointer">
                  View More
                </a>
              </CardBody>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Card Details"
        className="bg-white p-5 rounded-lg shadow-lg max-w-lg mx-auto my-12 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <h2 className="text-2xl font-semibold mb-4">{modalTitle}</h2>
        <div className="max-h-96 overflow-y-auto">
          <p className="text-base leading-relaxed">{modalContent}</p>
        </div>
        <button onClick={closeModal} className="mt-4 p-2 bg-primary text-white rounded-lg">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default CompanyOverview;
