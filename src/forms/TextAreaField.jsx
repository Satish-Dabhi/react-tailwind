/* eslint-disable react/prop-types */

export const TextAreaField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="absolute -top-3 left-3 bg-white px-1 text-[#1FA0EB] font-inter"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 rounded"
      style={{
        border: "2px solid",
        borderImage: "linear-gradient(to right, #1FA0EB 0%, #125B85 100%)",
        borderImageSlice: "1",
      }}
    />
  </div>
);
