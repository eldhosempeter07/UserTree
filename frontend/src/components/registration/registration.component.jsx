import axios from "axios";
import React from "react";
import Select from "react-select";

var data = [];

var options = data;

var levelOptions = [
  { value: "Level 1", label: "Level 1" },
  { value: "Level 2", label: "Level 2" },
  { value: "Level 3", label: "Level 3" },
  { value: "Level 4", label: "Level 4" },
];

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      boss_name: "",
      position: "",
      level: "",
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000/getFirst").then((res) => {
      res.data.forEach((level1) => {
        data.push({ value: level1.name, label: level1.name });
      });
    });
    axios.get("http://localhost:4000/getSecond").then((res) => {
      res.data.forEach((level2) => {
        data.push({ value: level2.name, label: level2.name });
      });
    });

    axios.get("http://localhost:4000/getThird").then((res) => {
      res.data.forEach((level3) => {
        data.push({ value: level3.name, label: level3.name });
      });
    });

    axios.get("http://localhost:4000/getFourth").then((res) => {
      res.data.forEach((level4) => {
        data.push({ value: level4.name, label: level4.name });
      });
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, level, position, boss_name } = this.state;

    const data = {
      name,
      level,
      position,
      boss_name,
    };

    if (level === "Level 2") {
      axios.post("http://localhost:4000/addLevelTwo", data);
      alert("Registered Successfully ");
      axios.put("http://localhost:4000/updateFirst", data);

      this.setState({
        name: "",
        boss_name,
        level: "",
        position: "",
      });
    } else if (level === "Level 3") {
      axios.post("http://localhost:4000/addLevelThree", data);
      alert("Registered Successfully ");

      axios.put("http://localhost:4000/updateSecond", data);

      this.setState({
        name: "",
        boss_name,
        level: "",
        position: "",
      });
    } else if (level === "Level 4") {
      axios.post("http://localhost:4000/addLevelFour", data);
      alert("Registered Successfully ");

      axios.put("http://localhost:4000/updateThird", data);

      this.setState({
        name: "",
        boss_name,
        level: "",
        position: "",
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    console.log(this.state.level);
  };

  bossHandleChange = (e) => {
    this.setState({ boss_name: e.value });
  };

  levelHandleChange = (e) => {
    this.setState({ level: e.value });
  };

  render() {
    const { name, position } = this.state;

    return (
      <div className="inner">
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={name}
              onChange={this.handleChange}
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label>Position</label>
            <input
              type="text"
              className="form-control"
              placeholder="Position"
              value={position}
              onChange={this.handleChange}
              name="position"
              required
            />
          </div>

          <div className="form-group">
            <label>Level</label>
            <Select
              onChange={this.levelHandleChange}
              options={levelOptions}
              defaultValue="A"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Boss ID</label>
            <Select
              onChange={this.bossHandleChange}
              options={options}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
