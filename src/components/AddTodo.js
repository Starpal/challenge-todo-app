import React, { Component } from "react";
import axios from "axios";


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", isShowing: false };
   };
  

  handleFormSubmit = event => {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    axios
      .post("http://localhost:4000/api/v1/todos", { title, body })
      .then(() => {
        this.props.getData();
        this.setState({ title: "", body: "" });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
        <div className="addTodoForm">
           <br/>
          <h3>Add a New ToDo!</h3>
          <br/> <br/>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label> <br/>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.handleChange(e)}
            />
             <br/> <br/>
            <label>Body:</label> <br/>
            <textarea
              name="body"
              value={this.state.body}
              onChange={e => this.handleChange(e)}
            />
             <br/> <br/>
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
        <button className="addTodoBtn" onClick={() => this.toggleForm()}> Add a New ToDo </button>
        {this.showAddTodoForm()}
      </div>
    );
  }
}

export default AddTodo;
