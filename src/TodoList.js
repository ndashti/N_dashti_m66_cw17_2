import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: ["iiu", "hgfhf"],
      done: ["Done"],
    };
    this.addTodo = this.addTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
  }

  componentDidMount() {
    // fetch("/json/todo.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((res) => {
    //     this.setState({ list: res });
    //   });
    this.loadfarbod()
  }

  loadHarry=() =>{
    fetch("/json/todo.json")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      this.setState({ list: res });
    });
  }

  loadfarbod=() =>{
    fetch("/json/todo_farbod.json")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      this.setState({ list: res });
    });
  }


  componentDidUpdate(prevProps,prevState){
    let currentUser=this.props.user;
    console.log(currentUser)
    if(currentUser !== prevProps.user){
      if(currentUser === '1'){
        this.loadHarry()
      }else{
        this.loadfarbod()
      }
    }
  }
 


  addTodo() {
    if (this.state.value === "") {
      return;
    }
    this.setState({list: [{ "id": this.state.length, "todo": this.state.value}, ...this.state.list], value: ' '})
  }

  removeTodo = (todo) => {
    let list = this.state.list.filter(l => l.todo !== todo.todo)
    this.setState({list: list})
    // this.setState(state =>{
    //     return state.list.splice(i,deletCount:1)
    // })
  };

  doneTodo(todo) {
    this.removeTodo(todo);
    this.setState({ done: [...this.state.done, todo] });
  }

  render() {
    return (
      <div>
          <div>
              <input type="text" value={this.state.value} onChange={e => {
                  this.setState({value: e.target.value})
              }}/>
              <button onClick={this.addTodo}>add</button>
          </div>
          <ul>
              {this.state.list.map((item, i) => <TodoItem
                  key={item.id}
                  index={i + 1}
                  title={item.todo}
                  remove={() => this.removeTodo(item)}
                  doneTodo={() => this.doneTodo(item)}
              />)}
          </ul>
          <h3> Done Tasks</h3>
          <ul>
              {this.state.done.map(d => <li key={d.id}>{d.todo}</li>)}
          </ul>

      </div>)
  }
}
export default TodoList;
