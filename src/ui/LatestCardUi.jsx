import { useState } from "react";
import Modal from 'react-modal';
import { CardHeader, CardBody } from "@material-tailwind/react";

/* eslint-disable react/prop-types */
const LatestCardUi = ({ data }) => {
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
    <div>
      <div className="flex relative max-w-[20rem] h-fit overflow-hidden border shadow-2xl bg-white z-10 mb-3">
        <div className="bg-darkyellow h-full w-4"></div>
        <div>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
          >
            <img alt={data.subtitle} src={data.icon} />
          </CardHeader>
          <CardBody className="min-h-80">
            <p className="text-xl font-semibold mb-2 font-inria">{data.subtitle}</p>
            <p className="font-inter mb-3 line-clamp-5">{data.desc}</p>
            <a onClick={() => openModal(data.subtitle, data.desc)} className="text-primary cursor-pointer">
              View More
            </a>
          </CardBody>
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

export default LatestCardUi;
