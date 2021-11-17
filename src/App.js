import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actAddJob, actHandleChange } from "./actions";
import "./App.css";
import TodoItem from "./components/toDoItem";

function App() {

  const listTodo = useSelector(state => state.ToDoReducer.toDoList);
  const toDoInput = useSelector(state => state.ToDoReducer.toDoInput);
  
  const input = useRef();
  const dispatch = useDispatch();
  
  const handleAddList = () => {
    dispatch(actAddJob(toDoInput));
    input.current.focus();
  }  

  return (
    <div className="container pt-3 app">
      <div
        className="content-top"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="title">
          <h2>DASHBOARD</h2>
        </div>
        <div className="add-new-list d-flex">
          <input ref={input} className="pl-2" placeholder="New To-do List" onChange={e =>  dispatch(actHandleChange(e.target.value))} />
          <button className="btn ml-2" onClick={handleAddList}>Create</button>
        </div>
      </div>
      <div className="row mt-4">
      { listTodo.map((items,index) => 
      <div className="col-sm-3"  key={index}>
        <TodoItem listTodo={items} index ={index}/>
      </div>
    ) }
      </div>
    </div>
  );
}

export default App;
