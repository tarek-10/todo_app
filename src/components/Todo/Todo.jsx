import React from "react";
import todoStyle from "./Todo.module.css";
import FeatherIcon from "feather-icons-react";
const Todo = (props) => {
  const { title, done, id } = props.todo;
  return (
    <>
      <div
        className={`${todoStyle.todos_todo} ${
          props.todo.done
            ? `${todoStyle.todos_todo} ${todoStyle.done}`
            : `${todoStyle.todos_todo}`
        }`}
      >
        <div
          className={todoStyle.todos_todo_icon}
          onClick={() => props.changeTodoCompletion(id)}
        >
          <FeatherIcon icon={done ? "check-circle" : "circle"} />
        </div>
        <div className={todoStyle.todos_todo_text}> {title} </div>
        <div className={todoStyle.todos_todo_cta}>
          <div
            className={todoStyle.todos_todo_cta_edit}
            onClick={() => props.editTodo(props.todo)}
          >
            <FeatherIcon icon="edit" />
          </div>
          <div
            className={todoStyle.todos_todo_cta_delete}
            onClick={() => props.deleteTodo(id)}
          >
            <FeatherIcon icon="trash-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
