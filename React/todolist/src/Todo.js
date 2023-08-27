import React, { Component } from 'react'


 
class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            completed: []
        }
        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.showAll = this.showAll.bind(this)
        this.showActive = this.showActive.bind(this)
        this.showCompleted = this.showCompleted.bind(this)
    }
 
    addTask() {
        let todos = this.state.tasks;
        todos.push(this.task.value)
        console.log(todos);
        this.setState({tasks:todos})
    }
 
    removeTask(ind) {
        let todos = this.state.tasks;
        todos.splice(ind, 1);
        this.setState({ tasks: todos })
    }
    addCompleted(t){
        let todos = this.state.completed;
        console.log(todos); 
        todos.push(t);
        console.log(todos); 
        this.setState({completed:todos})
        console.log(todos); 
    }
    showAll(){

    }
    showActive(){
       let todos = this.state.tasks;
       this.setState({tasks:todos})
       console.log(todos);  
    }

    showCompleted(){
        
        // this.setState({completed:todos}) 
        console.log(todos);
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.tasks.map((t, i) =>
                            <li key={i}>{t} <button onClick={() => {this.removeTask(i);this.addCompleted(t)}}>Remove</button></li>
                        )
                    }
                </ul>

                <input type="text" ref={(e) => this.task = e} />
                <button onClick={this.addTask}>Add Task</button>
                <br/>
                <div>
                    <button onClick={this.showAll}>All</button>
                    <button onClick={this.showActive}>Active</button>
                    <button onClick={this.showCompleted}>Completed</button>
                </div>
            </div>
        )
    }
}
 
export default Todo