import React from "react";
import { Container, TaskDetails } from "./styles";
import add from "../../assets/Add_round_duotone.svg";
import Modal from "../Modal";

const NewTask = ({ title, status, icon, statusImg, description }) => {

  return (
    <Container
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
  );
};

export default NewTask;
