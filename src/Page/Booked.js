import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Slideshow from "../component/Slideshow"


const Booked = (home) => {
  const booked = home.data
  const style_card = " p-14 grid grid-cols-2 items-center justify-center gap-12 box-border"
  const style_head = " text-center text-4xl font-prompt font-medium"
  const getDatafromSlideShow = (data) => {
    home.deleteDataApp(data)
  }
  return (
    <div>
      <Navbar />
      <h1 className={"pt-20"+style_head}>บ้านเดี่ยวโดนใจ</h1>
      <h1 className={"pt-10 pb-10" + style_head}>สไตล์ที่ใช่...ของท่านเปา</h1>
      <div className={style_card}>
        {booked.map((element, index) => (
          <Slideshow key={element.name} prop={element} getdata={getDatafromSlideShow} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Booked;
