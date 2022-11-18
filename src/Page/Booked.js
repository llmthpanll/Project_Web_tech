import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Slidebook from "../component/Slidebook"



const Booked = (home) => {
  const booked = home.data
  const style_card = " p-14 items-center justify-center gap-12 box-border"
  const style_head = " text-center text-4xl font-prompt font-medium"
  const getDatafromSlideShow = (data) => {
    home.getDataApp(data)
  }


  return (
    <div className="relative h-screen">
      <Navbar />
      <h1 className={"pt-20" + style_head}>รายการจองของคุณ</h1>
      <h1 className={"pt-10 pb-10" + style_head}>♥ ถูกใจ ♥</h1>
      <div className={style_card}>
        {booked.map((element, index) => (
          <Slidebook key={element.name} prop={element} getdata={getDatafromSlideShow} />
        ))}
      </div>

    </div>
  );
}

export default Booked;
