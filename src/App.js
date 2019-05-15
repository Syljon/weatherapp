import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "./store/actions";
class App extends Component {
  componentDidMount() {
    // axios
    //   .get("https://api.weatherbit.io/v2.0/current?", {
    //     params: {
    //       key: "1274cb1601cc4f95ac81a20298c26e00",
    //       city: "Warszawa"
    //     }
    //   })
    //   .then(res => {
    //     console.log(res.data.data[0]);
    //     console.log(res.data.data[0].weather.icon);
    //     this.setState({
    //       image: `https://www.weatherbit.io/static/img/icons/${
    //         res.data.data[0].weather.icon
    //       }.png`
    //     });
    //   })
    //   .catch(err => console.log(err));
    this.props.onSubmit("Londyn");
  }
  render() {
    return (
      <div className="App">
        {/* {this.state.image ? (
          <div
            className="Img"
            style={{ backgroundImage: `url(${this.state.image})` }}
          />
        ) : null} */}
        <h1>{this.props.cityName}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cityName: state.city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: city => dispatch(actions.fetchData(city))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
