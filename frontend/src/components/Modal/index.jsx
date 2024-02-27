import React, { useRef } from "react";
import { Container } from "./styles";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <Container ref={dialog}>
      {children}
      
      <form method="dialog">
        <button className="btnDelete">Delete<Trash2 /></button>
        <button className="btnSave">Save<Check /></button>
      </form>
    </Container>,
    document.getElementById("modal-root")
  );
});

export default Modal;
