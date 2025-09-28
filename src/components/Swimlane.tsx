"use client";

import { Task } from "@/types/task";
import { useDroppable } from "@dnd-kit/core";
import { PlusIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import TaskCard from "./TaskCard";

interface SwimlaneProps {
  status: Task["status"];
  tasks: Task[];
  title: string;
}

export default function Swimlane({ status, tasks, title }: SwimlaneProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: status,
    data: {
      type: "swimlane",
      status,
    },
  });

  const getHeaderColor = (status: string) => {
    switch (status) {
      case "todo":
        return "bg-[#E6E8EC] text-text-natural-3";
      case "in-progress":
        return "bg-[#FFA800] text-text-natural-3";
      case "approved":
        return "bg-[#AEE753] text-text-natural-3";
      case "reject":
        return "bg-[#F90430] text-white";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex-1 min-w-0 w-full lg:w-auto border-2">
      <div className={`bg-white px-3 border-b-2 lg:px-4 py-2 lg:py-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h2
              className={`font-medium ${getHeaderColor(
                status
              )} text-xs lg:text-sm px-6 py-1 rounded-full tracking-wide`}
            >
              {title}
            </h2>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <button className="p-1 hover:bg-white/50 rounded">
              <PlusIcon className="h-3 w-3 lg:h-4 lg:w-4 text-text-natural-3 stroke-[3]" />
            </button>
            <button className="p-1 hover:bg-white/50 rounded">
              <EllipsisHorizontalIcon className="h-3 w-3 lg:h-4 lg:w-4 text-text-natural-3 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={setNodeRef}
        className={`
          min-h-[400px] lg:min-h-[500px] p-3 lg:p-4 bg-gray-50 rounded-b-lg transition-colors duration-200
          ${isOver ? "bg-blue-100" : ""}
        `}
      >
        <div className="space-y-2 lg:space-y-3">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-400 text-xs lg:text-sm py-6 lg:py-8">
              No tasks in this column
            </div>
          ) : (
            tasks.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </div>
      </div>
    </div>
  );
}
