import React, {ChangeEvent, FC} from 'react';

interface SearchInputProps {
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Search: FC<SearchInputProps> = ({ onSearch }) => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search" onChange={onSearch}/>
            <img alt="search" src="/images/search.svg" className="search-icon"/>
        </div>
    );
};
export default Search;
