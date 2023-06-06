import { Button, Container, Flex, Input, Item, Spacer } from "./styles";
import { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from './api';



function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");

    const taskExists = listTask.some((item) => item.task === task);
    if (taskExists) {
      setErrorMessage("Essa tarefa já existe");
      return;
    }

    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTask((prevList) => [...prevList, newTask]);
    setTask("");
    setErrorMessage("");
    setSuccessMessage("Tarefa criada com sucesso!");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const newList = listTask.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !checked };
      }
      return task;
    });
    setListTask(newList);
  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  const filteredTasks = listTask.filter((task) =>
    task.task.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1 className="title">Organizador de Tarefas</h1>
      <Spacer />

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <Spacer margin="16px" />

      <Flex direction="row">
        <Input
          value={filter}
          placeholder="Pesquisar tarefa"
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: "100%" }} // Apply same width as task items
        />
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {filteredTasks.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i className="bx bx-check "></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i className="bx bx-trash "></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;
