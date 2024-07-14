import { BreadcrumbsDefault } from "../ui/BreadcrumbsDefault";
import { AccordionCustomIcon } from "../ui/AccordionCustomIcon";

const beradcrumbs = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "SUPPORT",
    link: "#",
  },
  {
    title: "FAQS ",
    link: "/industryinsight",
  },
];
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
    title: "Why would a company consider asset monetization?",
    content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
  }

];
const SupportPage = () => {
  return (
    <section className="flex justify-center flex-col items-center">
      <BreadcrumbsDefault data={beradcrumbs} />
      <p className="text-2xl md:text-3xl lg:text-text-4xl 2xl:text-5xl font-inria lg:font-bold font-semibold ">Dedicated Support for Your Financial Success</p>
    <p className="text-lg mt-3 font-inter">Were Here to Assist You Every Step of the Way</p>
    <hr className="w-full h-1 bg-gray-300 mt-5"/>
    <div className="mt-10">
    <p className="text-2xl md:text-4xl lg:text-5xl font-inria ">FAQ</p>
    <AccordionCustomIcon data = {GrowthaccordionData} />
    </div>
    </section>
  );
};

export default SupportPage;
