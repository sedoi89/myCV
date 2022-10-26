import * as React from 'react';
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import CV from '../../assets/files/CV_Ruabchinskiy.pdf'


const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const StyledMainA = styled.div`

  & a {
    display: inline-flex;
    margin-top: 15px;
    text-decoration: none;
    border: 1px solid rgba( 0,0,0,0.4);
    color: black;
    padding: 10px;
    margin-right: 15px;
    align-self: center;
  }

  opacity: 0;
  animation: ${animation} ${props => props.duration}s linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay}s;
  
  @media (max-width: 405px) {
    display: flex;
    justify-content: center;
  }
 

  & a:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    animation: ${animation} 0.3s cubic-bezier(0.04, 0.71, 1, 1.64);
    animation-fill-mode: forwards;
  }
`
const StyledMainContainerDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: center;
  align-self: start;

  @media (max-width: 405px) {
    margin-left: 10px;
  }
   
`
const StyledAnimatedMainP = styled.p`



  opacity: 0;
  animation: ${animation} ${props => props.duration}s linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay}s;
  font-size: 50px;
  text-align: start;
`


const MainPage = (): JSX.Element => {


    return (
        <>
            <StyledMainContainerDiv>
                <StyledAnimatedMainP duration={0.2} delay={0.1}>
                    Hello,
                </StyledAnimatedMainP>
                <StyledAnimatedMainP duration={0.2} delay={0.3}>
                    I'm Konstantin.
                </StyledAnimatedMainP>
                <StyledAnimatedMainP duration={0.2} delay={0.6}>
                    Frontend Developer
                </StyledAnimatedMainP>


                <StyledMainA duration={0.2} delay={0.9}>
                    <Link to={'/works'}>Work Experience</Link>
                    <Link to={CV} target={'_blank'} download> CV </Link>
                </StyledMainA>


            </StyledMainContainerDiv>

        </>
    );
};

export default MainPage;
