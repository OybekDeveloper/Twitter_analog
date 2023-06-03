import "./AppHeader.css"

const AppHeader=({like, allPosts})=>{
  return(
    <div className="app-header pt-3 pb-3  d-flex">
      <h1>Oybek Bakhtiyorov</h1>
      <h2>{allPosts} posts,  like {like}</h2>
    </div>
  )
}

export default AppHeader