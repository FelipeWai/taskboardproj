import React, { useContext, useRef, useState } from "react";
import { Container } from "./styles";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import {iconContext} from "../Stone/Context"

import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";
import progess from "../../assets/Time_atack_duotone.svg";
import completed from "../../assets/Done_round_duotone.svg";
import wont from "../../assets/close_ring_duotone.svg";

import Input from "../Input";
import Status from "../Status";
import Icons from "../Icons"

const Modal = forwardRef(({ children, onAdd }, ref) => {
  const dialog = useRef();

  const title = useRef();
  const description = useRef();

  const selectedIcon = useContext(iconContext)
  console.log(selectedIcon)

  function handleSave() {
    const entradaTitle = title.current.value;
    const entradaDescricao = description.current.value

    if(
    entradaTitle.trim() === "" ||
    entradaDescricao.trim() === "" || 
    activeIndex === null ||
    selectedIcon === null
    )
    {
      alert("Informar valores válidos")
      return
    }

    onAdd({
      title: entradaTitle,
      description: entradaDescricao,
      status: activeIndex,
      icon: selectedIcon
    });

    dialog.current.close();

  }

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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleInProgressClick = () => setActiveIndex(activeIndex === "inProgress" ? null : "inProgress");
  const handleCompletedClick = () => setActiveIndex(activeIndex === "completed" ? null : "completed");
  const handleWontDoClick = () => setActiveIndex(activeIndex === "wontdo" ? null : "wontdo");

  return createPortal(
    <Container ref={dialog}>
      {children}

      <Input label="Task name" type="text" ref={title} />
      <Input label="Description" isTextarea ref={description} placeholder="Enter a short description"/>

      <div className="icons">
        <label>Icon</label>
        <div>
          <Icons/>
        </div>
      </div>

      <div className="status">
        <label>Status</label>
        <div>
          <Status
            statusText="In Progress"
            inProgress
            imgStatus={progess}
            onClick={handleInProgressClick}
            isActive={activeIndex === "inProgress"}
          />
          <Status
            statusText="Completed"
            completed
            imgStatus={completed}
            onClick={handleCompletedClick}
            isActive={activeIndex === "completed"}
          />
          <Status
            statusText="Won’t do"
            wontdo
            imgStatus={wont}
            onClick={handleWontDoClick}
            isActive={activeIndex === "wontdo"}
          />
        </div>
      </div>

      <form method="dialog">
        <button className="btnDelete">
          Delete
          <Trash2 />
        </button>
        <button className="btnSave" onClick={handleSave}>
          Save
          <Check />
        </button>
      </form>
    </Container>,
    document.getElementById("modal-root")
  );
});

export default Modal;
