import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const ToolBar = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  padding: 10px;

  align-items: center;
`

export const TextWrapper = styled.p`
  font-size: 15px;
  font-style: italic;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05)
  }
` 

export const FormWrapper = styled.form`
  width: 100%;
  height: calc(100% - 50px);

  display: flex;
`
export const FormFieldWrapper = styled.div`
  width: 30%;
  height: 100%;

  position: relative;
`

export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`

export const TextInput = styled.input.attrs(props => ({
  type: "text",
}))`
  height: 35px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #bbb;
  font-size: 15px;
  padding: 0 5px;

  &:focus {
    outline: none;
    border: 2px solid #1f70f2;
  }
`

export const TextArea = styled.textarea`
  font-family: inherit;
  max-width: 100%;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #bbb;
  font-size: 15px;
  padding: 5px;
  resize: none;

  &:focus {
    outline: none;
    border: 2px solid #1f70f2;
  }
`

export const SelectWrapper = styled.div`
  margin-bottom: 10px;
`

export const DropdownSelector = styled.select`
  margin-left: 10px;
  border-radius: 10px;
  padding: 3px;
  border: 1px solid #bbb;

  &:focus {
    outline: none;
  }
`

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  font-size: 15px;
  background-color: #123;
  color: white;
  margin-right: 5px;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
    background-color: #000;
  }
`

export const SubmitButton = styled.button`
  position: absolute;

  bottom: 10px;
  width: 100%;
  height: 50px;
  font-size: 15px;

  border: none;
  border-radius: 10px;

  background-color: ${props => props.enable? "#1f70f2":"#bbb"}; 
  color: ${props => props.enable? "white":"black"};

  &:hover {
    cursor: ${props => props.enable? "pointer":"default"};
  }
`

export const ContentEditorWrapper = styled.div`
  width: 70%;
  height: 100%;

  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .w-md-editor-text-pre > code,
  & .w-md-editor-text-input {
    font-size: 17px !important;
    line-height: 24px !important;
  }
`

export const MDEditorStyled = styled(MDEditor)`
  height: 100%!important;
`