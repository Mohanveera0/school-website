import React from "react";
import './Admissions.css';

const Admissions = () => {
  return (
    <div>
      <div className="">
        <img
          src="./Images/Home-banner-08.jpg"
          class="d-block w-100 carouserl-two"
          alt="star"
        />
      </div>
      <section className="mb-5">
        <h1 className="text-center mt-5 mb-5">ADMISSIONS</h1>
      </section>
      <section className="mt-5 mb-5">
        <div className="container">
          <h4>
            <b>Process:</b>
          </h4>
          <p>
          "Admission forms are available for download. Submit the completed form
          along with required documents at the school office."
          </p>
          <h4>
            <b>Criteria:</b>
          </h4>
          <p>
          "Admission is based on merit and availability of seats. Entrance tests may be
          conducted for certain grades."
          </p>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h4>
            <b>Important Dates:</b>
          </h4>
          <ul className="science">
            <li>
            "Admission Form Availability: March 1st"
            </li>
            <li>"Last Date for Submission: March 31st"</li>
            <li>
            "Entrance Test: April 15th"
            </li>
              <li>"Announcement of Results: April 30th"</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
