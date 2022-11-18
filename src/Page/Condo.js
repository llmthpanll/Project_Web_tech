import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Slideshow from "../component/Slideshow"

const Condo = (home) => {
    const Condo = home.data
    const style_card = " p-14 grid grid-cols-2 items-center justify-center gap-12 box-border"
    const style_head = " text-center text-4xl font-prompt font-medium"
    const getDatafromSlideShow = (data) => {
        home.getDataApp(data)

    }
    return (
        <div>
            <Navbar />
            <h1 className={"pt-20" + style_head}>ธรรมชาติ...ในกรุงฯ</h1>
            <h1 className={"pt-10 pb-10" + style_head}>ใช้ชีวิตอย่างมีสไตล์</h1>

            <div className="bg-gray-100">
                <div className={style_card}>
                    {Condo.map((element, index) => (
                        <Slideshow key={element.name} prop={element} getdata={getDatafromSlideShow} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Condo;
