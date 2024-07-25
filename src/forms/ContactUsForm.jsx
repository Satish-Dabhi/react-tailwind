import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!/^\d+$/.test(formData.number)) {
      newErrors.number = "Number is invalid";
    }
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

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
      if (apiResult?.result?.status == 200) {
        alert(apiResult?.result?.message);
        setFormData({
          name: "",
          email: "",
          number: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="flex flex-col items-center justify-center p-4">
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <InputField
            label="Name"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            error={errors.name}
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            error={errors.email}
          />
          <InputField
            label="Number"
            id="number"
            name="number"
            type="text"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your number"
            error={errors.number}
          />
          <TextAreaField
            label="Description"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter your description"
            error={errors.description}
          />
          <div className="flex justify-end">
            <Button
              className="font-normal flex items-center w-fit mt-3 animate-slidein [--slidein-delay:700ms] opacity-0 border-2 border-transparent hover:border-white"
              style={{
                backgroundImage:
                  "linear-gradient(278.35deg, #1C5678 14.04%, #339FDE 97.09%)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "0",
                // width: "15rem",
                textAlign: "center",
                marginTop: "3rem",
              }}
              type="submit"
            >
              <span className="font-inria font-normal normal-case text-xl px-[1rem]">
                Submit
              </span>{" "}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg> */}
              {/* </div> */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
