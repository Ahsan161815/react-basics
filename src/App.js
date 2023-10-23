import React, { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
// const {MovieCard} = require('./MovieCard.jsx');
import MovieCard from "./MovieCard";
const APIKEY =  require('./keys.js');
const ENDPOINT = `https://www.omdbapi.com/?apikey=${APIKEY}`;


const App = () => {

    const [movies, setMovies] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    const searhMovies = async (title) => {
        const respose = await fetch(`${ENDPOINT}&s=${title}`);
        const data = await respose.json();
        // console.log(data.Search);
        setMovies(data.Search);

    };

    useEffect(()=>{
        searhMovies('Superman');
    }, []);

    // console.log(APIKEY);
    return (
        <div className="app">
            <h1>iMovie Times</h1>
            <div className="search">
                <input className="search-bar" type="text" placeholder="Search Here" value={searchTerm} onChange={ (e) => {
                    setSearchTerm(e.target.value);
                    // searhMovies(searchTerm);
                }}/>
                <img src={SearchIcon}  alt="Search" onClick={() => searhMovies(searchTerm)}/>
            </div>

            <div className="container">
                {
                    movies?.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
                }
            </div>

        </div>
        
    )
}

export default App;