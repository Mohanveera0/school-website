import React from "react";
import './Home.css';

function Home() {
  return (
    <div>
      <div className="container-fulid">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./Images/Home-banner-03.jpg" class="d-block w-100 carouserl-one" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2>Springdale Public School</h2>
        <h5>"Welcome to Springdale Public School, where we nurture young minds for
        a brighter future."</h5> 
        {/* <p>"Welcome to Springdale Public School, where we nurture young minds for
a brighter future."
</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src="./Images/Home-banner-02.jpg" class="d-block w-100 carouserl-one" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Springdale Public School</h2>
      <h5>"Welcome to Springdale Public School, where we nurture young minds for
      a brighter future."</h5> 
      </div>
    </div>
    <div class="carousel-item">
      <img src="./Images/Home-banner-04.jpg" class="d-block w-100 carouserl-one" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2>Springdale Public School</h2>
      <h5>"Welcome to Springdale Public School, where we nurture young minds for
      a brighter future."</h5> 
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
      </div>
    </div>
  );
}

export default Home;
