import React, { useState } from 'react';
import '../../assets/styles/Contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';
import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      } 
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Fade>
      <section id="contact-container">
        <div className="row">
          <div id="left-contact" className="col-md-6">
            <h3 id="hi">Say Hi <span className="wave">👋</span></h3>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="name" placeholder="Name" 
                name="Name" 
                defaultValue={name} 
                onBlur={handleChange}  />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email address" 
                name="email" 
                defaultValue={email} 
                onBlur={handleChange} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={7} placeholder="Write Your Message" 
                name="Message" 
                onBlur={handleChange}
                defaultValue={message}  />
              </Form.Group>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <Button id="msg-btn" >Submit</Button>{' '}   
            </Form>
          </div>
          <div id="right-contact" className="col-md-6">
            <div id="right-contact-text" className="ml-auto">
              <p>
                Thanks for visiting my page <br />
                and allowing me to introduce myself.
                <p id="contact-bolder">Now it's Your Turn!</p>
                Send me a quick message or you can <br />
                shoot me an email to the adresss below. <br />
                <p id="contact-bolder">Let's talk about anything!</p>
              </p> <br />
              <a href="mailto:michey.asmah21@gmail.com">michey.asmah21@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
export default Contact;