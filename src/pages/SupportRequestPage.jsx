import { Breadcrumbs, Textarea } from "@material-tailwind/react";
import InputUi from "../ui/InputUi";
import ButtonPrimaryUi from "../ui/ButtonPrimaryUi";
const SupportRequestPage = () => {
  return (
    <aside>
      <div className="grid justify-items-center">
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            Home
          </a>
          <a href="#" className="opacity-60">
            Contact Support
          </a>
          <a href="#">Support Request Form</a>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-3xl text-primary font-inria mt-5 mb-5">
          Support Request Form
        </p>

        <form>
          <div className="w-auto mt-4">
            <p className="font-inter mb-3">Full Name</p>
            <InputUi label={"Enter your full name"} type="text" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mt-4">
              <p className="font-inter mb-3">Email</p>
              <InputUi label={"Enter your full name"} type="text" />
            </div>
            <div className="mt-4">
              <p className="font-inter mb-3">Phone Number</p>
              <InputUi label={"Enter your full name"} type="text" />
            </div>
          </div>
          <div className="w-auto mt-4">
            <p className="font-inter mb-3">Subject</p>
            <InputUi label={"Enter subject"} type="text" />
          </div>
          <div className="w-auto mt-4">
            <p className="font-inter mb-3">Message</p>
            <Textarea  label="message" />
          </div>
          <div className="w-auto mt-4 mb-4">
            <p className="font-inter mb-3">Attach Files</p>
            <InputUi label={"Attach Files"} type="text" />
          </div>
          <ButtonPrimaryUi>Submit</ButtonPrimaryUi>
        </form>
      </div>
    </aside>
  );
};

export default SupportRequestPage;
