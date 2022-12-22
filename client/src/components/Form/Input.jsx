import React from "react";

const Input = ({
  text,
  name,
  type,
  value,
  setValue,
  error,
  className,
  style,
}) => {
  return (
    <>
      <label className="block text-gray-500 ">{text}</label>
      <input
        type={type}
        name={name}
        className={`form-control block w-full rounded border px-4 py-2 border-solid transition ease-in-out focus:bg-white focus:border-pink-600 focus:outline-none ${className} `}
        autoComplete="off"
        style={style}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Enter ${text}`}
      />
      {error && <small className="text-sm text-red-600 pl-1">{error}</small>}
    </>
  );
};

export default Input;
