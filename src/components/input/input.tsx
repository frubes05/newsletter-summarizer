"use client";

interface IInputProps {
  value: string;
  setValue: (val: string) => void;
  className: string;
  placeholder: string;
}

export default function Input({
  value,
  setValue,
  className,
  placeholder,
}: IInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={className}
    />
  );
}
