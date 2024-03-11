import React, { useRef } from "react";
import { Container, TaskDetails } from "./styles";
import add from "../../assets/Add_round_duotone.svg";
import close from "../../assets/close_ring_duotone-1.svg";
import Modal from "../Modal";

const NewTask = ({ title, status, icon, statusImg, description, taskInfo }) => {

  const modal = useRef();

  function OpenTask() {
    modal.current.openWithTask(taskInfo);
  }

  function handleCloseModal() {
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal} task={taskInfo}>
      <div>
          <h4>Task details</h4>
          <button onClick={handleCloseModal}>
            <img src={close} alt="Icone com um X para fechar o modal" />
          </button>
        </div>
      </Modal>

    <Container onClick={OpenTask}
      className={`${status === "inProgress" ? "orange" : ""} ${
        status === "completed" ? "green" : ""
      } ${status === "wontdo" ? "red" : ""}`}
    >
      <TaskDetails>
        <div>
          <img src={icon} />
        </div>
        <h3>{title}</h3>
      </TaskDetails>

      <div
        className={`${status === "inProgress" ? "orangeIcon" : ""} ${
          status === "completed" ? "greenIcon" : ""
        } ${status === "wontdo" ? "redIcon" : ""} icons`}
      >
        <img src={statusImg} />
      </div>
    </Container>
    </>
  );
};

export default NewTask;
