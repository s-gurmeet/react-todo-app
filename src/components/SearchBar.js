import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search note..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>ALL</button>
      <button>🌙</button>
    </div>
  );
};

export default SearchBar;
