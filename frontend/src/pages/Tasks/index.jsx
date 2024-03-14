import React, { useState, useRef } from "react";
import { Container } from "./styles";
import AddTask from "../../components/AddTask";
import logo from "../../assets/Logo.svg";
import edit from "../../assets/Edit_duotone.svg";
import NewTask from "../../components/NewTask";
import { ChakraProvider, IconButton } from "@chakra-ui/react"; // Importando IconButton
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

import {
  ArrowBackIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <ChakraProvider>
      <Container>
        <div className="wrapper">
          <img src={logo} alt="Logo" />
          <div className="titleWrapper">
            <h1>My Task Board</h1>
            <span className="descriptionSpan">Tasks to keep organised</span>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                mb={5}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "orange.300" }}
                _focus={{ boxShadow: "outline" }}
              >
                JoãoPedro <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem icon={<ArrowBackIcon />}>Sair da conta</MenuItem>
                <MenuDivider />
                <MenuGroup title="Ajuda" fontSize="lg">
                  <MenuItem
                    icon={<ExternalLinkIcon />}
                    onClick={() =>
                      window.open("https://github.com/JoaoPedroOM")
                    }
                  >
                    Docs
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
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
    </ChakraProvider>
  );
};

export default Tasks;
