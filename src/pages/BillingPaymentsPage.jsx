/* eslint-disable react/no-unescaped-entities */
import { Breadcrumbs } from "@material-tailwind/react";

const BillingPaymentsPage = () => {
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
        <p className="text-3xl mb-5 xl text-primary font-inria mt-5 font-semibold">
          Billing and Payments
        </p>
        <p className="font-inria mt-4 text-xl">
          Understanding Billing Cycles and Payment Methods
        </p>
      </div>

      <div className=" font-inria mt-4 text-2xl font-semibold">
        <p>Billing Cycles</p>
      </div>
      <p className="mt-2 font-inter text-lg text-justify">
        A billing cycle is the period of time between billings for goods or
        services rendered. It's typically a recurring timeframe during which a
        company generates invoices, sends them to customers, and expects
        payment. Understanding billing cycles is essential for managing finances
        effectively. Here's what you need to know
      </p>
      <ul className="list-disc mt-6 pl-2">
        <li className="text-2xl font-inria font-semibold">Frequency</li>
      </ul>
      <p className="pl-5 mt-2 font-inter text-justify text-lg">
        Billing cycles vary depending on the company and the type of service
        provided. Common billing cycle frequencies include monthly, quarterly,
        semi-annually, and annually
      </p>

      <ul className="list-disc mt-2 pl-2">
        <li className="text-xl font-inria font-semibold ">
          Start and End Dates
        </li>
      </ul>
      <p className="pl-5 mt-2 font-inter text-lg">
        Each billing cycle has a start date and an end date. The start date
        marks the beginning of the billing period, while the end date signifies
        the conclusion. For example, a monthly billing cycle may start on the
        1st day of the month and end on the last day.
      </p>
      <div className=" font-inria mt-4 text-2xl font-semibold">
        <p>Payment Methods</p>
      </div>
      <p className="mt-4 font-inter text-justify">
        Various payment methods are available for settling invoices and bills.
        Choosing the right payment method can streamline the payment process and
        offer convenience. Here are some common payment methods:
      </p>
      <ul className="list-disc mt-2 pl-2">
        <li className="text-xl font-inria font-semibold">Online Payments</li>
      </ul>
      <p className="pl-5 mt-2 font-inter text-justify">
        Many companies offer online payment options through their websites or
        customer portals. Customers can log in, enter payment information, and
        submit payments electronically. Online payments are fast, secure, and
        convenient.
      </p>
      <ul className="list-disc mt-2 pl-2">
        <li className="text-xl font-inria font-semibold">
          Credit or Debit Card
        </li>
      </ul>
      <p className="pl-5 mt-2 font-inter">
        Credit and debit cards are widely accepted for bill payments. Customers
        can provide card details either online, over the phone, or in-person to
        authorize payments.{" "}
      </p>

      <p className="text-xl font-inria mt-5 font-semibold">Billing Inquiry</p>
      <p className="text-xl font-inria mt-2 font-semibold">Billing period: </p>
      <p className="font-inter text-lg text-justify">
        Verify that the billing period covered by the invoice aligns with your
        expectations.
      </p>

      <p className="text-md font-inria mt-2 font-semibold text-xl">Payment due date:</p>
      <p className="font-inter text-md">
        Note the due date for payment to avoid late fees.
      </p>
      <p className="flex gap-2 text-xl items-center text-primary mt-3 font-inter">
        Billing Inquiry{" "}
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

export default BillingPaymentsPage;
