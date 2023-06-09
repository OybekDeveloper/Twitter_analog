import "./AppHeader.css"

const AppHeader=({like,allPost })=>{
  return(
    <div className="app-header pt-3 pb-3  d-flex">
      <h1>Oybek Bakhtiyorov</h1>
      <h2>{allPost} posts,  like {like}</h2>
    </div>
  )
}

export default AppHeader