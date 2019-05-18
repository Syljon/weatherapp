import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./CityWeatherCard.css";

class CityWeatherCard extends Component {
  state = {
    show: false
  };

  static propTypes = {
    cityName: PropTypes.string.isRequired,
    weatherIconCode: PropTypes.string.isRequired,
    weatherDescription: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    clouds: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    wind: PropTypes.object
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
        <h2 style={{ borderTop: "2px dashed black", paddingTop: "1.5rem" }}>
          Cloud coverage: {cloudCoverage}%
        </h2>
        <h2>Humidity : {humidity}%</h2>
        <h2>Pressure : {pressure} hPa</h2>
        <h2>
          Wind: {wind ? `${wind.windDirection} ${wind.windSpeed} m/s` : null}{" "}
        </h2>
      </>
    );
    return (
      <div className="Card" onClick={this.onClickHandler}>
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
        <h2
          style={{
            paddingBottom: "1.5rem"
          }}
        >
          {weatherDescription}
        </h2>
        {this.state.show ? (
          moreInfo
        ) : (
          <p
            style={{
              color: "#333",
              fontSize: "1.1rem",
              position: "absolute",
              bottom: "-6px",
              right: "10px"
            }}
          >
            Tap for More ...
          </p>
        )}
      </div>
    );
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

export default connect(mapStateToProps)(CityWeatherCard);
