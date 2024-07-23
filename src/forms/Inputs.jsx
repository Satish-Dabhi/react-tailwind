/* eslint-disable react/prop-types */
// import { Input } from "@material-tailwind/react";
// eslint-disable-next-line react/prop-types
const Inputs = ({
  placeholder,
  label,
  name,
  onChange,
  value,
  type,
  // defaultValue,
  className,
}) => {
  return (
    <div>
      {/* <Input
        autoComplete="true"
        placeholder={placeholder}
        label={label}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className={className}
      /> */}

      <div className="relative">
      <label
        // htmlFor={id}
        className="absolute -top-3 left-3 bg-white px-1 text-[#1FA0EB] font-inter"
      >
        {label}
      </label>
      <input
        type={type}
        // id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg ${className}`}
        style={{
          border: '2px solid #1FA0EB',
          borderImageSlice: '1',
        }}
      />
    </div>

    </div>
  );
};

export default Inputs;
