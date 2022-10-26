import * as React from 'react';
import styled, {keyframes} from "styled-components";
import github from '../../assets/img/github.png';
import email from '../../assets/img/Email.png';
import telegram from '../../assets/img/telegram.png';


const appearAnimation = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 1;

  }
`

const animation = keyframes`
  from {
    filter: invert(1);
    outline: 3px solid rgba(125, 119, 119, 0.5);
    outline-offset: 15px;
    border-radius: 50%;
    transform: scale(1.2);
    background-color: white;
  }
  to {
    filter: invert(1);
    outline: 1px solid rgba(125, 119, 119, 0.5);
    outline-offset: 1px;
    background-color: rgba(255,255,255,1);
    border-radius: 15%;
    transform: scale(1);
  }
`

const StyledContactDivContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  align-self: start;
  gap: 30px;
  animation: ${appearAnimation} 0.3s linear;
  animation-fill-mode: forwards;

  & img {
   
  }
  & img:hover {
    animation: ${animation} 0.2s linear;
    animation-fill-mode: forwards;
    background-color: white;
    border: 2px solid white;
  }
`


const Contact = () => {


    function navigate(evt) {
        evt.preventDefault();
        if (evt.target.alt === 'github') {
            window.open('https://github.com/sedoi89')
        }
        if (evt.target.alt === 'email') {
            window.open('mailto:rkyar76@gmail.com')
        }
        if (evt.target.alt === 'telegram') {
            window.open('https://t.me/kostarya')
        }
    }

    return (
        <StyledContactDivContainer onClick={navigate}>

                <img src={github} alt={'github'} width={100} height={100}/>


                <img src={email} alt={'email'} width={100} height={100}/>


                <img src={telegram} alt={'telegram'} width={100} height={100}/>

        </StyledContactDivContainer>
    );
};

export default Contact;
