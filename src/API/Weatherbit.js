import axios from "axios";

export function getData(city) {
  return axios
    .get("https://api.weatherbit.io/v2.0/current?", {
      params: {
        key: "1274cb1601cc4f95ac81a20298c26e00",
        city: city,
        units: "M"
        // lang: "pl"
      }
    })
    .then(res => {
      return res.data.data[0];
    })
    .catch(err => console.log(err));
}
