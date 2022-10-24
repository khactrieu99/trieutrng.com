import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 15px;

  background-color: #f7f7f7;
  border-right: 1px solid #eeeeee;
`

export const BaseElement = styled(Link)`
  max-width: 100%;
  height: 35px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 5px;

  transition: 0.2s;

  text-decoration: none;
  color: black;
`
export const NormalElement = styled(BaseElement)`
  &:hover {
    cursor: pointer;
    background-color: #dedfe0;
    border-radius: 10px;
  }
`

export const ActiveElement = styled(BaseElement)`
  cursor: pointer;
  background-color: #1f70f2;
  color: #f7f7f7;
  border-radius: 10px;
`