import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Slideshow from "../component/Slideshow"
import Slidehome from "../component/Slidehome";
const Townhouse = (home) => {
    const Townhouse = home.data
    const style_card = " p-14 grid grid-cols-2 items-center justify-center gap-12 box-border"
    const style_head = " text-center text-4xl font-prompt font-medium"
    const getDatafromSlideShow = (data) => {
        home.getDataApp(data)
    }
    return (
        <div>
            <Navbar />
            <h1 className={"pt-20" + style_head}>บ้านเดี่ยวโดนใจ</h1>
            <h1 className={"pt-10 pb-10" + style_head}>บ้าน...ที่ใช่ในทุกความรู้สึก</h1>
            <Slidehome  place={Townhouse} />
            <div className="bg-gray-100">

                <div className={style_card}>
                    {Townhouse.map((element, index) => (
                        <Slideshow key={element.name} prop={element} getdata={getDatafromSlideShow} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Townhouse;
