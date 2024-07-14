import { Breadcrumbs } from "@material-tailwind/react";


const VideoTutorial = () => {
  return (
    <section>
      <div className="grid justify-items-center">
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            Home
          </a>
          <a href="#" className="opacity-60">
            Support
          </a>
          <a href="#">Video Tutorial</a>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-4xl text-primary font-inria mt-5 mb-5">
          Video Tutorial
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="bg-gray-500 w-[14rem] h-[8rem]"></div>
            <p className="pt-3 pb-5 text-primary ">
              Introduction to Personal Finance
            </p>
          </div>
          <div>
            <div className="bg-gray-500 w-[14rem] h-[8rem]"></div>
            <p className="pt-3 pb-5 text-primary">
              Understanding Credit Scores and Reports
            </p>
          </div>
          <div>
            <div className="bg-gray-500 w-[14rem] h-[8rem]"></div>
            <p className="pt-3 pb-5 text-primary">
              Budgeting Techniques and Tools
            </p>
          </div>
          <div>
            <div className="bg-gray-500 w-[14rem] h-[8rem]"></div>
            <p className="pt-3 pb-5 text-primary">Retirement Planning</p>
          </div>
          <div>
            <div className="bg-gray-500 w-[14rem] h-[8rem]"></div>
            <p className="pt-3 pb-5 text-primary">
              Tax Planning and Strategies
            </p>
          </div>
          <div>
            <div className="bg-gray-500 w-[14rem] h-[8rem]"></div>
            <p className="pt-3 pb-5 text-primary">Real Estate Investing</p>
          </div>
          {/* <ButtonPrimaryUi>Submit</ButtonPrimaryUi> */}
        </div>
      </div>
    </section>
  );
};

export default VideoTutorial;
