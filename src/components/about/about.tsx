import * as React from 'react';
import styled, {keyframes} from "styled-components";

const animation = keyframes`
from {
  opacity: 0;
}
  to {
    opacity: 1;
  }
`
export const StyledAboutDiv = styled.div`
  padding: 10px;
  width: 60%;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: center;
  align-self: start;
  background-color: rgba(36, 36, 36, 0.02 );
  border-radius: 30px;
  opacity: 0;
  animation: ${animation} 0.7s cubic-bezier(0.79,-0.04, 0.63, 1.03);
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay}s;

  & p {
    line-height: 25px;
    font-size: 15px;
    font-family: Cambria;
    text-align: center;
  }

  & h3 {
    width: 100%;
    margin-bottom: 10px;
    padding-left: 15px;
  }
  & img {
    position: absolute;
    top: ${props => props.imgtop ? props.imgtop : '72px'};
    left: ${props => props.imgleft ? props.imgleft : '373px'};
    opacity: 0.3;
    width: 391px;
    height: 104px;
    z-index: -1;
  }
  @media (max-width: 755px) {
    & img {
     display: none;
    }
  }
`
export const SlyledAboutP = styled.p`
  width: ${props => props.width? props.width : ''};
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  padding: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const About = () => {
    const skills = ['React', 'Redux','TypeScript', 'JavaScript', 'React-Route', 'Styled-components', 'Axios',  'React Hook Forms', 'HTML', 'CSS (SCSS)', 'Git',  'Figma' ]
    return (
        <>

            <StyledAboutDiv>
                <h3>Profile</h3>
                <p>High motivated developer, who is looking for a new offer. I worked too much with people and their problems. Can find personal approach to any person. First of all i'm looking for a company with its own project or product.    </p>
            </StyledAboutDiv>
            <StyledAboutDiv direction={'row'} >
                <h3>Frontend Skills:</h3>
                {
                    skills.map(i => <SlyledAboutP>{i}</SlyledAboutP>)
                }

            </StyledAboutDiv>
            <StyledAboutDiv direction={'row'} >
                <h3>Languages:</h3>
                <SlyledAboutP width={'45%'}>
                    English: B2
                </SlyledAboutP>
                <SlyledAboutP width={'45%'}>
                    Russian: Native
                </SlyledAboutP>
            </StyledAboutDiv>
        </>
    );
};

export default About;
