import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from './context/navState';

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 5.8%;
  outline: 0;
  border: 0;
  padding: 0.85%;
  background: none;
  
  @media (max-width:768px) {
    {
      margin-right: 11.2%;
    }
  }
  @media (max-width:320px) {
    {
      margin-right: 5%;
    }
  }

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover {
    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }
  @media (max-width:320px) {
    :hover {
      span:nth-of-type(1) {
        width: 20px;
      }
  
      span:nth-of-type(2) {
        width: 25px;
      }
  
      span:nth-of-type(3) {
        width: 20px;
      }
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(50%, 40%);
      width: 60px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(40%, 0%);
      width: 60px;
    }
  }
  @media (max-width:320px) {
    &.active{
      span:nth-of-type(1) {
        transform: rotate(45deg) translate(50%, 40%);
        width: 29px;
      }
  
      span:nth-of-type(3) {
        transform: rotate(-45deg) translate(40%, 0%);
        width: 29px;
      }
    }
  }
`;

const Bar = styled.span`
  display: block;
  width: 48.36px;
  height: 8.86px;
  margin-bottom: 20%;
  background: #74A29E;
  border-radius: 15px;

  @media (max-width:320px) {
    {
      width: 29.61px;
      height: 4px;
    }
  }
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default HamburgerButton;