import React from "react";

function Academics() {
  return (
    <div>
      <div className="">
        <img
          src="./Images/Home-banner-07.jpg"
          class="d-block w-100 carouserl-two"
          alt="star"
        />
      </div>
      <section className="mb-5">
        <h1 className="text-center mt-5 mb-5">ACADEMICS</h1>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h4>
            <b>Curriculum:</b>
          </h4>
          <ul className="science">
            <li>
              <b>Primary (Grades 1-5):</b>English, Mathematics, Science, Social
              Studies, Art, Physical Education
            </li>
            <li>"Spacious and well-equipped classrooms"</li>
            <li>
              <b>Secondary (Grades 6-10):</b>
              English, Mathematics, Science (Physics, Chemistry, Biology),
              Social Studies, Computer Science, Physical Education, Art
            </li>
            <h4>
              <b>Senior Secondary (Grades 11-12):</b>
              <ul className="science">
                <li>
                  <b>Science Stream: </b>Physics, Chemistry, Biology,
                  Mathematics, Computer Science, English
                </li>
                <li>
                  <b>Commerce Stream:</b>Accountancy, Business Studies,
                  Economics, Mathematics, English
                </li>
              </ul>
            </h4>
          </ul>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h4>
            <b>Teaching Methodologies:</b>
          </h4>
          <p>
            "We use a blend of traditional and modern teaching techniques to
            cater to different learning styles."
          </p>
          <h4>
            <b>Educational Resources:</b>
          </h4>
          <p>
            "Digital classrooms, interactive learning modules, and access to
            online educational platforms."
          </p>
        </div>
      </section>
    </div>
  );
}

export default Academics;
