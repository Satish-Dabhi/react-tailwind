import { AccordionCustomIcon } from "../../ui/AccordionCustomIcon";
import growthcustomer from '/img/growcustomer.png'
const GrowthaccordionData = [
    {
      title: "The ultimate guide to solve your problem.",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "The ultimate guide to solve your problem.",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "The ultimate guide to solve your problem.",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },

  ];
  
 
  
const GrowCustomerRelationships = () => {
  return (
    <div className="container mx-auto w-full p-5 ">
    <div className="grid grid-cols-1 md:grid-cols-2 md:mt-12 mb-12">
      <div className="flex justify-center items-center">
        <div>
          <p className="text-4xl mb-2 font-inria">Grow Customer Relationships Via Technology Solutions.</p>
          <p className="text-md text-gray-600 font-inter">
            Enhance customer relationships with our advanced technology solutions. At Epiidosis Investments LLC, we use AI, analytics, and digital platforms to personalize experiences, boost engagement, and drive loyalty, ensuring sustainable growth for your business.
          </p>
          <AccordionCustomIcon data = {GrowthaccordionData} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 md:mt-0">
        <img alt="grow" src={growthcustomer} className="mt-5 w-full md:max-w-[30rem]" />
      </div>
    </div>
  </div>
  
  
  );
};

export default GrowCustomerRelationships;
