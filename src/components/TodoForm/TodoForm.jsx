import React, { useState } from "react";
import formStyle from "./TodoForm.module.css";
import FeatherIcon from "feather-icons-react";
const TodoForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [editRender, setEditRender] = useState(false);

  const newTtitleHandler = (event) => {
    setNewTitle(event.target.value);
  };
  //to get title from input to set  it into reminder
  const addInputTitle = () => {
    let inTitle = newTitle;
    setNewTitle("");
    setEditRender(false);
    return props.addTodoHandler(inTitle);
  };
  //end

  //change buttun when edit in new name
  let btnString = "اضافه";
  if (props.mode === "edit") {
    btnString = "تعديل ..";
  }
  //end
  //set input when mode edit into same name of input wich i edit
  if (props.mode === "edit" && !editRender) {
    setNewTitle(props.todos[0].title);
    setEditRender(true);
  }
  //
  return (
    <>
      <div className={formStyle.todo_form}>
        <div
          className={formStyle.todos_form_icon}
          onClick={props.unCompletionHandler}
        >
          <FeatherIcon icon="circle" />
        </div>
        <div className={formStyle.todos_form_form}>
          <input
            type="text"
            placeholder=" اضف ممهه جديدة"
            onChange={newTtitleHandler}
            value={newTitle}
          />
        </div>
        <div className="todo-form-submit">
          <button
            className={`${formStyle.btn} btn btn-info`}
            onClick={addInputTitle}
            disabled={newTitle.trim() ? false : true}
          >
            {btnString}
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
