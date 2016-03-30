import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyBji3AffcdxHYGJTWSXtU1_dNbDfcSWCpw';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };

    this.videoSearch('javascript');

  }

  videoSearch(term) {

    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => this.setState({
      videos: videos,
      selectedVideo: videos[0]
    }));
  }

  render() {

    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );

  }

}

ReactDom.render(<App />, document.querySelector('.container'));
