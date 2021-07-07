import React, { useState } from 'react';
 import { moviesList } from './assets/database';
import Movielist from './MoviesList'
 
import SearchBar from './search/SearchBar'
import AddMovie from './Add'
 
 const Home = props =>{

    const [movieList, setMovieList] = useState(moviesList);
    const [searchWord, setSearchWord] = useState('');
    const [ratingSearch, setRatingSearch] = useState(0);
    
    const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
          const handleSearch = (e) => setSearchWord(e.target.value);
    return (
    <div className='container'>
    <SearchBar
        handleSearch={handleSearch}
      setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
    <Movielist
    moviesArray={
    searchWord
    ? movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchWord.toLowerCase())
    )
    : ratingSearch > 1
        ? movieList.filter((movie) => movie.rate >= ratingSearch)
                : movieList
            }
          />
          <AddMovie handleAdd={addMovie} />
        </div>
      );
    }
export default Home;