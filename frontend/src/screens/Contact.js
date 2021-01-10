import React from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import { MdMyLocation, MdMail } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import emailjs, { init } from 'emailjs-com'

function Contact() {
  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      const result = await emailjs.sendForm(
        'service_72dyizf',
        'zaza_store',
        e.target,
        init('user_HL7dpsE0hZBNst1TxkEMB')
      )

      console.log(result.text)
    } catch (error) {
      console.log(error.text)
    }

    e.target.reset()
  }
  return (
    <>
      <Row>
        <Col className='text-center py-4'>
          <h2>Contact Us</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className='text-center mt-3'>
              <Card className='mt-3'>
                <Card.Body>
                  <Card.Title>
                    <MdMyLocation style={{ fontSize: '2rem', color: 'red' }} />
                  </Card.Title>

                  <Card.Text>
                    <h5 className='pt-2'>Our Address</h5>
                    <span>A108 Adam Street, New York, NY 535022</span>
                    <br />
                    <span>A108 Adam Street, New York, NY 535022</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col className='text-center'>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <MdMail style={{ fontSize: '2rem', color: 'red' }} />
                  </Card.Title>
                  <h5>Email Us</h5>
                  <span>contact@example.com</span>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='text-center'>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <FiPhoneCall style={{ fontSize: '2rem', color: 'red' }} />
                  </Card.Title>

                  <Card.Text>
                    <h5>Call Us</h5>
                    <span>+1 5589 55488 55</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={8} md={7}>
          <Form onSubmit={sendEmail}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Name' name='name' />
            </Form.Group>
            <Form.Group controlId='Email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
              />
            </Form.Group>
            <Form.Group controlId='subject'>
              <Form.Label>Subject</Form.Label>
              <Form.Control type='text' placeholder='Subject' name='subject' />
            </Form.Group>
            <Form.Group controlId='textarea'>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder='Message'
                name='message'
              />
            </Form.Group>
            <Button type='submit' color='primary' value='Send'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Contact
