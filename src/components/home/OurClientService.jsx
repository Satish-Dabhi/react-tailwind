import Frame1 from '/logos/ourclientknowlogos/Frame1.png'
import Frame2 from '/logos/ourclientknowlogos/Frame2.png'
import Frame3 from '/logos/ourclientknowlogos/Frame3.png'
import Frame4 from '/logos/ourclientknowlogos/Frame4.png'
import Frame5 from '/logos/ourclientknowlogos/Frame5.png'
const OurClientService = () => {
  return (
    <div className="bg-bgsecond w-full p-5 mt-12">
      <div className="flex mt-12 mb-12 flex-col  md:flex-row  justify-between container mx-auto ">
        <div className="w-auto md:w-[25rem] ">
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-inria font-semibold">Our Clients Know</p>
          <div className="bg-primary h-1 justify-start w-[8rem]  mr-[5rem]"></div>
          <p className="text-gray-100 mt-4 text-wrap font-inter text-justify">
            Lorem ipsum dolor sit amet consectetur. Gravida nullam faucibus eu
            mauris cras quis. In posuere tellus eget blandit in. Velit placerat
            rhoncus phasellus dictum iaculis pulvinar ipsum se.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 mt-5  md:mr-[8rem]">
          <div><img alt="frameone" src={Frame1} className='w-[5rem] h-[5rem]' /></div>
          <div><img alt="frameone" src={Frame2} className='w-[5rem] h-[5rem]'/></div>
          <div><img alt="frameone" src={Frame3} className='w-[5rem] h-[5rem]'/></div>
          <div><img alt="frameone" src={Frame4} className='w-[5rem] h-[5rem]' /></div>
          <div><img alt="frameone" src={Frame5} className='w-[5rem] h-[5rem]' /></div>
        </div>
      </div>
    </div>
  );
};

export default OurClientService;
