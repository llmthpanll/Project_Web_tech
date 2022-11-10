import Navbar from "../component/Navbar"
import MultipleSelect from "../component/Selector"
import { TextField } from "@mui/material"

const Contact =()=>{
    return(
        <div>
            <Navbar/>
            <div className="container mx-auto">
                <p className="pt-20  text-center text-5xl">CONTACT FORM</p>
                <p className="pt-5 text-center text-3xl">กรอกแบบฟอร์มด้านล่างเพื่อส่งรายละเอียด</p>
            </div>
            <div className="container m-20">
                <MultipleSelect/>
                <TextField id="standard-basic" label="Standard" variant="standard" />

            </div>
        </div>
    )
}

export default Contact
