import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div>
         <section className="mb-5">
        <h1 className="text-center mt-5 mb-5">GALLERY</h1>
      </section>

      <div class="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://media.istockphoto.com/id/1202755868/vector/sports-day-banner-vector-illustration-text-sport-equipment-inside-alphabet-isolated-on-white.jpg?s=612x612&w=0&k=20&c=wDA_22RMU_sWBpUCa4uCpy2w9GXXooff5W27ScNs6wc="
                alt="Card image"
                width={100} height={178}
              />
              <div class="card-body">
                {/* <h4 class="card-title">John Doe</h4> */}
                <p class="card-text">
                Students participating in various sports events.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  See Profile
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_419750259.JPG"
                alt="Card image"
                width={100} height={178}
              />
              <div class="card-body">
                {/* <h4 class="card-title">John Doe</h4> */}
                <p class="card-text">
                Students presenting their science projects.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  See Profile
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://lh5.googleusercontent.com/proxy/370V-U4Tlks9WpvTu47chpZzo7LZ-Yal-22nTMGZTjpRY6hPSonnRQv4v_EqpHuEzeKTcLeO8nNpfuiJFOEM7X_FnJncRE-E-oSCInozQ0qxmXA_dnPKYmx2smqipqs"
                alt="Card image"
                width={100} height={178}
              />
              <div class="card-body">
                {/* <h4 class="card-title">John Doe</h4> */}
                <p class="card-text">
                Students performing in the cultural fest.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  See Profile
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Classroom2.jpg/1280px-Classroom2.jpg"
                alt="Card image"
                width={100} height={178}
              />
              <div class="card-body">
                {/* <h4 class="card-title">John Doe</h4> */}
                <p class="card-text">
                A glimpse of our interactive classrooms
                </p>
                {/* <a href="#" class="btn btn-primary">
                  See Profile
                </a> */}
              </div>
            </div>
          </div>
          
    
        </div>

        <div className='row mt-5'>
             <div className='col-md-6'>
             <div class="ratio ratio-16x9">
                 <iframe src="https://www.youtube.com/embed/SWCxdwdx_KQ" title="School Promo Video Templates | Ft. Paradise Academy ||" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen width={500} height={300}></iframe>

             </div>
             </div>
             <div className='col-md-6'>
             <div class="ratio ratio-16x9">
                 <iframe  src="https://www.youtube.com/embed/H03wb1cZCSQ" title="Showreel for School Promotional Videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen width={500} height={300}></iframe>
             </div>
             </div>
        </div>
         
                
          
    
      </div>
    </div>
  )
}

export default Gallery