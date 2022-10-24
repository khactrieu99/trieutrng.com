import styled from "styled-components";

export const Container = styled.article`
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

  @media (max-width: 550px) {
    height: auto;
    width: 100%;
    flex-direction: column-reverse;
  }
`
export const ContentContainer = styled.div`
  grid-area: content;
  padding: 10px;

  width: 70%;

  @media (max-width: 550px) {
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

  @media (max-width: 550px) {
    min-height: 0
  }
`

export const Description = styled.p`
  margin: 0;  
  padding: 5px 0;
  min-height: 100px;
  width: 100%;
  color: #515151;

  @media (max-width: 550px) {
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

  @media (max-width: 550px) {
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

  &:hover {
    cursor: pointer;
    background-color: #000;
  }
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
  // height: 100%;
  width: 30%;

  background-color: #f73;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    width: 100%;
    height: 250px;
  }
`