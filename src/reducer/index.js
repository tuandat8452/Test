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
        toDoInput: "",
        toDoList: [...state.toDoList, { name: action.payload }],
      };

    case types.ADD_ITEM_JOB:
      const newTodos = state.toDoList.map((todo,index) => {
       if(index === action.payload.index) {
         const todoItem = [...todo.openItems];
         todoItem.push(action.payload.toDoInput);
        return {...todo, openItems:todoItem};
       }
       return todo;
      });
      return { ...state, toDoList:newTodos };

    case types.DELETE_JOB:
      const fakeTodoList = [...state.toDoList];
      fakeTodoList.splice(action.payload, 1);
      return { ...state, toDoList: fakeTodoList };

    case types.DELETE_ITEM_JOB:
      state.toDoList.map((todo) => {
        let deleItem = [...todo.openItems];
        deleItem = deleItem.filter((item, index) => item !== action.payload);
        return (todo.openItems = deleItem);
      });
      return { ...state, toDoList: [...state.toDoList] };

    case types.UPDATE_TITLE_JOB:
      const updateTodo = state.toDoList.map((todo,index) => {
        if(index === action.payload.index) {
          return {...todo, name:action.payload.showTitle};
        }
        return todo;
      });
      return { ...state, toDoList: updateTodo};

    default:
      return { ...state };
  }
};

export default ToDoReducer;
