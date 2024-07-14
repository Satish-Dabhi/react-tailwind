import { Input,Button } from "@material-tailwind/react";

const SubscribeNowUi = () => {
  return (
    <div className="grid justify-items-center  mt-12 bg-primary p-8">
      <p className="text-3xl font-inria">Subscribe Now</p>
      <p className="w-[80%] font-inter mt-5 text-lg text-justify">
        Lorem ipsum dolor sit amet consectetur. Fermentum amet nunc tortor augue
        bibendum auctor in fermentum sed. Pellentesque sit nunc cursus tincidunt
        vel non tellus aliquet. Amet convallis vel ante tortor. Malesuada congue
        tellus volutpat proin maecenas mattis fringilla habitant fermentum.
        Purus vitae risus amet
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-5 mb-5">
        <Input label="Enter User Name" className="bg-white"/>
        <Input label="Enter Email Id" className="bg-white"/>
      </div>
      <Button>Subscribe</Button>
    </div>
  );
};

export default SubscribeNowUi;
