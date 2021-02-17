import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchQuery: "",
  };
  formSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <div className="form-row mb-5 mt-3">
            <div className="col-12">
              <input
                type="text"
                placeholder="Search a movie"
                className="form-control"
                onChange={this.props.searchMovieProp}
                value={this.state.search}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
