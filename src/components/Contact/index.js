import React from 'react';
import '../../assets/styles/Contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';

function Contact() {
  return (
    <Fade>
      <section id="contact-container">
        <div className="row">
          <div id="left-contact" className="col-md-6">
            <h3 id="hi">Say Hi <span class="wave">👋</span></h3>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={7} placeholder="Write Your Message" />
              </Form.Group>
              <Button id="msg-btn"variant="warning" size="lg" >Submit</Button>{' '}
            </Form>
          </div>
          <div id="right-contact" className="col-md-6">
            <div id="right-contact-text" className="ml-auto">
              <p>
                Thanks for visiting my page <br />
                and allowing me to introduce myself.
                <p id="contact-bolder">Now it's Your Turn!</p>
                Send me a quick message or you can <br />
                shoot me an email to the adresss below.
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