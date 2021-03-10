import Reacts from 'react';
import Menu from './Menu';
import TextyAnim from 'rc-texty';
import './Contact.css';
import { Button, Form } from 'react-bootstrap';
import Footer from './components/Footer';

function Contact() {
  return(
    <div className="contact">
      <Menu/>
      <div className = "contactText">
        <TextyAnim type="swing" onEnd={(type) => {console.log(type);}}>
          CONTACT
        </TextyAnim>
      </div>
      <div className = "contactBody">
        <div className = "contactBodyContent">
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Name" />
          </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Contact;
