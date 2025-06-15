import React from "react";
import TimeVenueBox from "./TimeVenueBox";

const Footer = ({
    
}) => {

    return (
<footer className="bg-black text-white pt-4">
        <div className="col-12 col-md-10 mx-auto">
        {/* Top Row */}
        <div className="">
          <div className="row align-items-center" style={{
            marginBottom: "4rem",
            marginTop: "2rem"
          }}>
            {/* Left logo */}
            <div className="col-md-6">
              <img src="footerLogo.png" alt="Logo" style={{ height: "50px" }} />
            </div>

            {/* Right side - Timer and Address */}
            <TimeVenueBox />
          </div>

          {/* Four Columns */}
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 footer-col-heading">
              <h5>About Us</h5>
              <p>PharmmaEx is India’s leading pharmaceutical exhibition focused exclusively on Third-Party Manufacturing and PCD Franchise Business.</p>
              {/* Social Links */}
              <div className="d-flex gap-2 mt-3">
                <a href="#" className="text-white social-icon"><img src='fbicon.png' /></a>
                <a href="#" className="text-white social-icon"><img src='twitterIcon.png' /></a>
                <a href="#" className="text-white social-icon"><img src='instaIcon.png' /></a>                  
                <a href="#" className="text-white social-icon"><img src='linkedinIcon.png' /></a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-3 footer-col-heading">
              <h5>Quick Links</h5>
              <div className="list-unstyled">
                <p><a href="#" >Exhibitor Form</a></p>
                <p><a href="#" >Visitor Registration</a></p>
                <p><a href="#" >Photo Gallery</a></p>
                <p><a href="#" >About Us</a></p>
                <p><a href="#" >Past Events</a></p>
                <p><a href="#" >Contact Us</a></p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-md-3 footer-col-heading">
              <h5>Helpful Links</h5>
              <div className="list-unstyled">
                <p><a href="#" >Sitemap</a></p>
                <p><a href="#" >Terms & Condition</a></p>
                <p><a href="#" >Privacy Policy</a></p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-md-3 footer-col-heading">
              <h5>Contact Us</h5>
              <div className='contact-us-divs'><img src="location.svg" /><p>Bhardwaj Complex, Near Mobile Tower, Behind HDFC Bank, Krishna Nagar Bulandshahr (U.P.)-203001</p></div>
              <div className='contact-us-divs'><img src="message.svg" /><p>contact@pharmmaex.com</p></div>                  
              <div className='contact-us-divs'><img src="callIcon.svg" /><p>+91-92580 02828, +91-70173 36797</p></div>                  
            </div>
          </div>

          {/* Bottom Logo */}
          <div className="row mt-4">
            <div className="col-12 text-start footer-btm">
              <img src="devasya.png" alt="Bottom Logo" />
              <p>Copyright © 2025 PharmmaEx. All rights reserved.</p>
            </div>
          </div>
        </div>
        </div>
      </footer>
    )
}

export default Footer;