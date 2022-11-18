import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Slideshow from "../component/Slideshow"

const Area = (home) => {
    const Area = home.data
    const style_card = " p-14 grid grid-cols-2 items-center justify-center gap-12 box-border"
    const style_head = " text-center text-4xl font-prompt font-medium"
    const getDatafromSlideShow = (data) => {
        home.getDataApp(data)

    }
    return (
        <div>
            <Navbar />
            <h1 className={"pt-20" + style_head}>สะดวกเดินทาง ใกล้ชุมชน</h1>
            <h1 className={"pt-10 pb-10" + style_head}>ทำเล...มีใจ</h1>

            <div className="bg-gray-100">
                <div className={style_card}>
                    {Area.map((element, index) => (
                        <Slideshow key={element.name} prop={element} getdata={getDatafromSlideShow} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Area;
