import React, { FC, ChangeEvent } from 'react';
import Logo from "../logo";
import Search from "../search";
import ProfileBar from "../profile-bar";

export interface SearchProps {
    onSearch: (query: string) => void;
}

const Header: FC<SearchProps> = ({ onSearch }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <header>
            <Logo />
            <Search onSearch={handleInputChange} />
            <ProfileBar />
        </header>
    );
};

export default Header;
