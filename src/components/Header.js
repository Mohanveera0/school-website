import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="back-color">
        <div className="container-fulid ont-text">
          <nav class="navbar navbar-expand-lg navbar-light">
            <img src="./Images/school.jpeg" className="tick-HOME" alt="star" />
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./aboutus">
                  About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./academics">
                  Academics
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="./admissions">
                  Admissions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./faculty">
                  Faculty
                  </a>
                </li>

                
                <li class="nav-item">
                  <a class="nav-link" href="./students">
                  Students
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./gallery">
                  Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./contactUs">
                  Contact Us
                  </a>
                </li>





                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
