import React from "react";

const About = (props) => {
    return (
        <section id="about" class="about">
      <div class="container position-relative">
        <div class="row">
          <div class="col-6">
            <img src="./images/Cat-flying.jpeg" class="img-fluid rounded-3 my-3" alt="Animal fly"/>
            <h3>We can help you travel with your pets!</h3>
            <p>The only thing you've got to do is choose where to go. 
              Pick your dreamed vacations, pack your bags, get your pets 
              and start discovering the world together!</p>
          </div>
          <div class="col-6 pt-3">
            <h3>Don't worry about anything</h3>
            <p class>We got you covered! We've got the wings, the professionals 
              and we also handle all the boring paperwork for you. 
              Just contact us and we'll tell you everything!</p>
              <img src="./images/covered.jpg" class="img-fluid rounded-3 my-3" alt="We cover you"/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default About