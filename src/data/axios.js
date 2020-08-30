import axios from "axios";

export default axios.create({
    baseURL: "https://mysterious-garden-41370.herokuapp.com/",
    // use baseURL: "http://homestead.test/api" if running locally
    headers: {
        Accept: "application/json",
    },
});