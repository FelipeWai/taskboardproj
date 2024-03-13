import React, { useEffect, useRef, useState } from "react";
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

const Modal = forwardRef(({ children, onAdd, onUpdate, save }, ref) => {
  const dialog = useRef();
  const title = useRef();
  const description = useRef();
  // const [newSelectedIcon, setNewSelectedIcon] = useState(null);
  // const [newSelectedStatus, setNewSelectedStatus] = useState(null);

  const [newSelectedIcon, setNewSelectedIcon] = useState({
    name: "defaultIconName",
    path: "defaultIconPath",
  });
  const [newSelectedStatus, setNewSelectedStatus] = useState({
    name: "defaultStatusName",
    path: "defaultStatusPath",
  });

  function handleSave(event) {
    event.preventDefault();
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

    const data = {
      id: Math.floor(Math.random() * 101),
      title: entradaTitle,
      description: entradaDescricao,
      status: newSelectedStatus.name,
      statusImg: newSelectedStatus.path,
      icon: newSelectedIcon.path,
    };

    onAdd({
      id: Math.floor(Math.random() * 101),
      title: entradaTitle,
      description: entradaDescricao,
      status: newSelectedStatus.name,
      statusImg: newSelectedStatus.path,
      icon: newSelectedIcon.path,
    });

    fetch("url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Deu errado");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Task foi adicionada:", data);
        title.current.value = "";
        description.current.value = "";
        setSelectedIcon(null);
        setActiveIndex(null);
        save= true
        dialog.current.close();
      })
      .catch((error) => {
        console.error("Error adding task:", error);
        alert("Erro ao adicionar task!")
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
      openWithTask(task) {
        const {
          title: taskTitle,
          description: taskDescription,
          icon,
          status,
        } = task;
        title.current.value = taskTitle;
        description.current.value = taskDescription;
        setNewSelectedIcon({ name: icon, path: icon });
        setNewSelectedStatus({ name: status, path: status });

        setSelectedIcon({ name: icon, path: icon });
        setActiveIndex({ name: status, path: status });
        dialog.current.showModal();
      },
    };
  });

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName, iconPath) => {
    setSelectedIcon({ name: iconName, path: iconPath });
    setNewSelectedIcon({ name: iconName, path: iconPath });
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
        <button type="submit" className="btnSave" onClick={handleSave}>
          Save
          <Check />
        </button>
      </form>
    </Container>,
    document.getElementById("modal-root")
  );
});

export default Modal;
