import React, { FC } from 'react';

interface MovieCardProps {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const MovieCard: FC<MovieCardProps> = ({ Title, Year, imdbID, Type, Poster }) => (
    <div className="movie-card">
        <img src={Poster !== "N/A" ? Poster : "/images/placeholder.png"} alt={Title}/>
        <div className="movie-info">
            <p>{Title}</p>
            <p>Year: {Year}</p>
            <p>ID: {imdbID}</p>
            <p>Type: {Type}</p>
        </div>
    </div>
);

export default MovieCard;
