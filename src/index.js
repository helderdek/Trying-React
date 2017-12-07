import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBPRuHhQg0JlFnCm5pcc27lytlqUfeQylA';

// Criando um novo componente, Esse componete deve produzir HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}


//Pegue esses componentes gerados em HTML e coloque na página
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);