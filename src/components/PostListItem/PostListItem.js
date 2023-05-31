import "./PostListItem.css";
import React from "react";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like:false,
    };
   this.OnImportant=this.OnImportant.bind(this)
   this.OnLike=this.OnLike.bind(this)
  }

  OnImportant() {
    this.setState(({ important }) => ({ important: !important }));
  }
  OnLike() {
    this.setState(({ like }) => ({ like: !like }));
  }

  render() {
    const { label } = this.props;
    const { important,like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }

    if(like){
      classNames+=" like"
    }
    return (
      <li className={classNames}>
        <span className="app-list-item-label" onClick={this.OnLike}>{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.OnImportant}
            type="button"
            className="btn-star btn-sm"
          >
            <i className="add-list-start  fa fa-star "></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash"> </i>
          </button>
          <i className="fa fa-heart"> </i>
        </div>
      </li>
    );
  }
}
