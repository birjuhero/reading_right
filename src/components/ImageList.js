import React,{useState} from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
  const [flag, setFlag] = useState(true);
  const images = props.images.map(image => <ImageCard image={image} key={image.id}/>);
  let imagesToShow = images;
  if(flag){
    imagesToShow = images.slice(0,8);
  }

  const loadImages =()=>{
    setFlag(false)
  }
  if (props.images.length) {
    return (
      <>
        <div className="random"><b>Random</b></div>
        <div className="img-found">{props.images.length} images has been found</div>
        <div className="image-list">{imagesToShow}</div>
        {flag && 
          <div className="load-more">
            <button type="button" className="btn btn-dark" onClick={loadImages}>load more</button>
          </div>}
      </>
    );
  }
  return null;
};

export default ImageList;