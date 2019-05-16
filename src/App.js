import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./components/Form/Form";
import "./App.css";
import * as actions from "./store/actions";
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
    console.log(this.props.weatherIconCode);
    return (
      <div className="App">
        <h1 className="App-heading">Weather App</h1>
        <Form
          submit={this.onSubmitFormHanlder}
          changed={this.onInputChangeHandler}
          value={this.state.searchCityName}
        />
        {this.props.weatherIconCode ? (
          <div
            className="Img"
            style={{
              backgroundImage: `url(https://www.weatherbit.io/static/img/icons/${
                this.props.weatherIconCode
              }.png)`
            }}
          />
        ) : null}
        <h2>{this.props.cityName}</h2>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cityName: state.cityName,
    weatherIconCode: state.weatherIconCode
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
