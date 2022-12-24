import React from "react";

const SelectWithoutLabel = ({
  text,
  name,
  value,
  setValue,
  error,
  className,
  style,
  data,
}) => {
  return (
    <>
      <select
        name={name}
        value={value}
        style={style}
        className={`form-control block w-full rounded border px-4 py-2 border-solid transition ease-in-out focus:bg-white focus:border-pink-600 focus:outline-none ${className} `}
        autoComplete="off"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {data &&
          data.map((elm, index) => (
            <option value={elm.key} key={elm.key}>
              {elm.text}
            </option>
          ))}
      </select>

      {error && <small className="text-sm text-red-600 pl-1">{error}</small>}
    </>
  );
};

export default SelectWithoutLabel;
