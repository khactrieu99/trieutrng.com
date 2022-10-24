import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  jusify-content: space-between;
  align-items:center;
`

export const TextInput = styled.input.attrs(props => ({
  type: "text",
}))`
  width: 200px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 15px;
  padding: 0 5px;

  &:focus {
    outline: none;
    border: 2px solid #1f70f2;
  }

  &:focus + button {
    border: 2px solid #dedfe0;
    &:hover {
      border: 2px solid #1f70f2;
    }
  }
`

export const Button = styled.button`
  margin: 0;
  margin-left: 10px;
  height: 35px;
  padding: 5px 10px;
  display: inline-block;

  border-radius: 10px;
  font-size: 15px;
  outline: none;
  border: 2px solid #1f70f2;
  text-decoration: none;
  transition: 0.2s;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: #1f70f2;
    color: white;
  }
`