import Carousel from 'nuka-carousel';

function SlideShow(prop) {
  const place = prop.prop
  function WannaBooked(DataPlace) {
    prop.getdata(DataPlace)
  }
  return (
    <div>
      <div className='w-full rounded overflow-hidden shadow-lg h-4/5'>
        {/* pic */}
        <div className='w-full'>
          <Carousel>
            <img src={place.path + "/1-01.png"} alt="home" />
            <img src={place.path + "/2-01.png"} alt="home" />
            <img src={place.path + "/3-01.png"} alt="home" />
            <img src={place.path + "/4-01.png"} alt="home" />
            <img src={place.path + "/5-01.png"} alt="home" />
          </Carousel>
        </div>
        {/* detail */}
        <div>
          <div className="px-6 py-4 bg-white">
            <div className="font-prompt font-bold text-xl mb-2">{place.name}</div>
            <span className="inline font-prompt text-gray-700 text-sm">
              {place.description}
            </span>
            <div className="font-prompt font-bold text-lg mb-2">{place.price}</div>
            <img className="w-6 py-2" src={place.icon1} />
            <p className=" font-prompt text-gray-700 text-sm">
              {place.location1}
            </p>
            <img className="w-6 py-2" src={place.icon2} />
            <p className=" font-prompt text-gray-700 text-sm">
              {place.location2}
            </p>
            <button onClick={() => WannaBooked(place)} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Booked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
