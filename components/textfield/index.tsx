"use client";

import { useState } from "react";

interface TextFieldProps {
  labelText?: string;
  placeholderText?: string;
  initialValue?: string;
  fieldType?: string;
  onValueChange?: (newValue: string) => void;
}

export default function TextField({
  labelText,
  placeholderText,
  fieldType = "text",
  initialValue = "",
  onValueChange,
}: TextFieldProps) {
  const [currentValue, setCurrentValue] = useState(initialValue);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedValue = event.target.value;
    setCurrentValue(updatedValue);

    if (onValueChange) {
      onValueChange(updatedValue);
    }
  }

  return (
    <div>
      {labelText && <label>{labelText}</label>}
      <input
        type={fieldType}
        placeholder={placeholderText || ""}
        value={currentValue}
        onChange={handleInputChange}
      />
    </div>
  );
}