import React from "react";
import "./App.css";
import Clock from "./Clock";
import Pagination from "./pagination/pagination";
import TodoList from "./TodoList";

// import {Form} from 'react-bootstrap'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: "1",
      profile: [],
    };
  }

  componentDidMount() {
    fetch("/json/profiles.json")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({ profile: res });
      });
  }

  setUser = (i) => {
    this.setState({ currentUser: i });
  };

  render() {
    return (
      <div className="App">
        <Clock />
        <form>
          {this.state.profile.map((user) => (
            <div>
              <label for={user.id}>{user.name}</label>
              <input
           
                onChange={(e) => this.setUser(user.id)}
                type="radio"
                id={user.id}
                name="user"
                value={user.id}
              />
            </div>
          ))}
        </form>

        <TodoList user={this.state.currentUser} />
        {/* <Pagination /> */}
      </div>
    );
  }
}
