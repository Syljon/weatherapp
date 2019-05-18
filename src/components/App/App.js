import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import PropTypes from "prop-types";

import Form from "../Form/Form";
import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ModalHowToUse from "../ModalHowToUse/ModalHowToUse";
import HelpIcone from "../HelpIcone/HelpIcone";

import "./App.css";

class App extends Component {
  state = {
    searchCityName: ""
  };

  static propTypes = {
    cityName: PropTypes.string,
    error: PropTypes.bool,
    showHowToUse: PropTypes.bool
  };
  componentDidMount() {
    if (localStorage.getItem("City")) {
      this.setState({ searchCityName: localStorage.getItem("City") });
      this.props.onSubmit(localStorage.getItem("City"));
    }
  }
  onSubmitFormHanlder = e => {
    e.preventDefault();
    this.props.clearStore();
    localStorage.setItem("City", this.state.searchCityName);
    this.props.onSubmit(this.state.searchCityName);
  };
  onInputChangeHandler = e => {
    this.setState({ searchCityName: e.target.value });
  };

  render() {
    const { searchCityName } = this.state;
    const { cityName, error, showHowToUse } = this.props;
    return (
      <div className="App">
        <h1 className="App-heading">Weather App</h1>
        <Form
          submit={this.onSubmitFormHanlder}
          changed={this.onInputChangeHandler}
          value={searchCityName}
        />
        {cityName ? <CityWeatherCard /> : null}
        {error ? <ErrorMessage /> : null}
        {showHowToUse ? <ModalHowToUse /> : <HelpIcone />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cityName: state.cityName,
    error: state.error,
    showHowToUse: state.showHowToUse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: city => dispatch(actions.fetchData(city)),
    clearStore: () => dispatch(actions.clearStore())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
