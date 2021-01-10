import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import {
  HiOutlineUserGroup,
  HiCurrencyDollar,
  HiAnnotation,
} from 'react-icons/hi'

function About() {
  return (
    <>
      <Row>
        <Col className='text-center py-3'>
          <h2>About Us</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image
            roundedCircle
            height='100%'
            width='100%'
            src='/images/a1.jpg'
          />
        </Col>
        <Col md={8}>
          <Row>
            <Col className='text-center pt-5'>
              <HiAnnotation fontSize='2.7rem' color='red' />
              <p className='text-center mt-3'>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <HiCurrencyDollar
                fontSize='2.5rem'
                style={{ paddingBottom: '5', color: 'red' }}
              />
              <h5 className='mt-2'>Corporis voluptates sit</h5>
              <span>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </span>
            </Col>
            <Col className='text-center'>
              <HiOutlineUserGroup
                fontSize='2.5rem'
                style={{ paddingBottom: '5', color: 'red' }}
              />
              <h5 className='mt-2'>Corporis voluptates sit</h5>
              <span>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default About
