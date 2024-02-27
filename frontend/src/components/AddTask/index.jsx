import React, { useRef } from "react";
import { Container } from "./styles";
import Modal from "../Modal";

import add from "../../assets/Add_round_duotone.svg";
import close from "../../assets/close_ring_duotone-1.svg"
import progess from "../../assets/Time_atack_duotone.svg"
import completed from "../../assets/Done_round_duotone.svg"
import wont from "../../assets/close_ring_duotone.svg"

import Input from "../Input";
import Status from "../Status";

const AddTask = ({}) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();

  function OpenAddTask() {
    modal.current.open();
  }
  function handleCloseModal() {
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <div>
          <h4>Task details</h4>
          <button onClick={handleCloseModal}>
            <img src={close} alt="Icone com um X para fechar o modal"/>
          </button>
        </div>

        <Input label="Task name" type="text" ref={title}/>
        <Input label="Description" isTextarea ref={description} placeholder="Enter a short description"/>

        <div>
          <label>Icon</label>
        </div>
        
        <div className="status">
          <label>Status</label>
          <div>
            <Status statusText="In Progress" inProgress imgStatus={progess}/>
            <Status statusText="Completed" completed imgStatus={completed}/>
            <Status statusText="Won’t do" wontdo imgStatus={wont}/>
          </div>
        </div>
      </Modal>

      <Container onClick={OpenAddTask}>
        <div>
          <img src={add} alt="icone com um mais desenhado" />
        </div>
        <h3>Add new task</h3>
      </Container>
    </>
  );
};

export default AddTask;
