import ContactUsUI from "../ui/ContactUsUI";

const ContactUsPage = () => {
  return (
    <div className="grid flex-col place-items-center">
      <h1 className=" text-primary text-4xl mt-12 font-semibold font-inria">
        Contact Us
      </h1>
     
      <ContactUsUI />
    </div>
  );
};

export default ContactUsPage;
