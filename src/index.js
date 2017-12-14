import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAMofkE68NaBg1l9IM0FAFXZGRF5meG6C4';



// Criando um novo componente, Esse componete deve produzir HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('skate');
        
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({ videos: data,
            selectedVideo: data[0]
            });
        });
    }
    
    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                 videos={this.state.videos} />
            </div>
        );
    }
}


//Pegue esses componentes gerados em HTML e coloque na página
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);