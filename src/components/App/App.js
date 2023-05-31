import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter."
import PostList from "../PostList/PostList"
import PostAddForm from "../PostAddForm/PostAddForm"
import "./App.css"
const App = () => {

  const data = [
    {label:"Going to learn React JS",important:true,id:"qw"},
    {label:"That is so good",important:false,id:"qc"},
    {label:"I  need a break...",important:false,id:"qs"},
  ]
  return (
    <div className="container">
      <div className="App container ">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter/>
        </div>
        <PostList  props={data} />
        <PostAddForm/>
      </div>
    </div>
  );
};

export default App;
