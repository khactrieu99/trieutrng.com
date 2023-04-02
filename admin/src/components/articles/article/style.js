import styled from "styled-components";

export const Container = styled.article`
  position: relative;
  height: auto;
  min-height: 200px;
  width: 900px;
  border: 1px solid #bbb;

  display: flex;
  transition: 0.2s;

  &:hover {
    position: relative;
    transform: translate(0, -5px);
  }

  @media (max-width: 750px) {
    height: auto;
    width: 100%;
    flex-direction: column-reverse;
  }
`
export const ContentContainer = styled.div`
  grid-area: content;
  padding: 10px;

  width: 70%;

  @media (max-width: 750px) {
    width: 100%;
  }
`
export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin: 0;
  min-height: 50px;
  width: 100%;
  padding: 5px 0;

  font-size: 25px;
  text-align: left;
  font-weight: normal;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 750px) {
    min-height: 0
  }
`

export const Description = styled.p`
  margin: 0;  
  padding: 5px 0;
  min-height: 100px;
  width: 100%;
  color: #515151;

  @media (max-width: 750px) {
    min-height: 0
  }
`

export const Extra = styled.div`
  padding: 5px 0;
  min-height: 50px;
  width: 100%;
  font-size: 12px;
  color: #515151;

  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    min-height: 0
  }
`

export const ExtraTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export const ETagWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const ETag = styled.div`
  padding: 2px 3px;
  margin-left: 3px;
  background-color: #123;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ExtraTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-item: flex-start;
`

export const Thumbnail = styled.a`
  background-image: url(${props => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  grid-area: image;
  width: 30%;

  @media (max-width: 750px) {
    width: 100%;
    height: 250px;
  }
`

export const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`