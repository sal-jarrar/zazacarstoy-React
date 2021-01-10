import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-4 col-sm-2 offset-1'>
            <h5>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/home'>Home</Link>
              </li>

              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-sm-3 text-center'>
            <h5>Social</h5>
            <Link>
              <AiFillInstagram fontSize='2rem' />
            </Link>{' '}
            <Link>
              <AiFillFacebook fontSize='2rem' />
            </Link>{' '}
            <Link>
              <AiFillTwitterSquare fontSize='2rem' />
            </Link>{' '}
          </div>
          <div className='col-sm-4 text-center'>
            <a role='button' className='btn btn-link' href='tel:+12065551234'>
              <i className='fa fa-phone' /> 1-206-555-1234
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link'
              href='mailto:notreal@notreal.co'
            >
              <i className='fa fa-envelope-o' /> campsites@nucamp.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
