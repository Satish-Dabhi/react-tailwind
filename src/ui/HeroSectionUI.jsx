/* eslint-disable react/prop-types */
import { BreadcrumbsDefault } from "./BreadcrumbsDefault";
import ButtonPrimaryUi from "./ButtonPrimaryUi";



const HeroSectionUi = ({beradcrumbs,heroTextData,heroasset,color}) => {
const colorBlack = color ? 'black' :'white'
console.log(colorBlack)
    return (
        <div >
        <div
          style={{ backgroundImage: `url(${heroasset})` }}
          className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[350px]"
        >
          <div className="absolute inset-0 flex flex-col container mx-auto">
            <BreadcrumbsDefault data={beradcrumbs} colorBlack={colorBlack} />
            <div className="ml-12">
            <p className={`text-${colorBlack} mt-5 w-[60%] text-xl md:text-start md:text-4xl font-inria font-semibold`}>
              {heroTextData?.title}
            </p>
           
            <p className="  md:w-[56%]  md:text-lg  text-gray-400 mt-3 font-inter">
             {heroTextData?.desc}
            </p>
            <div className="w-fit mt-6">
            {
              heroTextData?.buttonText ? 
              <ButtonPrimaryUi>
                {" "}
                <span className="flex  items-center gap-2 ">
                 {heroTextData?.buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>{" "}
              </ButtonPrimaryUi> : null
            }
          
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSectionUi;

