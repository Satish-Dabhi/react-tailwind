import ContactUsUI from "../ui/ContactUsUI";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto m-6 p-4 mt-8">
      <div className="text-center mb-6 flex justify-center  ">
        <div className=" md:w-1/2">
          <h1 className="text-3xl md:text-[64px] font-[600] text-[#39A1DE] font-inter">
            Contact Us
          </h1>
          <p className="mt-5 mb-5 font-inter">
            Connect with Epiidosis Investments LLC. Reach out to our dedicated
            team for personalized assistance, inquiries about our services, or
            to explore collaboration opportunities.
          </p>
        </div>
      </div>

      <ContactUsUI />
    </div>
  );
};

export default ContactUsPage;
