import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const TagItem = styled.div`
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  border: 1px solid #dedfe0;
  transition: 0.2s;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #dedfe0;
  }
`