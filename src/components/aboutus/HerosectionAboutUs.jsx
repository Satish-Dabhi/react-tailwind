import { BreadcrumbsDefault } from "../../ui/BreadcrumbsDefault";
import heroSectionAboutUs from "/img/aboutus/aboutherosection.png";


const beradcrumbs = [{
  title:'Home',
  link:'/'
},
{
  title:'About Us',
  link:'/aboutus'
}]
const HerosectionAboutUs = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroSectionAboutUs})` }}
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[350px]"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center">
       
          <BreadcrumbsDefault data = {beradcrumbs} />
          <p className="text-white font-inria text-2xl mt-5 font-semibold  md:text-center md:text-6xl">
            Discover Our Financial Excellence
          </p>
          <p className=" text-left p-3 md:w-[58%] md:m-5 md:text-lg font-inter  text-gray-300">
          Welcome to Epiidosis Investments LLC, where financial excellence meets strategic innovation.
          </p>
        </div>
      </div>
    </>
  );
};

export default HerosectionAboutUs;
