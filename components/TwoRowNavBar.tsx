import React from "react";

const TwoRowNavbar = () => {
  return (
    <nav className="border-bottom">
      {/* Top Bar */}
      <div className="container-fluid d-flex justify-content-between align-items-center py-1 px-3" style={{
        height: "3rem",
        borderBottom: "1px solid #DEDEDE",
        fontFamily: "Rubik",
      }}>
        <div className="d-flex align-items-center gap-2">
          <div style={{
                marginRight: "2rem"
          }}>
            <img src='/callIcon.png' alt="Call Icon" style={{ 
                width: 20,
                height: 18,
                top: "16px",
                left: "436px",
                marginRight: "0.5rem"
            }} />
            <i className="bi bi-telephone-fill" />
            <span style={{
                fontFamily: "Rubik",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "14px",
                letterSpacing: "0%",
                color: "#444444"
            }}>+91-92580 02828, +91-70173 36797</span>
          </div>
          <div style={{
                marginRight: "2rem"
          }}>
            <img src='/Message@2x.png' alt="Call Icon" style={{ 
                width: 20,
                height: 18,
                top: "16px",
                left: "436px",
                marginRight: "0.5rem"
            }} />
            <span style={{
                fontFamily: "Rubik",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "14px",
                letterSpacing: "0%",
                color: "#444444"
            }}>contact@pharmmaex.com</span>
          </div>
        </div>
        <div>
          <small style={{
              fontFamily: "Rubik",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "-1%",
              color: "#444444"
          }}>
            Organised by <strong style={{
              color: '#00833D'
            }}>Devasya Media Pvt. Ltd.</strong>
          </small>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between py-2 px-3" style={{
        height: "6.25rem",
        borderBottom: "1px solid #DEDEDE",
        fontFamily: "Rubik",
      }}>
        {/* Left: Logo + Address */}
        <div className="d-flex align-items-center gap-3">
          <img src="logo-png.png" alt="Logo" style={{ height: "40px" }} />
          <span className="small" style={{
            width: "11rem",
            color: "#111111",
            fontWeight: 400,
          }}>02-03 October, 2025
            Bombay Exhibition Centre,
            Mumbai
          </span>
        </div>

        {/* Center: Nav Tabs */}
        <ul className="nav justify-content-center flex-grow-1 mx-4 nav-bar-row-2" >
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Who We Are
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Events
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Download
            </a>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Web Design
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Development
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Review
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="eventsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Workshops
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Webinars
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Right: Buttons */}
        <div className="d-flex gap-2">
          <button className="nav-btn">Pre-Registration</button>
          <button className="nav-btn">Become Exhibitor</button>
        </div>
      </div>
    </nav>
  );
};

export default TwoRowNavbar;
