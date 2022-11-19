import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
// function Footer() {
const Footer = () => {
  return (
    <div className="bg-black text-white text-center p-4">
      <div className="flex justify-center gap-2">
        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookOutlinedIcon />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
        <div>
        <a href="https://www.github.com/" target="_blank">
          <GitHubIcon />
        </a>
        </div>
      </div>
      <div className="m-2 mb-0">
        <p>COPYRIGHT © 2022</p>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
