import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {

    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        const trimmed = query.trim();

        if (trimmed) {
            onSearch(trimmed);
            setQuery('');
            }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    
    const isDisabled = query.trim().length === 0;
    return (
        <div className="flex gap-2 items-center">
        <input
        type="text" placeholder="Rechercher…" value={query} onChange={handleChange}
        onKeyDown={handleKeyDown} className="border rounded-lg px-3 py-2 flex-1" aria-label="search-input"/>
        <button onClick={handleSearch} disabled={isDisabled} className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-300">
            Rechercher
        </button>
        </div>
        );
}