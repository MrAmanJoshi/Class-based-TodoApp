import React, {Component} from "react";

type obj = {
  title: string, id: string, done: boolean
}

type DoneTodoProps = {
  todo: obj, 
  onSelect: (todo: obj)=> void, 
  
  onDelete: (todo: obj)=> void
}

class DoneTodo extends Component<DoneTodoProps>{

  render(): React.ReactNode {
   return (
     <div>
        <div className="flex w-full">

          <input checked={true} onClick={()=>(this.props.onSelect(this.props.todo))} type='checkbox'
            className="" />

          <p className="text-green-400 font-medium text-lg">{this.props.todo.title}</p>

          <p onClick={()=>(this.props.onDelete(this.props.todo))} className="pl-10 font-black text-3xl pr-auto">×</p>

        </div>
      </div>

   ) 
}
}

export default DoneTodo;