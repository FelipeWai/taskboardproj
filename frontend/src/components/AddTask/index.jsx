import React, { useRef, useState } from "react";
import { Container } from "./styles";
import Modal from "../Modal";

import add from "../../assets/Add_round_duotone.svg";
import close from "../../assets/close_ring_duotone-1.svg";

const AddTask = ({onAdd}) => {
  const modal = useRef();

  function OpenAddTask() {
    modal.current.open();
  }
  function handleCloseModal() {
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal} onAdd={onAdd}>
        <div>
          <h4>Task details</h4>
          <button onClick={handleCloseModal}>
            <img src={close} alt="Icone com um X para fechar o modal" />
          </button>
        </div>
      </Modal>

      <Container onClick={OpenAddTask}>
        <div className="iconPlus">
          <img src={add} alt="icone com um mais desenhado" />
        </div>
        <h3>Add new task</h3>
      </Container>
    </>
  );
};

export default AddTask;
