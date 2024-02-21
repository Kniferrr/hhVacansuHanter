import { createSelector } from "reselect";
import { ReduxState } from "../store";

const tasksListSelector = (state: ReduxState) => state.TaskSlice.tasksList;

//export const filteredTasksSelector = createSelector(
tasksListSelector,
  (filter) => {
    return tasksListSelector.filter((task) => task.completed !== filterOption);
  };
//);
