import React, { useState } from 'react';
import '../../assets/styles/Contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
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
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          e.target[0].value = '';
          e.target[1].value = '';  
          e.target[2].value = ''
          setErrorMessage('Message sent!');
      }, (error) => {
          console.log(error.text);
      }
    ); 
  }

  return (
    <Fade>
      <div className="mobile-contact">
        <section id="contact-container">
          <div className="row">
            <div id="left-contact" className="col-md-6 col-sm-12">
              <h3 id="hi">Say Hi <span className="wave" id="wave-hi">👋</span></h3>
              <Form onSubmit={sendEmail}>
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
                <Button id="msg-btn" type="submit">Submit</Button>{' '}   
              </Form>
            </div>
            <div id="right-contact" className="col-md-6 col-sm-12">
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
      </div>
    </Fade> 
  );
}

export default Contact;