import React, { useState, useRef } from "react";
import { Container } from "./styles";
import AddTask from "../../components/AddTask";
import logo from "../../assets/Logo.svg";
import edit from "../../assets/Edit_duotone.svg";
import NewTask from "../../components/NewTask";


const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Container>
      <div className="wrapper">
        <img src={logo} alt="Logo" />
        <div className="titleWrapper">
          <h1>My Task Board</h1>
          <span>Tasks to keep organised</span>
        </div>
        <img src={edit} alt="Ilustração de uma caneta preta" />
      </div>

      {tasks.map((task, index) => (
        <NewTask
          key={index}
          title={task.title}
          description={task.description}
          status={task.status}
          icon={task.icon}
          statusImg={task.statusImg}
          taskInfo={task}
        />
      ))}

      <AddTask onAdd={handleAddTask} />
    </Container>
  );
};

export default Tasks;