import React from "react";
import "./Faculty.css";

const Faculty = () => {
  return (
    <div>
      <div className="">
        <img
          src="./Images/Home-banner-001.jpg"
          class="d-block w-100 carouserl-two"
          alt="star"
        />
      </div>
      <section className="mb-5">
        <h1 className="text-center mt-5 mb-5">FACULTY</h1>
      </section>

      <div class="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
                width={100}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Principal, M.Ed, 20 years of experience in educational
                  administration.
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
                width={100}
              />
              <div class="card-body">
                <h4 class="card-title">Jane Smith:</h4>
                <p class="card-text">
                  Vice Principal, M.Sc. in Physics, 15 years of teaching
                  experience.
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
                width={100}
              />
              <div class="card-body">
                <h4 class="card-title">Emily Johnson</h4>
                <p class="card-text">
                  English Teacher, M.A. in English, 10 years of teaching
                  experience.
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
                width={100}
              />
              <div class="card-body">
                <h4 class="card-title">Michael Brown</h4>
                <p class="card-text">
                  Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching
                  experience.
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
                width={100}
              />
              <div class="card-body">
                <h4 class="card-title">Sophia Davis</h4>
                <p class="card-text">
                  Science Teacher, M.Sc. in Chemistry, Science Teacher,12 years
                  of teaching experience
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
                width={100}
              />
              <div class="card-body">
                <h4 class="card-title">David Wilson</h4>
                <p class="card-text">
                  Computer Science Teacher, B.Tech in Computer Science, 5 years
                  of teaching experience.
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
