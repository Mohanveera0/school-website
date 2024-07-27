import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
     <section className="mb-5">
        <h1 className="text-center mt-5 mb-5">CONTACT-US</h1>
      </section>

      <div className="container">
      <div className="row">
        
          <div className="col-md-6">
            <ul>
              <li>
                <b> Address:</b> Springdale Public School, 123 Education Lane,
                Cityville, State, ZIP Code{" "}
              </li>
              <li>
                <b> Phone:</b>+1(123) 456-7890
              </li>
              <li>
                <b> Email:</b>
                info@springdale.edu{" "}
              </li>
              <li>
                <b> Contact Form:</b>○ Name ○ Email ○ Message
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png" width={400} height={300}></img>
          </div>
        </div>
        </div>
      </div>
  );
}

export default ContactUs;
