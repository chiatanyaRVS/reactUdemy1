import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY ="AIzaSyAlaHdiyPchD09_z4a0sqVJiLkfKEOn0dc";



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      videos:[],
      selectedVideo:null
    };

    YTsearch({key:API_KEY, term:"surfboards"}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={(video)=> this.setState({selectedVideo:video})}
        videos={this.state.videos} />
      </div>

    );
  }
}

ReactDOM.render(<App /> , document.querySelector('.container'));
