import PostListItem from "../PostListItem/PostListItem"
import "./PostList.css"
const PostList=({props})=>{

const elements=props.map((items)=>{
  const {id,...itemProps}=items;
  return(
    <li key={id} className="list-group-item">
      <PostListItem {...itemProps}/>
    </li>
  )
})
  return(
    <ul className="app-list list-group">
      {elements }
    </ul>
  )
}

export default PostList