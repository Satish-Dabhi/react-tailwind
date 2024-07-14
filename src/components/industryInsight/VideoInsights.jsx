import ButtonSecondaryUi from "../../ui/ButtonSecondaryUi";
import rectangle from "/img/industryInsights/videosample.png";
const VideoInsights = () => {
  return (
    <div className="container mx-auto mt-12 mb-12">
    <div className="grid justify-items-center ">
    <div>
      <p className="text:2xl md:text-4xl">Video Insights</p>
      <p className="bg-black h-1 w-[10rem] mt-1"></p>
      </div>
</div>
      <section className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 justify-items-center">
      <div>
        <img alt="video" src={rectangle} className="size-[15rem]" />
        <p className="text-xl font-semibold font-inria mt-2">Compelling Storytelling</p>
        <p className="mt-2 w-[12rem] mb-3 font-inter">Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au</p>
        <ButtonSecondaryUi>Watch More</ButtonSecondaryUi>
        </div>
      <div>
        <img alt="video" src={rectangle} className="size-[15rem]" />
        <p className="text-xl font-semibold font-inria mt-2">Compelling Storytelling</p>
        <p className="mt-2 w-[12rem] mb-3 font-inter">Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au</p>
        <ButtonSecondaryUi>Watch More</ButtonSecondaryUi>
        </div>
      <div>
        <img alt="video" src={rectangle} className="size-[15rem]" />
        <p className="text-xl font-semibold font-inria mt-2">Compelling Storytelling</p>
        <p className="mt-2 w-[12rem] mb-3 font-inter">Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt sapien et pretium. Commodo consequat eget tincidunt au</p>
        <ButtonSecondaryUi>Watch More</ButtonSecondaryUi>
        </div>
      </section>
    </div>
  );
};

export default VideoInsights;
