import PostListItem from "../PostListItem/PostListItem"
import "./PostList.css"
const PostList=({props,onDalete})=>{

const elements=props.map((items)=>{
  const {id,...itemProps}=items;
  return(
    <li key={id} className="list-group-item">
      <PostListItem {...itemProps} onDalete={()=>{onDalete(id)}}/>
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