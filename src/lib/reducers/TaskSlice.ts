"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskSlice {
  tasksList: any[];
}

const initialState: taskSlice = {
  tasksList: [],
};

export const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState,
  reducers: {
    setTasksList: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      localStorage.setItem("TaskReducer", JSON.stringify(state));
    },
  },
});
