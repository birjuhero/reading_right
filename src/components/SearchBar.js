import React from 'react';
import img from './download.png';
import './searchbar.css';
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.term) {
      this.props.onSubmit(this.state.term);
    }
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <>
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <div className="search-bar">
            <input className="form-control form-control-md mr-3 user-input" type="text" placeholder="Search"
              aria-label="Search" value={this.state.term} onChange={this.onInputChange} />
            <img className="search-icon" src={img} alt="Italian Trulli" onClick={this.onFormSubmit}/>
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;