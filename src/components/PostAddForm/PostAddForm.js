import "./PostAddForm.css"
import React , {useState}from "react";

 export default function  PostAddForm (props) {

  const {onAdd}=props;

  const [text,setText]=useState("");

  const onValueChange=(e)=>{
    setText(e.target.value)
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What are you thinking about ?"
        className="form-control new-post-label"
        onChange={onValueChange}
        value={text}
      />  
      <button 
        type="submit" 
        className="btn btn-outline-secondary">
        Add Post
      </button>
    </form>
  );
  }

