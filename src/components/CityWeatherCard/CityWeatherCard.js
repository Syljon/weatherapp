import React, { Component } from "react";
import { connect } from "react-redux";
import "./CityWeatherCard.css";

import PropTypes from "prop-types";

class CityWeatherCard extends Component {
  state = {
    show: false
  };
  onClickHandler = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };
  render() {
    const {
      cityName,
      weatherIconCode,
      weatherDescription,
      temperature,
      cloudCoverage,
      humidity,
      pressure,
      wind
    } = this.props;

    const moreInfo = (
      <>
        <h2 style={{ borderTop: "2px dashed black", paddingTop: "1rem" }}>
          Cloud coverage: {cloudCoverage}%
        </h2>
        <h2>Humidity : {humidity}%</h2>
        <h2>Pressure : {pressure} hPa</h2>
        <h2>
          Wind: {wind ? `${wind.windDirection} ${wind.windSpeed} m/s` : null}{" "}
        </h2>
      </>
    );
    const card = (
      <div className="Card">
        {weatherIconCode ? (
          <div
            className="Img"
            style={{
              backgroundImage: `url(https://www.weatherbit.io/static/img/icons/${weatherIconCode}.png)`
            }}
          />
        ) : null}
        <h2>{cityName}</h2>
        <h2>{temperature} &deg;C</h2>
        <h2>{weatherDescription}</h2>
        <button onClick={this.onClickHandler}>
          {this.state.show ? `Show` : `Hide`}
        </button>
        {this.state.show ? moreInfo : null}
      </div>
    );
    return <>{this.props.cityName ? card : null}</>;
  }
}

const mapStateToProps = state => {
  return {
    cityName: state.cityName,
    weatherIconCode: state.weatherIconCode,
    weatherDescription: state.weatherDescription,
    temperature: state.temperature,
    cloudCoverage: state.cloudCoverage,
    humidity: state.humidity,
    pressure: state.pressure,
    wind: state.wind
  };
};
CityWeatherCard.propTypes = {
  cityName: PropTypes.string,
  weatherIconCode: PropTypes.string,
  weatherDescription: PropTypes.string,
  temperature: PropTypes.number,
  clouds: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number
};
export default connect(mapStateToProps)(CityWeatherCard);
