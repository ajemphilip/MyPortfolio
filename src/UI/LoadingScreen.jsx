import { useProgress } from "@react-three/drei";
import styled from "styled-components";

const StyledHeading = styled.h1`
font-size:128px;
color:white;
font-weight:900;
color:orange;
@media (max-width: 1000px) {
  font-size:64px;
}  
`
const StyledButton = styled.button`
background-color:orange;
padding:16px;
padding-left:64px;
padding-right:64px;
font-family: "Teko", sans-serif;
font-weight:600;
color:black;
border-radius:12px;
font-size:24px;
transition: all 1s ease;
&:hover{
  background-color:grey;
}
`
const StyledButtonSound = styled.button`
background-color:orange;
margin-left:12px;
padding-left:24px;
padding-right:24px;
color:black;
border-radius:12px;
transition: all 1s ease;
&:hover{
  background-color:grey;
}
`
const LoadingScreen = ({ started, onStarted, soundVal, soundSwitch }) => {
  const { progress } = useProgress();
  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__board p-5">
        <StyledHeading className="leading-none my-8">WELCOME TO <br /> MY PORTFOLIO</StyledHeading>
        <p className="md:text-5xl text-3xl text-white my-8 text-right">I am Philip - Front End Developer who is passionate about clean, accesible and innovative web experiences.</p>
        {progress < 100 ? <StyledHeading className="loadingScreen__title">{progress.toFixed()}</StyledHeading> : <div className="flex">
          <StyledButton className="loadingScreen__button" onClick={onStarted}>
            START
          </StyledButton>
          <StyledButtonSound className="loadingScreen__button" onClick={soundSwitch}>
            {soundVal ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 59.243 47.583">
              <rect id="Rectangle_152" data-name="Rectangle 152" width="13" height="23" rx="2" transform="translate(0 12.292)" />
              <path id="Path_10" data-name="Path 10" d="M2,0C4.975.44,29.628,25.092,30,28a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" transform="translate(25.713 3) rotate(45)" />
              <path id="Path_8" data-name="Path 8" d="M54.5,0A14.069,14.069,0,0,1,68.367,10.881a13.136,13.136,0,0,1,.294,2.786,13.485,13.485,0,0,1-1.854,6.762,14.163,14.163,0,0,1-11.992,6.9c-.065,0-.19,0-.315,0" transform="translate(-19.801 10.125)" fill="none" stroke="#000" stroke-width="6" />
              <path id="Path_9" data-name="Path 9" d="M54.5,0A21.4,21.4,0,0,1,75.6,16.553a19.984,19.984,0,0,1,.448,4.238c0,11.3-9.339,20.493-21.064,20.787-.1,0-.289.005-.48.005" transform="translate(-19.801 3)" fill="none" stroke="#000" stroke-width="6" />
            </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 59.243 47.658">
                <rect id="Rectangle_152" data-name="Rectangle 152" width="13" height="23" rx="2" transform="translate(0 12.329)" />
                <path id="Path_10" data-name="Path 10" d="M2,0C4.975.44,29.628,25.092,30,28a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" transform="translate(25.713 3.037) rotate(45)" />
                <path id="Path_8" data-name="Path 8" d="M54.5,0A14.069,14.069,0,0,1,68.367,10.881a13.136,13.136,0,0,1,.294,2.786,13.485,13.485,0,0,1-1.854,6.762,14.163,14.163,0,0,1-11.992,6.9c-.065,0-.19,0-.315,0" transform="translate(-19.801 10.162)" fill="none" stroke="#000" stroke-width="6" />
                <path id="Path_9" data-name="Path 9" d="M54.5,0A21.4,21.4,0,0,1,75.6,16.553a19.984,19.984,0,0,1,.448,4.238c0,11.3-9.339,20.493-21.064,20.787-.1,0-.289.005-.48.005" transform="translate(-19.801 3.037)" fill="none" stroke="#000" stroke-width="6" />
                <rect id="Rectangle_153" data-name="Rectangle 153" width="6.127" height="61.271" transform="translate(6.5 4.333) rotate(-45)" />
                <rect id="Rectangle_154" data-name="Rectangle 154" width="6.127" height="61.271" transform="translate(49.825 0) rotate(45)" />
              </svg>
            }
          </StyledButtonSound>
        </div>}
      </div>
    </div>
  );
};
export default LoadingScreen
