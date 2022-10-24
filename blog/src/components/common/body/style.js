import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - ${props => props.theme.headerHeight || 70}px);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 200px auto;
`

export const MenuBarWrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const ContentViewWrapper = styled.div`
  height: 100%;
  width: 100%;

  overflow-y: scroll;
`