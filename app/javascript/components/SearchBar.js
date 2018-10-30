import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Enter Your Destination"
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
