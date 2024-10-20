import React, { FC } from 'react';

interface SearchResult {
    query: string;
    totalResults: number
}

const SearchResult: FC<SearchResult> = ({ query, totalResults}) => {
    console.log(totalResults);
    return (
        <div className="search_results">You searched for: <span className="search_query">{query}</span>
            {!isNaN(totalResults) && totalResults > 0 ? <span className="results_badge">{totalResults} results</span> : <div>No results</div>}
        </div>
    );
};
export default SearchResult;
