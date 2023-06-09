import React, { useState } from "react";
export default function PostStatusFilter(props) {
  const { isFilter,onFilterSelect } = props;
  const [button,setButton] = useState([
    { name: "like", label: "Like" },
    { name: "all", label: "All" },
  ]);

  const buttons = button.map(({ name, label })=> {
    const active = isFilter === name;
    const classEdit = active ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        key={name}
        type="button"
        className={`btn ${classEdit}`}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
}
