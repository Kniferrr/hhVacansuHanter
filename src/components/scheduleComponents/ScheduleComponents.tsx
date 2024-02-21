import SearchBar from "./modules/SearchBar";
import TaskFilterBar from "./modules/TaskFilterBar";
import TaskList from "./modules/TaskList";

export default async function ScheduleComponents() {
  return (
    <>
      <SearchBar />
      <TaskFilterBar />
      <TaskList />
    </>
  );
}
