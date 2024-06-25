import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import { Music } from "./music";  
import './App.css';
import useDarkMode from 'use-dark-mode';
import audioFile from './mech-keyboard-02-102918.mp3';

export function Navigation() {
  const darkMode = useDarkMode(false);

  const toggleDarkMode = () => {
    darkMode.toggle();
  };

  const playAudio = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  return (
    <div>
      <Navbar>
        <Nav fixed="true">
          <NavbarBrand tag={Link} to="./"><h1>C</h1></NavbarBrand>
        </Nav>

        <button type="button" onClick={() => {
          toggleDarkMode();
          playAudio();
        }}>
          <img src={darkMode.value ? require("./on_switch.png") : require("./off_switch.png")} alt="Switch Button" />
        </button>
      </Navbar>

      <Nav vertical>
        <NavItem>
          <NavLink tag={Link} to="./music">
            <h2>Music</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="./live">
            <h2>Live</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="./contact">
            <h2>Contact</h2>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
