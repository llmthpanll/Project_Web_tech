import Carousel from 'nuka-carousel';
const Slidehome = (place)=> {
    const prop2 = place.place
    return (
      <Carousel>
        {prop2.map((prop2, index)=> (
                // console.log("../Page/"+prop2.path+"/1-01.png")
                <div>
                     <img src={prop2.path+"/1-01.png"} alt="home"/>
                     {/* <img src="/Pic/house/นาราสิริ โทเพียรี่ นวมินทร์/1-01.png" alt="home"/> */}
                      
                </div>
            ))}
      </Carousel>
    );
}

export default Slidehome
