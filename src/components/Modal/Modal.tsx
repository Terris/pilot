import { ReactNode, useState } from "react";
import styles from "./Modal.module.scss";
import { RiCloseFill } from "react-icons/ri";

interface ModalProps {
  children: ReactNode;
  trigger: ReactNode;
  initOpen?: boolean;
}

function Modal({ children, trigger, initOpen }: ModalProps) {
  const [open, setOpen] = useState<boolean>(initOpen ? true : false);
  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      {open && (
        <div className={styles.modal}>
          <div className={styles["close-icon"]} onClick={() => setOpen(false)}>
            <RiCloseFill size={64} />
          </div>
          <div className={styles["modal-inner"]}>{children}</div>
        </div>
      )}
    </>
  );
}

export default Modal;
