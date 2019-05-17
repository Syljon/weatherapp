import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import PropTypes from "prop-types";

import Form from "./components/Form/Form";
import CityWeatherCard from "./components/CityWeatherCard/CityWeatherCard";

import "./App.css";

class App extends Component {
  state = {
    searchCityName: ""
  };
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
    console.log("_____");
    this.props.onSubmit("Londyn");
  }
  onSubmitFormHanlder = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchCityName);
  };
  onInputChangeHandler = e => {
    this.setState({ searchCityName: e.target.value });
  };
  render() {
    const { searchCityName } = this.state;
    return (
      <div className="App">
        <h1 className="App-heading">Weather App</h1>
        <Form
          submit={this.onSubmitFormHanlder}
          changed={this.onInputChangeHandler}
          value={searchCityName}
        />
        <CityWeatherCard />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: city => dispatch(actions.fetchData(city))
  };
};

App.propTypes = {
  cityName: PropTypes.string,
  weatherIconCode: PropTypes.string,
  temperature: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
