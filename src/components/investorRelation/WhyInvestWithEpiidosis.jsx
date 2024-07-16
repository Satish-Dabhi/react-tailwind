import { useState } from "react";
import Modal from 'react-modal';
import proventrack from "/img/investorRelation/proventrack.png";
import transparency from "/img/investorRelation/transperancy.png";
import robust from "/img/investorRelation/robust.png";
import innovative from "/img/investorRelation/innovative.png";

const dataCard = [
  {
    img: proventrack,
    title: "Diversified Asset Management",
    desc: "With a focus on sectors such as financial services, Fin-tech, commercial enterprises, tourism, industry, agriculture, energy, education, and healthcare, we have curated a diversified portfolio that caters to various investment preferences and market dynamics.",
  },
  {
    img: transparency,
    title: "Private Investments",
    desc: "Epiidosis prioritizes transparency and accountability, providing clear and comprehensive information about investment options, performance, and fees. Our track record in private investments speaks volumes about our ability to identify and capitalize on high-potential opportunities. By deploying capital in sectors aligned with government priorities, particularly in the Middle East and East Africa, we have generated substantial returns for our stakeholders.",
  },
  {
    img: robust,
    title: "Global Credit and Equity Portfolios",
    desc: "Through our expertise in managing global and regional credit and equity portfolios, we have enhanced the diversification and liquidity of Epiidosis Investments LLC. This has further solidified our position as a trusted partner for investors seeking exposure to both traditional and alternative asset classes.",
  },
  {
    img: innovative,
    title: "Financial Alliances",
    desc: "Leveraging strong financial alliances globally, we offer attractive investment opportunities to third-party investors through our capital markets funds, private equity, and private debt platforms. Our investment spectrum ranges from USD 2 million to USD 150 million, catering to projects across various regions and industries.",
  },
  {
    img: innovative,
    title: "Professional Team",
    desc: "Our success is attributed to the dedication and expertise of our professional team, comprising individuals from diverse backgrounds and countries. With a singular focus on deploying capital strategically, our team ensures that investor interests remain paramount in every decision we make.",
  },
];

const WhyInvestWithEpiidosis = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [textHide, setHide] = useState(false); // Define textHide state variable

  const toggleText = () => {
    setHide(!textHide);
  };

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
    <div className="bg-bgprimary">
      <div className="container mx-auto p-5  flex flex-col items-center justify-center">
        <div className="text-xl md:text-4xl font-semibold mt-12 ">
          <span className="font-inria">Why Invest with Epiidosis</span>
          <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
        </div>
        <p className="text-center pl-8 pr-8 mt-4 font-inter">
          Since our establishment in 2020, Epiidosis Investments LLC has forged
          a path of success in the global investment landscape. Here are some
          key achievements and milestones that define our journey:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
          {dataCard.map((item, index) => (
            <div key={index}>
              <div className="bg-white flex gap-5 p-5 items-center">
                <div className="bg-bgprimary p-5 w-auto h-auto">
                  <img
                    alt="logo"
                    src={item?.img}
                    className="w-[5rem] h-auto"
                  />
                </div>
                <div>
                  <p className="font-inter font-semibold text-xl">
                    {item?.title}
                  </p>
                  <p className="font-inter">
                    <span className={`line-clamp-4 font-inter`}>{item?.desc}</span>{" "}
                    <span className="cursor-pointer text-primary" onClick={() => { toggleText(); openModal(item.title, item.desc); }}>view more</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
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

export default WhyInvestWithEpiidosis;
