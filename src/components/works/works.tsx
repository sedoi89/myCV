import * as React from 'react';
import styled from "styled-components";
import liga from '../../assets/img/liga.png';
import ovva from '../../assets/img/ovva.png'
import {StyledAboutDiv, SlyledAboutP} from "../about/about.tsx";

const StyledWorksDiv = styled.div`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: center;
  align-self: start;
`

const Works = () => {
    const usedLiga = ['React', 'SCSS','Styled-Components','TypeScript', 'Figma', 'Photoshop'];
    const usedOvva = ['React','TypeScript', 'JavaScript','Redux','Thunk','React-hook-forms', 'Axios','SCSS']
    return (
            <StyledWorksDiv>
                <StyledAboutDiv duration={0.2}>
                    <h3>Liga A </h3>
                    <p>
                        It was my first work in IT after courses. Mainly i was working with layout.
                    </p>
                </StyledAboutDiv>
                <StyledAboutDiv direction={'row'}>
                    <h3>
                        Used:
                    </h3>
                    {usedLiga.map(i => <SlyledAboutP key={[i]}>{i}</SlyledAboutP>)}
                    <img src={liga} alt={'liga A'}></img>
                </StyledAboutDiv>


                <StyledAboutDiv>
                    <h3>
                        Ovva
                    </h3>
                    <p>
                        Current job. Freelance inside a company. Worked with many technologies connecting with React.js.
                    </p>
                </StyledAboutDiv>
                    <StyledAboutDiv direction={'row'} imgtop={'389px'} imgleft={'369px'} maxscreen={'561px'}>
                        <h3>
                            Used
                        </h3>
                        {usedOvva.map(i => <SlyledAboutP key={[i]}>{i}</SlyledAboutP>)}
                        <img src={ovva} alt={'ovva'}></img>
                </StyledAboutDiv>

            </StyledWorksDiv>
    );
};

export default Works;
