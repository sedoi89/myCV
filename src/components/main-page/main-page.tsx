import * as React from 'react';
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import CV from '../../assets/files/CV_Ruabchinskiy.pdf';
import pdf from '../../assets/img/pdf.png';
import {useState} from "react";

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledMainA = styled.div`
  position: relative;
  
  & a {
    display: inline-flex;
    margin-top: 15px;
    text-decoration: none;
    border: 1px solid rgba( 0,0,0,0.4);
    border-radius: 5px;
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
    color: black;
    background-color: rgba(0, 0, 0, 0.03);
    
    animation: ${animation} 0.3s cubic-bezier(0.04, 0.71, 1, 1.64);
    animation-fill-mode: forwards;
  }
  & img {
    display: none;
    position: absolute;
    top: 10px;
    left: 150px;
    z-index: -1;
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
const [classImg, setClassImg] = useState('')
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


                <StyledMainA duration={0.2} delay={0.9} >
                    <Link to={'/works'}>Work Experience</Link>
                    <Link onClick={() => {setClassImg('animate'); setTimeout(() => {setClassImg('')}, 800)}} to={CV} target={'_blank'} download> CV </Link>
                    <img src={pdf} alt={'pdf'} height={70} width={50} className={classImg}></img>
                </StyledMainA>


            </StyledMainContainerDiv>

        </>
    );
};

export default MainPage;
