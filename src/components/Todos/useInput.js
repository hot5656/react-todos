// useInput.js
import { useState } from "react";

export default function useInput() {
  // add value
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    handleChange,
  };
}
