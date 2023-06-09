import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter.";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";
import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { label: "Going to learn React JS", important: false, like: false, id: 1 },
    { label: "That is so good", important: false, like: false, id: 2 },
    { label: "I need a break...", important: false, like: false, id: 3 },
  ]);

  const [term, setTerm] = useState("");
  const [isFilter, setIsFilter] = useState("all");
  const [maxId,setMaxId]=useState(4);

  const deleteItem = (id) => {
    setData((prevData) => {
      const index = prevData.findIndex((elem) => elem.id === id);
      const newArr = [...prevData.slice(0, index), ...prevData.slice(index + 1)];
      return newArr;
    });
  };
  

  const addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id:setMaxId(maxId)
    };
    setData((prevData) => {
      const newArr = [...prevData, newItem];
      return newArr;
    });
  };

  const onToggleImportant = (id) => {
    setData((prevData) => {
      const index = prevData.findIndex((elem) => elem.id === id);
      const oldItem = prevData[index];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArr = [...prevData.slice(0, index), newItem, ...prevData.slice(index + 1)];
      return newArr;
    });
  };

  const onToggleLiked = (id) => {
    setData((prevData) => {
      const index = prevData.findIndex((elem) => elem.id === id);
      const oldItem = prevData[index];
      const newItem = { ...oldItem, like: !oldItem.like };
      const newArr = [...prevData.slice(0, index), newItem, ...prevData.slice(index + 1)];
      return newArr;
    });
  };

  const searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.label.indexOf(term) > -1);
  };

  const filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const onFilterSelect = (filter) => {
    setIsFilter(filter);
  };

  const like = data.filter((item) => item.like).length;
  const allPost = data.length;

  const visiblePosts = filterPost(searchPost(data, term), isFilter);

  return (
    <div className="App container">
      <AppHeader like={like} allPost={allPost} />
      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <PostStatusFilter isFilter={isFilter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        posts={visiblePosts}
        onDelete={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleLiked={onToggleLiked}
      />
      <PostAddForm onAdd={addItem} />
    </div>
  );
}
