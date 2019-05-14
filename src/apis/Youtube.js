import axios from "axios";

const KEY = "AIzaSyDmjBjRtLflkCPre7D-fgwSK7jcZ0v1who";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
