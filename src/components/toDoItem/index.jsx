import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actDeleteItemJob, actDeleteJob } from "../../actions";

function ToDoItem({ listTodo, index }) {
  const [checked, setCheked] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteJob = (index) => {
    dispatch(actDeleteJob(index));
  };

  const handleDeleteItemJob = (index) => {
    dispatch(actDeleteItemJob(index));
  };

  const handleCheck = e => {
      setCheked(e.target.checked);
  }

  const handleShowAddItem = () => {
      setShowAddItem(true)
  }

  const handleKeyDown = e => {
     if(e.key === "Escape") 
     setShowAddItem(false);
  }

  return (
    <div className="item-todo">
      <div className="item-title d-flex align-items-center justify-content-between">
        <h3>{listTodo.name}</h3>
        <div className="item-title-icon">
          <div>
            <i className="fa fa-plus-circle mr-3" onClick={handleShowAddItem} />
            <i
              className="fa fa-trash-alt pr-4"
              onClick={() => handleDeleteJob(index)}
            />
          </div>
        </div>
      </div>
      {showAddItem ? (<div className="px-4 my-2"> <input onKeyDown={handleKeyDown} className="px-2 py-1" style={{width:'100%'}} type="text" placeholder="New item" /></div>) : null}
      <ul className="mt-2">
        {listTodo.openItems?.map((item, index) => (
          <li className="d-flex justify-content-between px-4 mb-2" key={index}>
            <div className="item-left">
              <input type="checkbox" name="checked" onChange={handleCheck}/>
              {checked ? (
                <del className="ml-2">{item}</del>
              ) : (
                <span className="ml-2">{item}</span>
              )}
            </div>
            <div
              className="item-right"
              style={{ cursor: "pointer" }}
              onClick={() =>
                {
                 handleDeleteItemJob(index)}
                }
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
