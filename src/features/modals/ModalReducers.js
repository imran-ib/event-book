import { OPEN_MODAL, CLOSE_MODAL } from "./ModalConstants";
import createReducer from "../../common/utils/createReducer";

const initialState = null;

export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

export const closeModal = (state, payload) => {
  return null;
};

export default createReducer(initialState, {
  [OPEN_MODAL]: openModal,
  [CLOSE_MODAL]: closeModal
});
