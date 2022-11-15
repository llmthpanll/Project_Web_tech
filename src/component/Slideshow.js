import Carousel from 'nuka-carousel';
import { json } from 'react-router-dom';

function SlideShow(prop) {
    const place = prop.prop
    console.log(prop.prop)
    return (
      <Carousel>

                     <img src={place.path+"/1-01.png"} alt="home"/>
                     <img src={place.path+"/2-01.png"} alt="home"/>
                     <img src={place.path+"/3-01.png"} alt="home"/>
                     <img src={place.path+"/4-01.png"} alt="home"/>
                     <img src={place.path+"/5-01.png"} alt="home"/>
               
      </Carousel>
    );
}

export default SlideShow;
