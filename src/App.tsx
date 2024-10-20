import React, { useState, useEffect } from 'react';
import Header from './components/layout/header';
import MovieCard from './components/movie-list/card';
import Pagination from './components/movie-list/pagination';
import Loader from './components/loader';
import "./styles/App.css";
import SearchResult from "./components/layout/search/lib/search-result-text";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchMovies = async (searchQuery: string, page: number = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=8523cbb8&s=${searchQuery}&page=${page}`);
      const data = await response.json();
      setMovies(data.Search || []);
      setTotalResults(parseInt(data.totalResults, 10));
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query, currentPage);
    }
  }, [query, currentPage]);

  // Helper to get only 8 movies
  const moviesToShow = movies.slice(0, 8);

  return (
      <div className="main">
        <Header onSearch={(searchQuery: string) => setQuery(searchQuery)} />
        {query && <SearchResult query={query} totalResults={totalResults} />}
        {loading ? <Loader /> :
            (<div>
                  <div className="movie-list">
                    {moviesToShow.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}
                  </div>
                  {totalResults > 8 && <Pagination currentPage={currentPage} totalResults={totalResults} onPageChange={setCurrentPage} />}
                </div>
            )}
      </div>
  );
};

export default App;
