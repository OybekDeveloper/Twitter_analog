import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter."
import PostList from "../PostList/PostList"
import PostAddForm from "../PostAddForm/PostAddForm"
import "./App.css"
import React from "react"

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data :[
        {label:"Going to learn React JS",important:true,id:1},
        {label:"That is so good",important:false,id:2},
        {label:"I  need a break...",important:false,id:3},
        
      ]
    }
    this.deleteItem=this.deleteItem.bind(this)
    this.addItem=this.addItem.bind(this)
    this.maxId=4
  }

  deleteItem(id){
    this.setState(({data})=>{
      const index = data.findIndex(elem=>elem.id===id)
      const newArr=[...data.slice(index,0),...data.slice(index+1)]

      return{
        data:newArr
      }
    })
  }

addItem(body){
    const newItem={
      label:body,
      important:false,
      id:this.maxId++,
    }
    this.setState(({data})=>{
      const newArr=[...data, newItem]
      return{
        data:newArr
      }
    })
} 

render(){
  return(
    <div className="container">
    <div className="App container overflow-auto ">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter/>
      </div>
      <PostList  props={this.state.data} onDalete={this.deleteItem} />
      <PostAddForm onAdd={this.addItem}/>
    </div>
  </div>
  )
}

}