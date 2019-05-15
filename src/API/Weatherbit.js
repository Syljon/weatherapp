import axios from "axios";

export function getData(city) {
  return axios
    .get("https://api.weatherbit.io/v2.0/current?", {
      params: {
        key: "1274cb1601cc4f95ac81a20298c26e00",
        city: city
      }
    })
    .then(res => {
      return res.data.data[0];
      //   console.log(res.data.data[0].weather.icon);
      //   this.setState({
      //     image: `https://www.weatherbit.io/static/img/icons/${
      //       res.data.data[0].weather.icon
      //     }.png`
      //   });
    })
    .catch(err => console.log(err));
}
