/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";

const InputUi = ({label,type}) => {
  return (
    <div>
      <Input label={label} type={type} />
    </div>
  );
};

export default InputUi;
