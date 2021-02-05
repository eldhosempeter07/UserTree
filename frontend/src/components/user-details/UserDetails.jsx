import axios from "axios";
import React, { Component } from "react";
import "./userDetails.css";

export class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      level1: [],
      level2: [],
      level3: [],
      level4: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/getFirst").then((res) => {
      this.setState({
        level1: res.data,
      });
    });
    axios.get("http://localhost:4000/getSecond").then((res) => {
      this.setState({
        level2: res.data,
      });
    });

    axios.get("http://localhost:4000/getThird").then((res) => {
      this.setState({
        level3: res.data,
      });
    });

    axios.get("http://localhost:4000/getFourth").then((res) => {
      this.setState({
        level4: res.data,
      });
    });
  }

  render() {
    const id = this.props.match.params.id;
    return (
      <div className="user">
        <h3>User Profile</h3>
        {this.state.level1.map((data) =>
          id === data._id ? (
            <div>
              <h3>Name : {data.name}</h3>
              <p>Position:{data.position}</p>
              <p>Bonus: {data.bonus}</p>
              <p>Boss Name:{data.boss_name}</p>
            </div>
          ) : null
        )}
        {this.state.level2.map((data) =>
          id === data._id ? (
            <div>
              <h3>Name : {data.name}</h3>
              <p>Position:{data.position}</p>
              <p>Bonus: {data.bonus}</p>
              <p>Boss Name:{data.boss_name}</p>
            </div>
          ) : null
        )}
        {this.state.level3.map((data) =>
          id === data._id ? (
            <div>
              <h3>Name : {data.name}</h3>
              <p>Position:{data.position}</p>
              <p>Bonus: {data.bonus}</p>
              <p>Boss Name:{data.boss_name}</p>
            </div>
          ) : null
        )}
        {this.state.level4.map((data) =>
          id === data._id ? (
            <div>
              <h3>Name : {data.name}</h3>
              <p>Position:{data.position}</p>
              <p>Bonus: {data.bonus}</p>
              <p>Boss Name:{data.boss_name}</p>
            </div>
          ) : null
        )}
      </div>
    );
  }
}

export default UserDetails;
