import Navbar from "../component/Navbar"
import MultipleSelect from "../component/Selector"
import { TextField } from "@mui/material"
import { Outlet, Link } from "react-router-dom";
import "../component/Contact.css"
const Contact =()=>{
    return(


        <div>
            <Navbar/>

            <div className="container mx-auto">
                <p className="pt-20  text-center text-5xl">ติดต่อพวกเรา</p>
                <div className="columns-2 text-center">
                    <b className="text-2xl">Address</b>
                    <div>
                        <p className="text-left pl-80 pt-5">บริษัท แสนสิริ จำกัด (มหาชน)<br></br>
                        เลขที่ 59 ซอยริมคลองพระโขนง​ แขวงพระโขนงเหนือ
                        เขตวัฒนา​ กรุงเทพมหานคร 10110<b/>
                        </p>
                    </div>
                    <h1>test</h1>

                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>

                </div>
            </div>


            <div className="container mx-auto">
                <p className="pt-20  text-center text-5xl">CONTACT FORM</p>
                <p className="pt-5 text-center text-3xl">กรอกแบบฟอร์มด้านล่างเพื่อส่งรายละเอียด</p>
            </div>
            <div className="container mx-auto m-20">
                <div className="text-center mb-10"><MultipleSelect/></div>
                <div>
                <TextField label="ชื่อ" variant="standard" />
                <TextField label="นามสกุล" variant="standard" />
                <br></br>
                <TextField label="อีเมล" variant="standard" />
                <TextField label="เบอร์โทรศัพท์ 10 หลัก" variant="standard" />
                <br></br>
                <TextField label="หัวข้อ" variant="standard" />
                <br></br>
                <TextField fullWidth id="fullwidth" label="ข้อความของคุณ" variant="standard" />
                </div>
                <Link to= "/">
                    <button  className="w-24 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semiblod rounded-lg">ส่งข้อความ</button>
                </Link>
            </div>

        </div>
    )
}

export default Contact
