import {  Button } from "@material-tailwind/react";

const SubscribeNowUi = () => {
  return (
    <div className="flex flex-col items-center mt-12 bg-primary p-8">
      <p className="text-3xl font-inria mb-5">Subscribe Now</p>
      <p className="w-full md:w-[80%] font-inter mt-5 text-lg text-center">
        Lorem ipsum dolor sit amet consectetur. Fermentum amet nunc tortor augue
        bibendum auctor in fermentum sed. Pellentesque sit nunc cursus tincidunt
        vel non tellus aliquet. Amet convallis vel ante tortor. Malesuada congue
        tellus volutpat proin maecenas mattis fringilla habitant fermentum. Purus vitae risus amet
      </p>
      <div className="flex flex-col md:flex-row mt-8 gap-5 w-full md:w-auto justify-center">
        <input 
          type="text" 
          placeholder="Enter User Name" 
          className="bg-white p-3 w-full md:w-60 border border-gray-300"
        />
        <input 
          type="email" 
          placeholder="Enter Email Id" 
          className="bg-white p-3 w-full md:w-60 border border-gray-300"
        />
      </div>
      <Button className="mt-5 w-full md:w-[31rem] rounded-none">Subscribe</Button>
    </div>
  );
};

export default SubscribeNowUi;
