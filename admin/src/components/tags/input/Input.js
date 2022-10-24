import { useEffect, useRef } from "react";
import { Button, FormContainer, TextInput } from "./style";

function Input(props) {
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault();
    const tag = inputRef.current.value;
    inputRef.current.value = ""
    props.createTag(tag);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <FormContainer onSubmit={onSubmit}>
      <TextInput
        ref={inputRef}
        placeholder="Tag"
        autoComplete="off"
        />
      <Button>
        Add tag
      </Button>
    </FormContainer>
  )
}

export default Input;