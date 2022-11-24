 import { ChangeEvent, Component,  FormEvent } from "react"
import NotDoneList from "./notDoneList"
import DoneList from "./DoneList"
import Button from "./Button"

type TodopageProps = {

};

type obj = { title: string, id: string, done: boolean }


type TodopageState = {
  todo: string;
  todoList: obj[];
  addTodoBtn: boolean
}

class Todopage extends Component<TodopageProps, TodopageState>{

  constructor(props: TodopageProps) {
    super(props)

    this.state = {
      todo: "",
      todoList: [],
      addTodoBtn: false
    }
    
    this.handleInputTodo = this.handleInputTodo.bind(this)
    this.handleSaveTodo = this.handleSaveTodo.bind(this)
    this.handleAddTodoBtn = this.handleAddTodoBtn.bind(this)
    this.handleCancelBtn = this.handleCancelBtn.bind(this)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
    this.handleAddToDoneList = this.handleAddToDoneList.bind(this)
    this.handleAddToNotDoneList = this.handleAddToNotDoneList.bind(this)
      
    
  }

  handleInputTodo(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ todo: e.target.value })
  }

  handleSaveTodo(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
    this.setState({ todoList: [...this.state.todoList, { title: this.state.todo, id: this.state.todo, done: false }] })
    this.setState({todo: ""})
  }

  handleDeleteTodo(todo: obj){
    const filterTodo = this.state.todoList.filter((deleteTodo: obj)=>{
    return  todo.id !== deleteTodo.id
    })
    this.setState({todoList: filterTodo})
  }

  handleAddToNotDoneList(todo: obj){
const notDone = this.state.todoList.filter((todos)=>{
  return todo.id !== todos.id
})    
    this.setState({todoList: [...notDone, {title: todo.title, id: todo.id, done: false}]})
  }

  handleAddToDoneList(todo: obj){
   const notDoneTodo = this.state.todoList.filter((todos: obj)=>{
   return todo.id !== todos.id   
    })
    this.setState({todoList: [...notDoneTodo, {title: todo.title , id: todo.id, done: true }]})
  }
  
 handleAddTodoBtn(){
   this.setState({addTodoBtn: true})
 }  

  handleCancelBtn(){
    this.setState({addTodoBtn: false})
    console.log("helo",this.state.addTodoBtn)
  }
  render(): React.ReactNode {
    
    const notDoneTodo: obj[] = (this.state.todoList).filter((todoObj) => {
      return todoObj.done === false;
    })

    const doneTodo: obj[] = this.state.todoList.filter((todoObj)=>{
      return todoObj.done === true 
    })

    return <div className="pl-3">

      <h1 className="text-3xl mt-10 font-semibold text-green-400">Things to get done</h1>
      <Button className="mt-5">Refresh</Button>

      <h1 className="text-3xl mt-5 font-semibold text-green-400">Things to do</h1>

      <div className=" flex flex-col mt-4 ">

        {
          notDoneTodo.map((todo: obj) => {
            return (
              <NotDoneList todo={todo}
                onSelect={this.handleAddToDoneList}
                onDelete={this.handleDeleteTodo}
                />
          )
          })
        }
      </div>

      {this.state.addTodoBtn == false &&  <div>  <Button  onClick={this.handleAddTodoBtn} className=" mt-5" > + Add a todo </Button>
      </div>}
{
    this.state.addTodoBtn == true &&  <form onSubmit={this.handleSaveTodo} >

        <div className="border border-gray-100 drop-shadow-lg ml-3 mt-4 pt-5 px-3">


          <h4 className="text-lg font-semibold ">Create a todo</h4>

          <input onChange={this.handleInputTodo} type="text" placeholder="Write an article about XState" className=" border 
        border-yellow-600 hover:border-yellow-600 p-5 h-10 mt-5"/>

          <div className="flex my-4">

            <Button disabled={this.state.todo.length == 0} type="submit">Save</Button>

            <Button onClick={this.handleCancelBtn} className="bg-white border border-black text-black ml-4 px-4 py-2 rounded-lg ">Cancel</Button>
          </div>
        </div>
      </form>
}
      <p className="text-3xl font-semibold text-green-400 mt-5">
        Things done   </p>
      {
        doneTodo.map((todoObj)=>{
          return <DoneList
                   todo={todoObj}
    onSelect={this.handleAddToNotDoneList} 
  onDelete = {this.handleDeleteTodo}
                   
    />
        })
      }
    </div>


  }
}

export default Todopage;