import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actAddItemJob,
  actDeleteItemJob,
  actDeleteJob,
  actHandleChange,
  actUpdateTitle,
} from "../../actions";

function ToDoItem({ listTodo, index }) {
  const [checked, setCheked] = useState(false);
  const [valueTitle, setValueTitle] = useState("");
  const [showAddItem, setShowAddItem] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const dispatch = useDispatch();
  const toDoInput = useSelector((state) => state.ToDoReducer.toDoInput);

  const handleDeleteJob = (index) => {
    dispatch(actDeleteJob(index));
  };

  const handleDeleteItemJob = (index) => {
    dispatch(actDeleteItemJob(index));
  };

  const handleCheck = (e) => {
    setCheked(e.target.checked);
  };

  const handleShowAddItem = () => {
    setShowAddItem(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setShowAddItem(false);
    }
    if (e.key === "Enter") {
      dispatch(actAddItemJob({index,toDoInput}));
    }
  };

  const handleClickTitle = (title) => {
    setShowTitle(true);
    setValueTitle(title);
  };

  const handleChangeInput = (e) => {
    setShowTitle(e.target.value);
  };

  const handleSaveTitle = (index) => {
    setShowTitle(false);
    dispatch(actUpdateTitle({index,showTitle}));
  };

  return (
    <div className="item-todo">
      {!showTitle ? (
        <div className="item-title d-flex align-items-center justify-content-between">
          <h3 onClick={() => handleClickTitle(listTodo.name)}>
            {listTodo.name}
          </h3>
          <div className="item-title-icon">
            <div>
              <i
                className="fa fa-plus-circle mr-3"
                onClick={handleShowAddItem}
              />
              <i
                className="fa fa-trash-alt pr-4"
                onClick={() => handleDeleteJob(index)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="item-title d-flex align-items-center justify-content-between">
          <input
            type="text"
            defaultValue={valueTitle}
            placeholder={valueTitle}
            className="px-2 py-1"
            onChange={handleChangeInput}
          />
          <div className="item-title-icon">
            <i className="fa fa-save pr-3" onClick={() => {handleSaveTitle(index)}} />
          </div>
        </div>
      )}
      {showAddItem ? (
        <div className="px-4 my-2">
          <input
            onKeyDown={handleKeyDown}
            className="px-2 py-1"
            style={{ width: "100%" }}
            type="text"
            placeholder="New item"
            onChange={(e) => dispatch(actHandleChange(e.target.value))}
          />
        </div>
      ) : null}
      <ul className="mt-2">
        {listTodo.openItems?.map((item, index) => (
          <li className="d-flex justify-content-between px-4 mb-2" key={index}>
            <div className="item-left">
              <input type="checkbox" name="checked" onChange={handleCheck} />
              {checked ? (
                <del className="ml-2">{item}</del>
              ) : (
                <span className="ml-2">{item}</span>
              )}
            </div>
            <div
              className="item-right"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleDeleteItemJob(item);
              }}
            >
              &times;
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoItem;
