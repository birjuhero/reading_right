import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { connect } from "react-redux";

import {
  setUnsplashImages
} from "../reducers/images/action";


class App extends React.Component {

  onSearchSubmit = async term => {
    const response = await Unsplash.get('search/photos/', {
      params: { query: term }
    });
    this.props.setUnsplashImages(response.data.results)
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList  images={this.props.images} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.UnsplashImages.images
  };
};

export default connect(mapStateToProps, {
  setUnsplashImages
})((App));