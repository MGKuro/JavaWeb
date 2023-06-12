import React from "react";

const Contact = (props) => {
    return (
        <section id="contact">
      <div class="container position-relative">
        <div class="contact-header d-flex flex-column align-items-center">
          <h2>Contact</h2>
          <p>You can write us anytime!</p>
        </div>
        <form action="" method="" class="form">
          <p>
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
          </p>
          <p>
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailhelp" 
            placeholder="Enter email"/>
            <small id="emailHelp" 
            class="form-text text-muted">We'll never share your email with anyone else.</small>
          </p>
          <p>
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="5"></textarea>
          </p>
          <p>
            <input type="submit" value="Send"/>
          </p>
        </form>
      </div>
    </section>
    )
}

export default Contact