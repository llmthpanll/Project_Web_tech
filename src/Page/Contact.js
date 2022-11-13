import Navbar from "../component/Navbar";
import MultipleSelect from "../component/Selector";
import { TextField } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
const Contact = () => {
    return (
        <div>
            <Navbar />

            <div className="container mx-auto">
                <p className="pt-20  text-center text-5xl">CONTACT FORM</p>
                <p className="pt-5 text-center text-3xl">
                    กรอกแบบฟอร์มด้านล่างเพื่อส่งรายละเอียด
                </p>
            </div>
            <div className="container mx-auto m-20 flex flex-col justify-center align-center items-center">
                <div className="text-center mb-10">
                    <MultipleSelect />
                </div>

                <div className="">
                    <div className="grid grid-cols-2 gap-x-3">
                        <TextField label="ชื่อ" variant="standard" />
                        <TextField label="นามสกุล" variant="standard" />
                        <TextField label="อีเมล" variant="standard" />
                        <TextField label="เบอร์โทรศัพท์ 10 หลัก" variant="standard" />
                    </div>
                    <div>
                        <TextField label="หัวข้อ" variant="standard" /><br/>
                        <TextField fullWidth label="ข้อความของคุณ" variant="standard" />
                    </div>
                </div>
                    <Link to="/Home">
                        <button className="w-24 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semiblod rounded-lg">
                            ส่งข้อความ
                        </button>
                    </Link>
            </div>
        </div>
    );
};

export default Contact;
