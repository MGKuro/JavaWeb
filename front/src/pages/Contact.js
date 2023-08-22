import React, { useState } from "react";
import axios from 'axios';

const Contact = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData =>({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    console.log(formData);
    const response = await axios.post('http://localhost:3000/api/contact', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
      setFormData(initialForm)
    }
  }

    return (
        <section id="contact">
      <div class="container position-relative">
        <div class="contact-header d-flex flex-column align-items-center">
          <h2>Contact</h2>
          <p>You can write us anytime!</p>
        </div>
        <form action="/contact" method="post" className="form" onSubmit={handleSubmit}>
          <p>
            <label for="name">Name</label>
            <input type="text" class="form-control" name="nombre" placeholder="Enter your name"
            value={formData.nombre} onChange={handleChange}/>
          </p>
          <p>
            <label for="email">Email</label>
            <input type="email" class="form-control" name= "email" aria-describedby="emailhelp" 
            placeholder="Enter email" value={formData.email} onChange={handleChange}/>
            <small id="emailHelp" 
            class="form-text text-muted">We'll never share your email with anyone else.</small>
          </p>
          <p>
            <label for="message">Message</label>
            <textarea class="form-control" name="mensaje" rows="5"
            value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          <p>
            <input type="submit" value="Send"/>
          </p>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
        </form>
      </div>
    </section>
    )
}

export default Contact