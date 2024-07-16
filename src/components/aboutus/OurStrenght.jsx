import { useState } from "react";
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const OurStrength = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  

  const closeModal = () => {
    setModalIsOpen(false);
    setModalTitle('');
    setModalContent('');
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center">
        <div className="text-2xl md:text-4xl font-semibold text-center">
          <span className="font-inria">Our Strengths</span>
          <div className="bg-darkyellow h-1 ml-2 mt-2 w-[8rem]"></div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center h-[25%]">
        <div className="flex flex-col md:flex-row gap-5 p-5">
          <p className="text-center font-inter">
          At Epiidosis Investments LLC, we leverage our unparalleled financial expertise, proven track record, and extensive global presence to deliver exceptional investment solutions.
          </p>
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

export default OurStrength;
