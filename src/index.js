import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAMofkE68NaBg1l9IM0FAFXZGRF5meG6C4';



// Criando um novo componente, Esse componete deve produzir HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term:'pokemon'}, (data) => {
            this.setState({ videos: data});
        });
    }
    
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


//Pegue esses componentes gerados em HTML e coloque na página
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);