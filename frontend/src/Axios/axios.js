import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:4000/api"
});

export default instance;

//asdf    