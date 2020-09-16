import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-5ea6a.cloudfunctions.net/api", // The API (cloud function) URL
});

export default instance;

// http://localhost:5001/clone-5ea6a/us-central1/api
