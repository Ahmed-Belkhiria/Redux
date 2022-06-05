import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    toDos: [
      {
        id: 1,
        desc: "bring milk",
        isDone: false,
      },
    ],
    total: 1,
  },
  reducers: {
    addToDo: (state, action) => {
      state.total += 1;
      state.toDos.push(action.payload);
    },

    //bug
    validateToDo: (state, action) => {
      state.toDos.map((i) => {
        if (i === action.payload) {
          i.isDone = true;
        }
      });
    },
    deleteToDo: (state, action) => {
      console.log(action.payload);
      state.toDos = state.toDos.filter((i) => i !== action.payload);
    },
    //end bug
  },
});

export const { addToDo, validateToDo, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
