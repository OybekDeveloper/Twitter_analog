import "./SearchPanel.css";
import React, { useState } from "react";

export default function SearchPanel({ onUpdateSearch }) {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    const term = e.target.value;
    setTerm(term);
    onUpdateSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Search post"
      className="form-control search-input"
      value={term}
      onChange={onInputChange}
    />
  );
}
