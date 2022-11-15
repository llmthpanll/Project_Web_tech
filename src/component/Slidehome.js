import Carousel from 'nuka-carousel';

const Slidehome = (prop) => {
  const place = prop.place
  return (
    <Carousel>
      {place.map((place, index) => (
        <div >
          <img src={place.path + "/1-01.png"} alt="home" />
        </div>
      ))}
    </Carousel>
  );
}

export default Slidehome
