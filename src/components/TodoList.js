import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddTodo from "./AddTodo"; 


class TodotList extends Component {
  constructor() {
    super();
    this.state = { listOfTodos: [] };
  }

  getAllTodos = () => {
    axios.get(`http://localhost:4000/api/v1/todos`).then(responseFromApi => {
      this.setState({
        listOfTodos: responseFromApi.data
      });
    });
  };
  componentDidMount() {
    this.getAllTodos();
  }
  
  render() {
    return (
      <div>
        <h1 className="todoListTitle">Your ToDos</h1>
        <div className="addTodoForm">
          {this.state.listOfTodos.map(todo => {
            return (
              <div className="todoList"key={todo._id}>
                <Link to={`/todos/${todo._id}`}>
                  <h3><u>{todo.title}</u></h3>
                </Link>
                {/* <p className="listBody"style={{maxWidth: '400px'}} >{todo.body} </p> */}
              </div>
            );
          })}
        </div>
        <div>
          <AddTodo getData={() => this.getAllTodos()} />
        </div>
      </div>
    );
  }
}

export default TodotList;