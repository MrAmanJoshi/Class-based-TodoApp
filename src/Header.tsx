import { Component } from "react"

class Header extends Component {
 render(): React.ReactNode{ 
  return (
    
    <div className=" flex bg-gradient-to-r from-blue-400 to-green-400 justify-between pl-3 py-4 text-xl font-bold text-white">
    <h1>XTodo</h1>
      
    </div>
  )
 }
  }

export default Header;