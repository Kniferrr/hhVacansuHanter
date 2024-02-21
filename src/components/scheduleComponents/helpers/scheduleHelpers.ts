import { Dispatch } from "redux";
import { FetchTaskByUsername } from "../services/fetchTaskData";
import { TaskSlice } from "@/lib/reducers/TaskSlice";

const GetTasks = (dispatch: Dispatch) => {
  try {
    setTimeout(() => {
      FetchTaskByUsername().then((data) =>
        dispatch(TaskSlice.actions.setTasksList(data))
      );
    }, 1000);
  } catch (error) {}
};

export const RevalidateTasks = () => {
  return async (dispatch: Dispatch) => {
    try {
      GetTasks(dispatch);
    } catch (error) {}
  };
};
