import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ArticleContainer = styled.div`
  width: 100%;
  margin: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CreateButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  border-radius: 50%;
  background-color: white;
  border: 1px solid #bbb;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #dedfe0;
    transform: translate(0, -5px);
  }
`

export const CreateButton = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`