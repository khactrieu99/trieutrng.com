import { useDispatch, useSelector } from "react-redux";
import { openAndCatchEventConfirmPopup } from "redux/features/ConfirmPopupSlice";
import { confirm, decline } from "redux/features/ConfirmPopupSlice";

function useConfirmPopup() {
  const dispatch = useDispatch();
  const { text, isOpened } = useSelector(state => state.confirmPopup);

  const doOpen = async (text) => {
    const { payload } = await dispatch(openAndCatchEventConfirmPopup(text));
    return payload;
  }

  const doConfirm = () => {
    return dispatch(confirm());
  }

  const doDecline = () => {
    return dispatch(decline());
  }

  return {
    text,
    isOpened,
    doOpen,
    doConfirm,
    doDecline
  }
}

export default useConfirmPopup;