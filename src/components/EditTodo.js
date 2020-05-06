import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
 state = {
      title: this.props.theTodo.title,
      body: this.props.theTodo.body,
      isShowing: false 
    };

  handleFormSubmit = event => {
    event.preventDefault();
    const {title, body}  = this.state;

    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.theTodo._id}`, {
        title,
        body
      })
      .then(() => {
        this.props.getTheTodo();
        // after submitting the form, redirect to '/todos'
        this.props.history.push("/todos");
      })
      .catch(error => console.log(error));
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  };

  showAddTodoForm = () => {
    if (this.state.isShowing) {
      return (
        <div>
          <h3>Edit ToDo</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label> <br/>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.handleChangeTitle(e)}
            />
             <br/> <br/> <br/>
            <label>Body:</label> <br/>
            <textarea
              name="body"
              value={this.state.body}
              onChange={e => this.handleChangeBody(e)}
            />
             <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <hr />
        <button className="editTodoBtn" onClick={() => this.toggleForm()}> Edit ToDo </button>
        {this.showAddTodoForm()}
      </div>
    );
  }
}

export default EditTodo;