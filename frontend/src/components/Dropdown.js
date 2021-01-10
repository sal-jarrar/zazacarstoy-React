import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { logout } from '../actions/userActions'

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: red;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`

const DropdownWrapper = styled.div``

function Dropdown({ isOpen, toggle }) {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <DropdownContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <DropdownLink to='/home'>Home</DropdownLink>
          <DropdownLink to='/contact'>Contact</DropdownLink>
          <DropdownLink to='/about'>About</DropdownLink>
          {userInfo && (
            <DropdownLink to='/profile'>{userInfo.name}</DropdownLink>
          )}
          {userInfo ? (
            <DropdownLink onClick={logoutHandler}>Logout</DropdownLink>
          ) : (
            <DropdownLink to='/login'>Sign In</DropdownLink>
          )}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown
