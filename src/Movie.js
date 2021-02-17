import React from 'react';
const IMG_API= `https://image.tmdb.org/t/p/w500`;

const Movie = ({title, poster_path, overview, vote_average})=>{
    let voteAverageClassName='vote-red';
    if(vote_average > 3 && vote_average <= 6 ){
        voteAverageClassName='vote-orange';
    }else if(vote_average > 6){
        voteAverageClassName='vote-green';
    }

    return <div className="movie">
                <img src={IMG_API + poster_path} alt={title} /> 
                <div className="movie-info">
                <h3>{title}</h3>
                <span className={voteAverageClassName}>{vote_average}</span>
                </div>
                <div className="movie-overview">
                <h3>Overview</h3>
                <p> 
                    {overview}
                </p>
                </div>
            </div>
}
    
export default Movie;