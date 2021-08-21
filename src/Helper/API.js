import axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.baseApiUrl = "https://jsonplaceholder.typicode.com/";
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.baseApiUrl,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getUsers = (params) => {
    return this.init().get("users", { params: params });
  };
}
