import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { SiZigbee } from 'react-icons/si'
import { logout } from '../actions/userActions'

const NavLinks = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`
const MenBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 760px) {
    display: none;
  }
`
const NaveLinksMenu = styled(Link)`
  ${NavLinks}
  &:hover {
    color: white;
  }
`

const Logo = styled(Link)`
  ${NavLinks}
  font-style: italic;
  font-size: 1.5rem;
  &:hover {
    color: white;
  }
`

function WelcomNav({ toggle }) {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Nav>
      <Logo style={{ marginRight: '20px' }}>
        <SiZigbee /> ZAZA
      </Logo>
      <MenBars onClick={toggle} />
      <NavMenu>
        <NaveLinksMenu to='/home'>Home</NaveLinksMenu>
        <NaveLinksMenu to='/contact'>Contact Us</NaveLinksMenu>
        <NaveLinksMenu to='/about'>About</NaveLinksMenu>
        {userInfo && (
          <NaveLinksMenu to='/profile'>{userInfo.name}</NaveLinksMenu>
        )}
        {userInfo ? (
          <NaveLinksMenu onClick={logoutHandler}>Logout</NaveLinksMenu>
        ) : (
          <NaveLinksMenu to='/login'>Sign In</NaveLinksMenu>
        )}
      </NavMenu>
    </Nav>
  )
}

export default WelcomNav
