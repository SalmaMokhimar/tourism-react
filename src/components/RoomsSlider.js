import Carousel from 'react-bootstrap/Carousel';
import Rate from './Rate';
import Button from './Button';
import './RoomsSlider.scss'
import { BsClockHistory } from 'react-icons/bs';

const RoomsSlider = ({images,indicators}) => {
    
  return (
    <Carousel indicators={indicators}>
        {
            images.map((image,index)=>
            <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../assets/gallery/${image.imgURL}`)}
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.description}</h3>
              
              <p>
                <BsClockHistory/> Starts from $ {image.price}
              </p>
              <Rate rating={image.rate}/>
              <Button btn_name="book now" className="sm_btn"/>

            </Carousel.Caption>
          </Carousel.Item>
        )
        }
    </Carousel>
  );
}

export default RoomsSlider;