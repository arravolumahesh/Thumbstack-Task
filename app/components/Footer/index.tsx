import "./index.css";
import { CiFacebook  } from "react-icons/ci";
import {AiFillTwitterCircle} from "react-icons/ai"
import {TiSocialLinkedinCircular} from "react-icons/ti";
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="Footer-section-bg-container">
      <div className="Fooetr-section-deatils-container">
        <div className="logo-container">
          <img src="https://res.cloudinary.com/devj4jofj/image/upload/v1694692748/logo_1_pxaxbl.jpg" className="logo" />
        </div>
        <div className="Footer-section-deatils-lists-bg-container">
          <div className="Footer-section-deatils-list-container">
            <span className="Footer-section-deatils-list-heading">Company</span>
            <span className="Footer-section-deatils-list-text">About US</span>
            <span className="Footer-section-deatils-list-text">Services</span>
            <span className="Footer-section-deatils-list-text">Career</span>
          </div>
          <div className="Footer-section-deatils-list-container">
            <span className="Footer-section-deatils-list-heading">Links</span>
            <span className="Footer-section-deatils-list-text">Products</span>
            <span className="Footer-section-deatils-list-text">Platform</span>
            <span className="Footer-section-deatils-list-text">
              Knowledge Center
            </span>
          </div>
          <div className="Footer-section-deatils-list-container">
            <span className="Footer-section-deatils-list-heading">Contact</span>
            <span className="Footer-section-contact-details-container">
              <img
                src="https://res.cloudinary.com/devj4jofj/image/upload/v1695036085/fi-br-phone-call_canfhc.jpg"
                className="Footer-section-contact-img"
              />
              <span className="Footer-section-deatils-list-text Footer-section-contact-details-container-span">
                223 7283 2381
              </span>
            </span>
            <span className="Footer-section-contact-details-container Footer-section-deatils-list-text">
              <img
                src="https://res.cloudinary.com/devj4jofj/image/upload/v1695036184/fi-br-envelope_yip9rj.jpg"
                className="Footer-section-contact-img"
              />
              Helpdesk@sbi.com
            </span>
            <span className="Footer-section-contact-details-container">
              <CiFacebook className="Footer-section-social-media-img"/>
              <AiFillTwitterCircle className="Footer-section-social-media-img"
              />
              <TiSocialLinkedinCircular className="Footer-section-social-media-img"
              />
              <BsInstagram className="Footer-section-social-media-img"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="Footer-section-our-apps-container">
        <p className="Footer-section-deatils-list-heading out-app-text">
          Our Apps
        </p>
        <div className="Trading-experience-section-imgs-container">
          <img
            src="https://res.cloudinary.com/devj4jofj/image/upload/v1695037109/apple_zingwb.jpg"
            className="Trading-experience-section-img"
          />
          <img
            src="https://res.cloudinary.com/devj4jofj/image/upload/v1695037195/GooglePlay_qvu0op.jpg"
            className="Trading-experience-section-img"
          />
        </div>
      </div>
      <div className="Footer-section-copy-right-text-container">
        <p className="Footer-section-copy-right-text">
          Copyright © 2021. All rights Reserved. SBICAP Securities Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;