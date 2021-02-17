import './App.css';
import {useState, useEffect} from 'react';
import Movie from './Movie';


function App() {
  const [movies, setMovies]=useState([]);
  const [searchValue, setSearchValue]=useState('');  
  const [searchMovie, setSearchMovie]=useState('');

  
const API_KEY='257146251dd285470ee76f3d729bcfa9'
const FEATURED_API=`
https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMG_API= `https://image.tmdb.org/t/p/w500`;
const SEARCH_API= `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}&page=1&include_adult=false`;
  useEffect(async()=>{ 
    let data;
    if(searchMovie!=''){
      const response= await fetch(SEARCH_API);
      data= await response.json();      
    }else{
      const response= await fetch(FEATURED_API);
      data= await response.json();
    }
    setMovies(data.results);
  }, [searchMovie])

  const handleSubmit= e=>{
    e.preventDefault();
    setSearchMovie(searchValue.replaceAll(' ', '+'));
    setSearchValue('')
  }
  const handleOnChange= e=>{
    setSearchValue(e.target.value);
  }
  return (
    <>
    <header className="header">
    <form onSubmit={handleSubmit} >
      <input type="search" className="search" value={searchValue} onChange={handleOnChange} />
      <button type="submit">OK </button> 
    </form>
      
    </header>
    <div className="movie-container">
     {
       movies.map(movie=>(
       <Movie key={movie.id} {...movie}/> 
       )
      )
      }
    </div>
    </>
  );
}

export default App;
