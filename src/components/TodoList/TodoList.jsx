import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todos from "../Todos/Todos";
import todoListStyle from "./TodoList.module.css";
const TodoList = () => {
  // const inialState = [
  //   { id: 1, title: "شراء مستلزمات", done: false },
  //   { id: 2, title: " لعب كوره قدم", done: true },
  //   { id: 3, title: " مذاكره نود دوت جي اس", done: false },
  //   { id: 4, title: "كتابه كود", done: true },
  // ];
  const inialState = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, setTodos] = useState(inialState);
  const [mode, setMode] = useState("add");
  const [isActive, setIsActive] = useState({});

  const setToLocal = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //change completed reminder to greeen icon
  const changeTodoCompletion = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.map((ele) => {
      if (ele.id === id) {
        ele.done = !ele.done;
        return ele;
      } else {
        return ele;
      }
    });
    setTodos(newTodos);
  };
  //end

  //delete reminder
  const deleteTodo = (id) => {
    const curTodo = [...todos];
    const newTodo = curTodo.filter((ele) => ele.id !== id);
    setToLocal(newTodo);
    setTodos(newTodo);
  };
  //end

  //add new reminder

  const addTodoHandler = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: Date.now(),
        title: title,
        done: false,
      };
      const newTodos = [...todos, newTodo];
      setToLocal(newTodos);
      setTodos(newTodos);
    } else {
      const curTodos = [...todos];
      const newTodos = curTodos.map((ele) => {
        if (ele.id == isActive.id) {
          ele.title = title;
          return ele;
        }
        return ele;
      });
      setToLocal(newTodos);
      setTodos(newTodos);
      setIsActive({});
      setMode("add");
    }
  };
  //end

  //show uncompletion todo
  const unCompletionHandler = () => {
    if (mode === "not-done") {
      setMode("add");
    } else {
      setMode("not-done");
    }
  };
  let currentTodos = [...todos];
  if (mode === "not-done") {
    currentTodos = currentTodos.filter((todo) => !todo.done);
  }
  //end

  //edit todo
  const editTodo = (todo) => {
    setMode("edit");
    setIsActive(todo);
  };
  //end

  return (
    <>
      <div className={`todoListStyle.container container`}>
        <div>
          <TodoForm
            addTodoHandler={addTodoHandler}
            unCompletionHandler={unCompletionHandler}
            mode={mode}
            todos={mode !== "edit" ? currentTodos : [isActive]}
          />
          <Todos
            todos={mode !== "edit" ? currentTodos : [isActive]}
            changeTodoCompletion={changeTodoCompletion}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </>
  );
};

export default TodoList;
