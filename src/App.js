import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import SingleTodo from "./components/SingleTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
          <Route exact path="/todos" component={TodoList}/>
          <Route exact path="/todos" component={AddTodo} />
          <Route exact path="/todos/:id" component={SingleTodo} />
          </Switch>
      </div>
    );
  }
}

export default App;
