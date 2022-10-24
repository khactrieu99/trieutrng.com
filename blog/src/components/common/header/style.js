const { default: styled, keyframes } = require("styled-components");

export const Container = styled.div`
  height: ${props => props.theme.headerHeight || 70}px;
  width: 100vw;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`

export const ImageWrapper = styled.div`
  height: 100%;

  display: flex;
`

export const Image = styled.img`
  max-height: 100%;
`

export const TextWrapper = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: black;

  position: absolute;
  bottom: -10%;
  z-index: 2;
`

const typing = keyframes`
  from { width: 0 }
  to { width: 90% }
`

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  60% { border-color: orange }
`

export const Text = styled.p`
  font-size: 12px;
  padding: 0;
  margin: 0;
  color: white;
  // font-style: italic;


  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 5px solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: 
    ${typing} 2s steps(30, end),
    ${blinkCaret} 0.5s step-end infinite;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`