import styled from 'styled-components';

export const Lines = () => {

  return (
    <StyledLines className="lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </StyledLines>
  );
};

const StyledLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  z-index: -1;

  & .line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      position: absolute;
      height: 15vh;
      width: 100%;
      top: -50%;
      left: 0;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
      animation: run 7s 0s infinite;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }
    &:nth-child(1) {
      margin-left: -25%
    }
    &:nth-child(1)::after {
      animation-delay: 2s;
    }
    &:nth-child(3) {
      margin-left: 25%;
    }
    &:nth-child(3)::after {
      animation-delay: 2.5s;
    }
  }

  @keyframes run {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }
`