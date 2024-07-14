import { AccordionCustomIcon } from "../../ui/AccordionCustomIcon";

const GrowthaccordionData = [
    {
      title: "What is asset monetization?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What types of assets can be monetized?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What are the different methods of asset monetization?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What are the risks associated with asset monetization?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "How can a company determine the value of its assets for monetization?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "How long does the asset monetization process typically take?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    }

  ];

const LoanAgainstStockFAQ = () => {
  return (
    <div className='mb-12 container mx-auto'>
    <p className='md:text-center md:mt-12  md:text-4xl text-2xl text-center mt-12 font-semibold font-inria'>Frequently asked questions</p>
   <AccordionCustomIcon data = {GrowthaccordionData} />
   </div>
  )
}

export default LoanAgainstStockFAQ
