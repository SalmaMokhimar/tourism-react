import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './Gallery.scss'
const Gallery = ({ images ,hasThumbnails}) => {

//maping images
const imageElements = images.map((image, index) => (
  <img
    src={require(`../assets/gallery/${image.imgURL}`)}
    alt={image.alt}
    className='image-responsive'
    key={index}
  />
));
    return (
      <div className='carousel-container'>
          <Carousel 
          thumbnails={imageElements}
          isLoop={true}
          isAutoPlaying={true}
          canAutoPlay={true}
          hasTransition={true}
          transitionSpeed={1}
          hasThumbnails={hasThumbnails}
          shouldLazyLoad={true}
          >{imageElements}</Carousel>
      </div>
       
    );
}

export default Gallery;