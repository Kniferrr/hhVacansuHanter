"use client";
import React from "react";
import taskS from "./taskComponents.module.scss";
import { useDispatch } from "@/lib/store";

export default function TaskFilterBar() {
  const dispatch = useDispatch();

  return <div className={taskS.component}></div>;
}
