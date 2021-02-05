import React, { Component } from "react";
import axios from "axios";
import "./details.css";
import { Link } from "react-router-dom";
export default class Details extends Component {
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
    console.log(this.state);
    return (
      <div className="tf-tree levels">
        <ul>
          {this.state.level1.map((data) => (
            <li key={data._id}>
              <Link to={"/users/" + data._id} key={data._id}>
                <div className="tf-nc level1">
                  <p>{data.name}</p>
                  <p>Title:{data.position}</p>
                  <p>Id:{data._id.substring(0, 8)}</p>
                </div>
              </Link>
              <ul>
                {this.state.level2 &&
                  this.state.level2.map((item) =>
                    item.boss_name === data.name ? (
                      <li key={item._id}>
                        <Link to={"/users/" + item._id}>
                          <div className="tf-nc level2">
                            <p>{item.name}</p>
                            <p>Position:{item.position}</p>
                            <p>Id:{item._id.substring(0, 8)}</p>
                          </div>
                        </Link>
                        <ul>
                          {this.state.level3 &&
                            this.state.level3.map((developer) =>
                              developer.boss_name === item.name ? (
                                <li key={developer._id}>
                                  <Link
                                    to={"/users/" + developer._id}
                                    user={developer}
                                  >
                                    <div className="tf-nc level3">
                                      <p>{developer.name}</p>
                                      <p>Position:{developer.position}</p>
                                      <p>Id:{developer._id.substring(0, 8)}</p>
                                    </div>
                                  </Link>

                                  <ul>
                                    {this.state.level4 &&
                                      this.state.level4.map((customer) =>
                                        customer.boss_name ===
                                        developer.name ? (
                                          <li key={customer._id}>
                                            <Link
                                              to={"/users/" + customer._id}
                                              user={customer}
                                            >
                                              <div className="tf-nc level4">
                                                <p>{customer.name}</p>
                                                <p>Id:{customer.position}</p>
                                                <p>
                                                  Position:
                                                  {customer._id.substring(0, 8)}
                                                </p>
                                              </div>
                                            </Link>
                                          </li>
                                        ) : null
                                      )}
                                  </ul>
                                </li>
                              ) : null
                            )}
                        </ul>
                      </li>
                    ) : null
                  )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
