/* eslint-disable react/no-unescaped-entities */
import { Breadcrumbs } from "@material-tailwind/react";

const EmergencySupportPage = () => {
  return (
    <aside>
      <div className="grid justify-items-center">
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            Home
          </a>
          <a href="#" className="opacity-60">
            Support
          </a>
          <a href="#">Technical Assistance</a>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-3xl mt-5 mb-5 text-primary font-inria font-semibold">
          Emergency Support
        </p>
      </div>
      <div>
        <p className="text-2xl font-inria font-semibold mt-2">
          Emergency Finance: Clear Instructions
        </p>
        <p className="mt-2 text-justify text-lg">
          Emergencies can arise unexpectedly, putting a strain on your finances.
          It's crucial to be prepared and have a plan in place to handle
          financial emergencies effectively. Below are clear instructions to
          help you navigate through financial emergencies with confidence.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-xl font-inria font-semibold">Step1: Assess the situation</p>
        <ul className="list-disc pl-4 mt-2 text-lg text-justify">
          <li>Identify essential expenses such as food, shelter, utilities, and medical care. Prioritize these expenses to ensure your basic needs are met during the emergency.</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-xl font-inria font-semibold">Step 2: Prioritize Expenses</p>
        <ul className="list-disc pl-4 mt-2 text-lg font-inter">
          <li>If you have an emergency fund, assess its availability and determine whether it can cover the expenses associated with the emergency. If not, proceed to the next steps.</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-xl font-inria font-semibold">Step 3: Review Emergency Funds</p>
        <ul className="list-disc pl-4 mt-2 text-lg">
          <li>Research available resources such as government assistance programs, community support services, or nonprofit organizations that provide financial assistance during emergencies.</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-xl font-inria font-semibold">Step4: Explore Available Resources</p>
        <ul className="list-disc pl-4 mt-2 fopnt-inter text-justify text-lg">
          <li>Evaluate the nature and severity of the emergency. Determine whether it's a medical emergency, unexpected home repair, job loss, or other urgent financial need.</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-xl font-inria font-semibold">Step 5: Contact Creditors and Service Providers</p>
        <ul className="list-disc pl-4 mt-2 text-lg font-inter text-justify">
          <li>Reach out to creditors and service providers to discuss temporary payment arrangements or hardship programs. Many lenders and utility companies offer assistance options for customers facing financial difficulties.</li>
        </ul>
      </div>
    </aside>
  );
};

export default EmergencySupportPage;
