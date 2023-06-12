import React from "react";

const Services = (props) => {
    return (
        <section id="services" class="services">
      <div class="container position-relative">
        <div class="services-header d-flex flex-column align-items-center">
          <h2>Our Services</h2>
          <p>Don't hesitate... <b>ASK AWAY!</b></p>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="service-item  position-relative">
              <img src="./images/icon1.png" class="img-fluid pb2" alt="Transport"/>
              <h3>Transport</h3>
              <p>Fly with our wings, they'll take you all over the world. 
                Our planes are specially prepared for you to let you travel confortably with your pet.</p>
            </div>
          </div>
          <div class="col-4">
            <div class="service-item  position-relative">
            <img src="./images/icon2.png" class="img-fluid pd-2" alt="Professionals"/>
            <h3>Professionals</h3>
            <p>We can take care of even the most nervous pet you have. 
              Our professionals are experts in pet's care. 
              They are even prepared for any kind of emergency in the air.</p>
            </div>
          </div>
          <div class="col-4">
            <div class="service-item  position-relative">
              <img src="./images/icon3.png" class="img-fluid pb-2" alt="Paperwork"/>
              <h3>Paperwork</h3>
              <p>Need a certificate? Don't worry, we can help you with that.
                Our administration will make the international
                animal travel a kid's affair.
              </p>
              </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Services