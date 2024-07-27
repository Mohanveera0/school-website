import React from "react";
import "./Students.css";

const Students = () => {
  return (
    <div>
      <div className="">
        <img
          src="./Images/Home-banner-003.jpg"
          class="d-block w-100 carouserl-two"
          alt="star"
        />
      </div>
      <section className="mb-5">
        <h1 className="text-center mt-5 mb-5">Students</h1>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h4>
            <b>Life at Springdale:</b>
          </h4>
      
              <ul className="science">
                <li>
                  <b>Extracurricular Activities: </b>"Music, Dance, Drama, Art, Sports, Robotics, Debate
                  Club, Science Club"
                </li>
                <li>
                  <b>Clubs and Societies:</b>"Literary Society, Environmental Club, Astronomy Club,Coding Club"
                </li>
              </ul>

          <h4><b>Achievements:</b></h4>
          <ul className="science">
                <li>
                "John Smith - National Level Math Olympiad Winner
                </li>
                <li>
                "Sarah Lee - Gold Medalist in State Swimming Championship"
                </li>

                <li>
                "Tech Innovators Club - Winners of Inter-School Robotics Competition"
                </li>
              </ul>

              <h4><b>Student Council:</b></h4>
          <ul className="science">
                <li>
                <b>President:</b> Amy Parker, Grade 12
                </li>
                <li>
                <b>Vice President:</b> Rajiv Mehta, Grade 11
                </li>

                <li>
                <b>Secretary:</b> Lisa Wong, Grade 10
                </li>
              </ul>
        </div>
      </section>
    </div>
  );
};

export default Students;
