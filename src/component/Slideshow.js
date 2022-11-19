import Carousel from 'nuka-carousel';
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import FavoriteIcon from '@mui/icons-material/Favorite';
function SlideShow(prop) {
  const place = prop.prop
  function getDatafromSlideShow(DataPlace) {
    prop.getdata(DataPlace)
    // console.log(DataPlace)
    toast.custom(
      (t) => (
        <div >
          <div class="flex gap-1 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
            <div class="font-medium">Booked Success !!</div>
            <div>You can check in <FavoriteIcon className="text-red-400"/></div>
            <div className='cursor-pointer' onClick={() => toast.dismiss(t.id)}><MdOutlineClose /></div>
          </div>
        </div>
      ),
      { id: "unique-notification", position: "top-center" }
    );
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
          <div className=" px-6 py-4 bg-white">
            <div className="font-prompt font-bold text-xl mb-2">{place.name}</div>
            <span className="inline font-prompt text-gray-700 text-sm h-96">
              {place.description}
            </span>
            <div className="font-prompt font-bold text-lg mb-2">{place.price}</div>
            <img className="w-6 py-2" src={place.icon1} alt="description of image"/>
            <p className=" font-prompt text-gray-700 text-sm">
              {place.location1}
            </p>
            <img className="w-6 py-2" src={place.icon2} alt="description of image"/>
            <p className=" font-prompt text-gray-700 text-sm">
              {place.location2}
            </p>
            <button onClick={() => getDatafromSlideShow(place)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Booked
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
