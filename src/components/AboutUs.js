import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="">
        <img
          src="./Images/AboutUs.PNG"
          class="d-block w-100 carouserl-two"
          alt="star"
        />
      </div>
      <section className="mb-5">
        <h1 className="text-center mt-5 mb-5">ABOUT US</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <img
                src="./Images/Home-banner-06.jpg"
                class="d-block w-100"
                alt="star"
              />
            </div>
            <div className="col-md-6">
              {" "}
              <p className="Founded">
                "Founded in 1985, Springdale Public School has been dedicated to
                providing quality education and holistic development to
                students." Education-focused content is content that is created
                by educators to engage, inspire and inform their students. Gone
                are the days when students learned from only a textbook and a
                lecture.
              </p>
              <p className="Founded">
                parage (countable and uncountable, plural parages) (archaic)
                Lineage, parentage; rank, especially as high or noble. A feudal
                institution that recognizes equality of rights and status
                between two rulers, and equality in the portions of an
                inheritance. A woman's marriage portion or dowry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="back-gr">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div class="card one-point">
                <div class="card-body">
                  <h5 class="card-title">Vision</h5>
                  <p class="card-text">
                    "To create a learning environment that fosters academic
                    excellence, critical thinking, and ethical values."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card one-point">
                <div class="card-body">
                  <h5 class="card-title">Mission</h5>
                  <p class="card-text">
                    "To empower students with the knowledge, skills, and values
                    needed to thrive in a dynamic world."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5">
        <div className="container">
          <h4>
            <b>Principal's Message:</b>
          </h4>
          <p>
            "At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future."
          </p>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h4>
            <b>Infrastructure and Facilities:</b>
          </h4>
          <ul className="science">
            <li>"State-of-the-art science and computer labs"</li>
            <li>"Spacious and well-equipped classrooms"</li>
            <li>
              "Library with a vast collection of books and digital resources"
            </li>
            <li>
              "Sports facilities including a playground, gymnasium, and swimming
              pool"
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
