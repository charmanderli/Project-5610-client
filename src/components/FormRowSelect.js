import React from "react";

export default function FormRowSelect({
  labelText,
  name,
  value,
  handleChange,
}) {
  const tagOptions = [
    { id: 1, item: "food" },
    { id: 2, item: "stores" },
    { id: 3, item: "experiences" },
    { id: 4, item: "services" },
  ];
  return (
    <div className="form-row">
      <label htmlFor="tag type" className="form-label">
        {labelText}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {tagOptions.map((tag) => {
          return (
            <option key={tag.id} value={tag.item}>
              {tag.item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
