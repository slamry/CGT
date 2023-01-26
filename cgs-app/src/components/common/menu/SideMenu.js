import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import './Menu.css';
import { MenuContext } from './context/navState';
import { NavLink } from 'react-router-dom';

//import arrow from '../arrow.svg';   background-image: url(${arrow});

const Menu = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;

  width: 400px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 15%;
  padding-right: 0px;
  align-items: stretch;
  background-color: #DAEDE7;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media (max-width:320px) {
    {
      width: 150px;
      padding-top: 20%;
    }
  }

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <nav>
      <ul>
        <li><NavLink to='/'>Главная</NavLink></li>
        <li><NavLink to='/articles'>Статьи</NavLink></li>
        <li><NavLink to='/tests'>Тесты</NavLink></li>
        <li><NavLink to='/aboutus'>О нас</NavLink></li>
      </ul>
    </nav>
  ),
};