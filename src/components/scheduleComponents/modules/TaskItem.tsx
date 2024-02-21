"use client";
import React, { FC } from "react";
import { TaskInterface } from "../types/typesTaskData";
import taskS from "./taskComponents.module.scss";
import { useDispatch } from "@/lib/store";

interface TaskItemProps {
  taskInfo: TaskInterface;
}

const TaskComponent: FC<TaskItemProps> = ({ taskInfo }) => {
  const dispatch = useDispatch();

  return (
    <div key={taskInfo.index} className={taskS.task}>
      <div>{taskInfo.task}</div>
      <div>Del</div>
    </div>
  );
};

export default TaskComponent;
