import { useState } from "react";
import Inputs from "../forms/Inputs";
import companyLogo from "/logos/logo-white.png";

const SalesTeamForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    organization: "",
    investment_amount: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [viewForm, setViewForm] = useState(true);
  const [arrowRotation, setArrowRotation] = useState("rotate-[-90deg]");

  const validateFields = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.investment_amount.trim()) {
      newErrors.investment_amount = "Investment amount is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFields()) {
      setSent(true);
      setArrowRotation(sent ? "rotate-[-90deg]" : "rotate-[-45deg]");
      console.log("Form Data:", formData);
      try {
        const response = await fetch(
          "https://erp.epiidosisinvestments.com/lead/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const apiResult = await response.json();
        if (apiResult?.result?.status === 200) {
          // alert(apiResult?.result?.message);
          setViewForm(false);
          setFormData({
            name: "",
            email: "",
            number: "",
            organization: "",
            investment_amount: "",
            description: "",
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="bg-[#495b6e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h1 className="text-center font-bold text-white py-10 text-2xl font-inria">
          INVEST WITH EPIIDOSIS INVESTMENTS LLC TO SECURE YOUR FINANCIAL FUTURE
        </h1>

        <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 lg:pr-10">
            <img
              alt="logo"
              src={companyLogo}
              className="mb-4 w-[270px] h-[50px]"
            />
            <br />
            <p className="text-white mb-8 leading-7 font-inter font-light text-md">
              With Epiidosis, you can expect substantial returns on your initial
              investment. At Epiidosis, our investment management team is
              composed of seasoned professionals. They analyze investment
              opportunities, manage risks, and maximize returns for our clients.
              Invest with confidence.
            </p>
            <div className="text-white">
              <p className="mb-6 leading-7 font-inter font-light text-md">
                Benefits of Investing with us:
              </p>
              <ol className="list-decimal list-inside pl-3 mb-8 leading-7 font-inter font-light text-md">
                <li>Complete transparency in investment process</li>
                <li>24/7 dedicated sales team support</li>
                <li>Full control of your investment</li>
                <li>Minimum investment of just AED 100K</li>
                <li>Investment lock-in period of just 1-year</li>
              </ol>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:px-10 mb-20">
            {viewForm ? (
              <div className="bg-white p-8 shadow-2xl">
                <p className="font-bold text-sm text-center mb-10 font-inria">
                  Fill in the information below for one of our sales team to
                  schedule a call
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 flex flex-col lg:flex-row lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <Inputs
                        label="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        className="bg-white w-full"
                        required
                      />
                    </div>
                    <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                      <Inputs
                        label="Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        className="bg-white w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Inputs
                      label="Phone Number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      error={errors.number}
                      className="bg-white"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <Inputs
                      label="Organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      error={errors.organization}
                      className="bg-white"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <Inputs
                      label="Desired Investment (AED) *"
                      name="investment_amount"
                      value={formData.investment_amount}
                      onChange={handleChange}
                      error={errors.investment_amount}
                      className="bg-white"
                      required
                    />
                  </div>
                  {/* <div className="mb-6">
                  <label className="block text-[#1FA0EB] font-inter">
                    Remarks (If Any)
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-[#1FA0EB] rounded-none"
                  />
                </div>

                <div className="flex justify-center items-center space-x-2 mb-6">
                  <span className="font-bold text-3xl">
                    {sent ? "Sent" : "Send"}
                  </span>
                  <button
                    type="submit"
                    className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transform ${arrowRotation} bg-gradient-to-r from-[#1C5678] to-[#339FDE] border-2 border-transparent hover:border-white transition-all duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white transform rotate-45 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div> */}
                  <div className="mb-6 flex items-center space-x-4">
                    <div className="w-full lg:w-3/4">
                      <div className="relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[#1FA0EB] font-inter">
                          Remarks (If Any)
                        </label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full p-3"
                          style={{
                            border: "2px solid #1FA0EB",
                            borderImageSlice: "1",
                            borderRadius: "0", // Ensure the border is square
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-3xl">
                        {sent ? "Sent" : "Send"}
                      </span>
                      <button
                        type="submit"
                        className={`flex items-center justify-center w-[4rem] h-[4rem] rounded-full shadow-lg transform ${arrowRotation} bg-gradient-to-r from-[#1C5678] to-[#339FDE] border-2 border-transparent hover:border-white transition-all duration-300`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white transform rotate-45 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-center text-[0.7rem] flex justify-center items-center space-x-1">
                    <span>
                      If you have any other requirements, please share with us
                      at
                    </span>
                    <a
                      href="mailto:info@epiidosisinvestments.com"
                      className="text-blue-500 underline"
                    >
                      info@epiidosisinvestments.com
                    </a>
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-white p-8 shadow-2xl text-center flex flex-col items-center h-full justify-center">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 90 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  // style={{ borderRadius: }}
                  className="rounded-full bg-gradient-to-r from-[#339FDE] to-[#1C5678]"
                >
                  <rect
                    width="90"
                    height="80"
                    fill="url(#pattern0_1440_5454)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_1440_5454"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_1440_5454"
                        transform="matrix(0.00714286 0 0 0.00800866 0 -0.129221)"
                      />
                    </pattern>
                    <image
                      id="image0_1440_5454"
                      width="140"
                      height="142"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>

                <h1 className="text-6xl font-inria font-semibold text-[#1C5678] my-5">
                  Thank you!
                </h1>
                <h3 className="font-inria text-[#1C5678] font-semibold">
                  We have received your request. Our team will reach out to you
                  soon
                </h3>
                <p className="text-center text-[0.7rem] flex justify-center items-center space-x-1">
                  <span>
                    If you have any other requirements, please share with us at
                  </span>
                  <a
                    href="mailto:info@epiidosisinvestments.com"
                    className="text-blue-500 underline"
                  >
                    info@epiidosisinvestments.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTeamForm;
