import * as types from "../constant";

const initialState = {
  toDoInput: "",
  toDoList: [
    {
      name: "Movies",
      openItems: ["Interstellar", "End game"],
    },
    {
      name: "Yolo",
      openItems: ["The martian", "Mona"],
    },
    {
      name: "Test",
      openItems: ["Test 1", "Test 2"],
    },
  ],
};

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT:
      state.toDoInput = action.payload;
      return { ...state };

    case types.ADD_JOB:
      return {
        ...state,
        toDoList: [...state.toDoList, { name: action.payload }],
      };

    case types.DELETE_JOB:
      const fakeTodoList = [...state.toDoList];
      fakeTodoList.splice(action.payload, 1);
      return { ...state, toDoList: fakeTodoList };

    case types.DELETE_ITEM_JOB:
      
      return { ...state };

    default:
      return { ...state };
  }
};

export default ToDoReducer;
