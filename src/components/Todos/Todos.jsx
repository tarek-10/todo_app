import React from "react";
import Todo from "../Todo/Todo";

const Todos = (props) => {
  return (
    <>
      <div className="todos-list">
        {props.todos.map((ele) => {
          return (
            <Todo
              todo={ele}
              key={ele.id}
              changeTodoCompletion={props.changeTodoCompletion}
              deleteTodo={props.deleteTodo}
              editTodo={props.editTodo}
            />
          );
        })}
        {props.todos.length === 0 ? (
          <h1 className="no-todos"> ...لا يوجد مهام</h1>
        ) : null}
      </div>
    </>
  );
};

export default Todos;
