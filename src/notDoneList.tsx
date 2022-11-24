import React, { Component } from "react";



type obj = {
  title: string,
  id: string,
  done: boolean
}
type notDoneProps = {
  todo: obj
  onDelete: (todo: obj)=>void
  onSelect: (todo: obj)=> void
}

class NotDoneList extends Component<notDoneProps>{

  constructor(props: notDoneProps){
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className="flex w-full">

          <input checked={false} onClick={()=>(this.props.onSelect(this.props.todo))} type='checkbox'
            className="" />

          <p className="text-green-400 font-medium text-lg">{this.props.todo.title}</p>

          <p onClick={()=>(this.props.onDelete(this.props.todo))} className="pl-10 pr-auto text-3xl font-black">×</p>

        </div>
      </div>
    )
  }
}


export default NotDoneList;