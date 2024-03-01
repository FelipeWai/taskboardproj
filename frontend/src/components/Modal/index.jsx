import React, { useContext, useRef, useState } from "react";
import { Container } from "./styles";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";
import progess from "../../assets/Time_atack_duotone.svg";
import completed from "../../assets/Done_round_duotone.svg";
import wont from "../../assets/close_ring_duotone.svg";
import estudo from "../../assets/estudo.png";
import pensar from "../../assets/pensar.png";
import cafe from "../../assets/cafe.png";
import treino from "../../assets/treino.png";
import livros from "../../assets/livros.png";
import alarme from "../../assets/alarme.png";

import Input from "../Input";
import Status from "../Status";
import Icons from "../Icons";

const Modal = forwardRef(({ children, onAdd }, ref) => {
  const dialog = useRef();

  const title = useRef();
  const description = useRef();

  const [newSelectedIcon, setNewSelectedIcon] = useState(null);
  const [newSelectedStatus, setNewSelectedStatus] = useState(null);

  function handleSave() {
    const entradaTitle = title.current.value;
    const entradaDescricao = description.current.value;

    if (
      entradaTitle.trim() === "" ||
      entradaDescricao.trim() === "" ||
      newSelectedStatus === null ||
      newSelectedIcon === null
    ) {
      alert("Informar valores válidos");
      return;
    }

    onAdd({
      title: entradaTitle,
      description: entradaDescricao,
      status: newSelectedStatus.name,
      statusImg: newSelectedStatus.path,
      icon: newSelectedIcon.path,
    });
    title.current.value = "";
    description.current.value = "";
    setSelectedIcon(null);
    setActiveIndex(null);

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

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName, iconPath) => {
    setSelectedIcon((prevIcon) => {
      const newSelectedIcon =
        prevIcon === iconName ? null : { name: iconName, path: iconPath };
      setNewSelectedIcon(newSelectedIcon);
      return newSelectedIcon;
    });
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleInProgressClick = (statusName, iconPath) => {
    setActiveIndex((prevStatus) => {
      const newSelectedStatus =
        prevStatus === statusName ? null : { name: statusName, path: iconPath };
      setNewSelectedStatus(newSelectedStatus);
      return newSelectedStatus;
    });
  };

  return createPortal(
    <Container ref={dialog}>
      {children}

      <Input label="Task name" type="text" ref={title} />
      <Input
        label="Description"
        isTextarea
        ref={description}
        placeholder="Enter a short description"
      />

      <div className="icons">
        <label>Icon</label>
        <div>
          <Icons
            imgIcon={estudo}
            isSelected={selectedIcon && selectedIcon.name === "estudo"}
            click={() => handleIconClick("estudo", estudo)}
          />
          <Icons
            imgIcon={pensar}
            isSelected={selectedIcon && selectedIcon.name === "pensar"}
            click={() => handleIconClick("pensar", pensar)}
          />
          <Icons
            imgIcon={cafe}
            isSelected={selectedIcon && selectedIcon.name === "cafe"}
            click={() => handleIconClick("cafe", cafe)}
          />
          <Icons
            imgIcon={treino}
            isSelected={selectedIcon && selectedIcon.name === "treino"}
            click={() => handleIconClick("treino", treino)}
          />
          <Icons
            imgIcon={livros}
            isSelected={selectedIcon && selectedIcon.name === "livros"}
            click={() => handleIconClick("livros", livros)}
          />
          <Icons
            imgIcon={alarme}
            isSelected={selectedIcon && selectedIcon.name === "alarme"}
            click={() => handleIconClick("alarme", alarme)}
          />
        </div>
      </div>

      <div className="status">
        <label>Status</label>
        <div>
          <Status
            statusText="In Progress"
            inProgress
            imgStatus={progess}
            onClick={() => handleInProgressClick("inProgress", progess)}
            isActive={activeIndex && activeIndex.name === "inProgress"}
          />
          <Status
            statusText="Completed"
            completed
            imgStatus={completed}
            onClick={() => handleInProgressClick("completed", completed)}
            isActive={activeIndex && activeIndex.name === "completed"}
          />
          <Status
            statusText="Won’t do"
            wontdo
            imgStatus={wont}
            onClick={() => handleInProgressClick("wontdo", wont)}
            isActive={activeIndex && activeIndex.name === "wontdo"}
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
