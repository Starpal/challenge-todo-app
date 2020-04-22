import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditTodo from './EditTodo';

class SingleTodo extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleTodo();
  }

  getSingleTodo = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( responseFromApi =>{
      const theTodo = responseFromApi.data;
      this.setState(theTodo);
    })
    .catch((err)=>{
        console.log(err)
    })
  }
// EDIT TODO:
  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleTodo();
    } else {
      return (
        <EditTodo
          theTodo={this.state}
          getTheTodo={this.getSingleTodo}
          {...this.props}
        />
      );
    }
  };

// DELETE TODO:
  deleteTodo = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/todos');

    })
    .catch((err)=>{
        console.log(err)
    })
  }


  render(){
    return(
        <div>
      <div className="addTodoForm">
        <h1 className="todoTitle">{this.state.title}</h1> <br/>
        <p>{this.state.body}</p><br/> <br/>
        <button className="btn" onClick={() => this.deleteTodo()}>Delete todo</button>
        <br/> <br/>
        <div>{this.renderEditForm()} </div>
        <br/>

<br/><br/><br/><br/><br/>

        
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      <div className="linkBack">
      <Link to={'/todos'}>Back to To Do's</Link>
      </div>
      </div>
    )
  }
}

export default SingleTodo;