import React from "react";
export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "like", label: "Like" },
      { name: "all", label: "All" },
    ];
  }
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const classEdit = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
         key={name} 
         type="button" 
         className={`btn ${classEdit}`}
         onClick={this.props.onFilterSelect(name)}
         >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
