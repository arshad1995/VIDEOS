import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./apis/Youtube";
import { async } from "q";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedvideo: null
  };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async term => {
    const response = await Youtube.get("./search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({ selectedvideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedvideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
