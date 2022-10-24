const { default: styled } = require("styled-components");

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  background-color: rgba(0,0,0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupContainer = styled.div`
  width: 350px;
  height: 200px;
  background-color: #f7f7f7;
  border-radius: 10px;
  border: 1px solid #dedfe0;

  display: grid;
  grid-template-areas: 'text text' 'text text' 'cc-button cf-button'
`

export const TextWrapper = styled.div`
  grid-area: text;
  
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  // font-weight: bold;
  padding: 10px;
`

export const BaseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  color: #f7f7f7;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

export const CancelButton = styled(BaseButton)`
  grid-area: cc-button;
  background-color: #d95743;
  border-bottom-left-radius: 10px;

  &:active {
    background-color: #db412a;
  }
`

export const ConfirmButton = styled(BaseButton)`
  grid-area: cf-button;
  background-color: #979a9c;
  border-bottom-right-radius: 10px;

  &:active {
    background-color: #787b7d;
  }
`