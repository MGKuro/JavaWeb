import React from "react";

const Home = (props) => {
    return (
        <section id="home" class="home">
        <div class="container position-relative">
            <div class="row gy-5 mb-5">
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                    <h2>Get your pets into <h1 id="theark1">THE ARK</h1></h2>
                    <h2>Let them know the world!</h2>
                </div>
                <div class="col-lg-6 order-1 order-lg-2">
                    <img src="./images/Husky-Travel.png" class="img-fluid" alt="Pets"/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home