import { useState } from "react";

export default function useFormInput(initilValue) {
  const [value, setValue] = useState(initilValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
