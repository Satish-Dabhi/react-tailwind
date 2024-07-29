/* eslint-disable react/prop-types */

const Inputs = ({
  placeholder,
  label,
  name,
  onChange,
  value,
  type = "text",
  className,
  error,
}) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <label
          htmlFor={name}
          className="absolute -top-3 left-3 bg-white px-1 text-[#1FA0EB] font-inter"
        >
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-3 ${className} ${
            error ? "border-red-500" : "border-[#1FA0EB]"
          }`}
          style={{
            border: "2px solid #1FA0EB",
            borderRadius: "0", // Ensure the border is square
          }}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Inputs;
