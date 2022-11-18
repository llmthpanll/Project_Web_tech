import Carousel from 'nuka-carousel';
import { v4 as uuidv4 } from 'uuid';
const Slidehome = (prop) => {
  const place = prop.place
  return (
    <Carousel >
      {place.map((place, index) => (
          <img key={index}  src={place.path + "/1-01.png" }  alt="home"></img>
      ))}
    </Carousel>
  );
}

export default Slidehome
