import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './hooks/onClickOutside';
import { MenuContext } from './context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';
import styles from '../Header.module.css';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin-top: 0%;
  margin-left: 0%;
  align-items: center;
  background: #ffffff none repeat scroll 0% 0%;
  color: rgb(255, 255, 255);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1.3% 1% 0.7% 0.9%;
  box-shadow: rgba(0, 0, 0, 0.2) 0em 0em 1em;
  z-index: 500;

  @media (max-width:768px) {
    {
        padding: 1.4% 1% 2% 2.3%;
    }    
  }
  @media (max-width:320px) {
    {
        padding: 2% 1% 1.5% 4.4%;
    }    
  }
`;

const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <div ref={node}>
            <Navbar>
                <HamburgerButton />
                <div className={styles.title}>
                    Career Guidance Testing
                </div>
            </Navbar>
            <SideMenu />
        </div>
    );
};

export default MainMenu;