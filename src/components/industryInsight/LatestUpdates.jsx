import { CardHeader, CardBody } from "@material-tailwind/react";
import { useState } from "react";
import Modal from 'react-modal';
import ecommerce from "/img/industryInsights/e-commerce.png";
import finacial from "/img/industryInsights/finacial.png";
import healthcare from "/img/industryInsights/healthcare.png";
import manufacturing from "/img/industryInsights/manufacturing.png";
import tech from "/img/industryInsights/tech.png";

const latestData = [
  {
    icon: tech,
    title: "Technology Sector",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam metus sed faucibus mauris venenatis. Scelerisque vitae sed faucibus arcu. Vitae tincidunt ut id elit enim faucibus.",
  },
  {
    icon: healthcare,
    title: "Healthcare Industry",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio sit tortor egestas consequat nulla diam elementum nam hendrerit. Vestibulum suscipit duis et risus interdum sapien nec",
  },
  {
    icon: finacial,
    title: "Financial Services",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem faucibus posuere malesuada praesent. Sed eget scelerisque purus etiam a integer. Nibh eu at vulputate id lectus lectus.",
  },
  {
    icon: ecommerce,
    title: "E-commerce and Retail",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing scelerisque massa enim odio gravida tellus vestibulum interdum consectetur. Mollis lectus scelerisque vi.",
  },
  {
    icon: manufacturing,
    title: "Manufacturing and Supply Chain",
    desc: "Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt.",
  },
];

// Set the app element for accessibility
Modal.setAppElement('#root');

const LatestUpdates = () => {
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
    <div className="container mx-auto p-5">
      <div className="w-full">
        <div className="text-left mb-5">
          <p className="text-black text-4xl font-inria">Latest Updates</p>
          <div className="bg-primary h-1 w-[10rem]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestData.map((data, index) => (
            <div key={index} className="flex relative max-w-[20rem] h-fit overflow-hidden border shadow-2xl bg-white z-10">
              <div className="bg-darkyellow h-full w-4"></div>
              <div>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
                >
                  <img alt={data.title} src={data.icon} />
                </CardHeader>
                <CardBody>
                  <p className="text-xl font-semibold mb-2 font-inria">{data.title}</p>
                  <p className="font-inter mb-3 line-clamp-5">{data.desc}</p>
                  <a onClick={() => openModal(data.title, data.desc)} className="text-primary cursor-pointer">
                    View More
                  </a>
                </CardBody>
              </div>
            </div>
          ))}
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

export default LatestUpdates;
