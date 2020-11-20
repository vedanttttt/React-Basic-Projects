import React,{Component} from 'react'
import TodoItem from './TodoItem'
import todosData from '../todosData'

class MainComponent extends Component {
    constructor(){
        super()
        this.state={
            todos : todosData
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState((prevState)=>{
            const updatedTodos = prevState.todos.map((todo)=>{
                if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            console.log(prevState.todos)
            console.log(updatedTodos)
            return{
                todos : updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map((item)=>{
            return(
                <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
            )
        })

        return(
            <div className="todo-list">
                <h2 className="heading">Todo List</h2>
                {todoItems}
            </div>
        )
    }
}

export default MainComponent