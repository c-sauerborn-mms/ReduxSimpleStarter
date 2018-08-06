import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyBehPlShI2yw46OubkFZd1cKWezDFKOim8';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            videoList: [],
            selectedVideo: null
        }

        this.videoSearch("hearthstone");
    }

    videoSearch(searchTerm){

        YTSearch({key: YOUTUBE_API_KEY, term: searchTerm}, (videoList) => {
            this.setState({
                videoList,
                selectedVideo: videoList[0]
            }); 
        });

    }

    render(){ 
        const videoSearch = _.debounce((searchTerm) => {this.videoSearch(searchTerm)}, 300)


        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videoList={this.state.videoList} />
            </div> );
     }
}

ReactDOM.render(<App />, document.querySelector(".container"));