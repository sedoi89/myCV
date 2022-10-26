import * as React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledHeaderUl = styled.ul`
  position: absolute;
  align-self: flex-start;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  gap: 30px;
  list-style: none;
  margin-bottom: 15px;
  border-right: 1px solid black;
  font-weight: 100;

  @media (max-width: 755px) {
    align-self: center;
    position: static;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid black ;
  }

  & li {
    text-transform: uppercase;
    font-weight: bold;
  }

  & a {
    color: rgb(90, 90, 90);
    text-decoration: none;
  }

  & a:hover {
    color: rgba(125, 119, 119, 0.3);;
  }
  & a.active {
    opacity: 0.5
  }
`

const Header = (): JSX.Element => {

    return (
        <StyledHeaderUl>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About Me</NavLink></li>
            <li><NavLink to={'/works'}>Work experience</NavLink></li>
            <li><NavLink to={'/contacts'}>Contact</NavLink></li>
        </StyledHeaderUl>
    );
};

export default Header;
