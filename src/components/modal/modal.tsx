import { memo } from "react";
import {
  ReactNodeType,
  functionWithNoReturnType,
} from "../../types/globalTypes";
import classes from "./style.module.scss";

type ModalPropsType = {
  children: ReactNodeType;
  isOpen: boolean;
  onClose: functionWithNoReturnType;
};

function Modal({ children, isOpen, onClose }: ModalPropsType) {
  return (
    <dialog className={classes.modalContainer} open={isOpen}>
      <div className={classes.modalContent}>{children}</div>
      <button onClick={onClose} className={classes.modalCloseButton}>
        Close
      </button>
    </dialog>
  );
}

export default memo(Modal);
