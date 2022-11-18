import Carousel from "nuka-carousel";

function Slidebook(prop) {
    const place = prop.prop;
    function getDatafromSlideShow(DataPlace) {
        prop.getdata(DataPlace);
        // console.log(DataPlace)
    }
    return (
        <div>
            <div className="w-full rounded overflow-hidden shadow-lg h-4/5">
                <div className="flex items-center bg-white border rounded-lg">
                    {/* PICTURE */}
                    <div className="basis-4/12">
                        <Carousel>
                            <img src={place.path + "/1-01.png"} alt="home" />
                            <img src={place.path + "/2-01.png"} alt="home" />
                            <img src={place.path + "/3-01.png"} alt="home" />
                            <img src={place.path + "/4-01.png"} alt="home" />
                            <img src={place.path + "/5-01.png"} alt="home" />
                        </Carousel>
                    </div>

                    {/* DETAIL */}
                    <div className="basis-8/12">
                        <div className="p-4 leading-normal">
                            <p className="font-prompt font-bold text-xl mb-2">
                                {place.name}
                            </p>
                            <span className="inline font-prompt text-gray-700 text-sm">
                                {place.description}
                            </span>
                            <div className="font-prompt font-bold text-lg mb-2 pt-4">
                                {place.price}
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center w-64">
                                <img className="w-6 py-2 mr-2" src={place.icon1} />
                                <p className=" font-prompt text-gray-700 text-sm">
                                    {place.location1}
                                </p>
                                </div>
                                <div className="flex items-center w-96">
                                <img className="ml-9 w-6 py-2 mr-2" src={place.icon2} />
                                <p className=" font-prompt text-gray-700 text-sm">
                                    {place.location2}
                                </p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button
                                    onClick={() => getDatafromSlideShow(place)}
                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Unbooked
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slidebook;
