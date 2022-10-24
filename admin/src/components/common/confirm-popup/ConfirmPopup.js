import useConfirmPopup from "hooks/useConfirmPopup";
import { useEffect } from "react";
import { CancelButton, ConfirmButton, Container, PopupContainer, TextWrapper } from "./style";

function ConfirmPopup(props) {
  const { text, isOpened, doConfirm, doDecline } = useConfirmPopup();

  return (
    isOpened &&
    <Container>
      <PopupContainer>
        <TextWrapper>
          {text}
        </TextWrapper>

        <CancelButton onClick={doDecline}>
          Cancel
          </CancelButton>

        <ConfirmButton onClick={doConfirm}>
          Confirm
          </ConfirmButton>
      </PopupContainer>
    </Container>
  )
}

export default ConfirmPopup;