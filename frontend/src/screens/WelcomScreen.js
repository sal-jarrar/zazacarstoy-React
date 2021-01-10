import React, { useState } from 'react'
import WelcomNav from '../components/WelcomNav'
import Dropdown from '../components/Dropdown'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WelcomScreen() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <WelcomNav toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className='welcome'>
        <div className='inner text-center'>
          <h1>WELCOME TO ZaZa </h1>
          <h4>CARS TOY & COLLECTABLES</h4>
          <Link to='/home'>
            <Button size='sm' variant='success view'>
              View our products
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default WelcomScreen
