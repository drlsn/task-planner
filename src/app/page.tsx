"use client";

import TaskList from "@/components/TaskList";
import TaskListItem from "@/components/TaskListItem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-5 sm:px-10 md:px-16 lg:px-36 xl:px-48 2xl:px-96">
      <TaskList>
        <TaskListItem startTime="10:00" endTime="10:45" color="violet-700">
          Japanese Words Rehearsal sddsds asffa asfaf
        </TaskListItem>
        <TaskListItem startTime="11:00" endTime="11:45" color="gray-700">
          Prog-Core Composing
        </TaskListItem>
        <TaskListItem startTime="12:00" endTime="12:45" color="green-700">
          Auctions Api Development
        </TaskListItem>
        <TaskListItem startTime="13:00" endTime="13:45" color="red-700">
          Japanese Course Learning
        </TaskListItem>
      </TaskList>
    </main>
  );
}
