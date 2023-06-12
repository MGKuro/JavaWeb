import React from "react";

const Team = (props) => {
    return (
        <section id="team" class="team">
    <div class="container position-relative">
        <div class="team-header d-flex flex-column align-items-center">
          <h2>The Team</h2>
          <p>Get to know us!</p>
        </div>
        <div class="row my-2">
          <div class="col-8">
            <div class="team-item row">
              <div class="col position-relative">
                <img src="./images/Melisa.jpg" class="rounded-circle img-fluid pb-2" alt="Melisa"/>
              </div>
              <div class="team-item col">
                <h2>MELISA BRODAL</h2>
                <h4>CEO</h4>
                <p>A fan of travel and a impressive accountant! She dreams of seeing the whole world.</p>
              </div>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row my-2">
          <div class="col-4"></div>
          <div class="col-8">
            <div class="team-item row">
              <div class="team-item col">
                <h2>DIEGO PARMA</h2>
                <h4>CEO</h4>
                <p>An animal lover with an entrepreneur spirit! He dreams of becoming a great business man.</p>
              </div>
              <div class="col position-relative">
                <img src="./images/Diego.jpg" class="rounded-circle img-fluid pb-2" alt="Diego"/>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-2">
          <div class="col-8">
            <div class="team-item row">
              <div class="col position-relative">
                <img src="./images/Corgi.jpg" class="rounded-circle img-fluid pb-2" alt="Corgi"/>
              </div>
              <div class="team-item col">
                <h2>CORGI BARK</h2>
                <h4>CHIEF TOYS ADMINISTRATOR</h4>
                <p>Our mastermind! He collected a lot of signatures, and its desires to get to know all of his
                  friends gived us the idea for THE ARK!
                </p>
              </div>
            </div>
          <div class="col-4"></div>
        </div>
        </div></div>
    </section>
    )
}

export default Team