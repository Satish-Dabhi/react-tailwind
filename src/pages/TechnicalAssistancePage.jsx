/* eslint-disable react/no-unescaped-entities */
import { Breadcrumbs } from "@material-tailwind/react";

const TechnicalAssistancePage = () => {
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
        <p className="text-3xl mb-5 text-primary font-inria mt-5 font-semibold">
          Technical Assistance
        </p>

        <p className="font-inria mt-4 text-xl md:text-2xl">
          How to Set Up Automatic Bill Payments
        </p>
        <p className="font-inter mt-2 text-justify text-lg ">
          Automatic bill payments can save you time and help you avoid late fees
          by ensuring your bills are paid on time each month. Setting up
          automatic payments is a straightforward process, but it requires
          careful attention to detail to ensure everything runs smoothly. In
          this guide, we'll walk you through the steps to set up automatic bill
          payments effectively.
        </p>
        <p className="font-inria mt-4 text-xl md:text-2xl">
          Step 1: Gather Your Information
        </p>
        <p className="font-inter mt-3 text-lg">
          Before setting up automatic bill payments, gather the necessary
          information
        </p>
        <ul className="list-disc pl-5 pt-3 font-inter space-y-2 text-lg">
          <li>Account numbers for the bills you want to automate</li>
          <li>Due dates for each bill</li>
          <li>Login credentials for your bank's online banking platform</li>
        </ul>
        <p className="font-inria mt-4 md:text-2xl text-xl">
          Step 2: Determine Payment Methods
        </p>
        <p className="font-inter mt-3 md:text-lg">
          Decide which payment method you'll use for each bill
        </p>
        <ul className="list-disc pl-5 pt-3 font-inter space-y-2 text-lg">
          <li>Direct debit from your bank account</li>
          <li>Credit card autopay</li>
          <li>Online bill payment through your bank's website</li>
        </ul>
      </div>
      <div>
        <p className="font-inria mt-4 text-2xl md:text-2xl">
          Technical support request issue
        </p>
        <p className="font-inter mt-1 text-xl text-justify ">
          Automatic bill payments can save you time and help you avoid late fees
          by ensuring your bills are paid on time each month. Setting up
          automatic payments is a straightforward process, but it requires
          careful attention to detail to ensure everything runs smoothly. In
          this guide, we'll walk you through the steps to set up automatic bill
          payments effectively.
        </p>
      </div>
      <p className="flex gap-2 text-xl md:text-2xl items-center text-primary mt-3 font-inter">
        Technical support request{" "}
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
      </p>
    </aside>
  );
};

export default TechnicalAssistancePage;
