import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskStore } from '@/types/task';

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      searchQuery: '',
      
      setTasks: (tasks: Task[]) => set({ tasks }),
      
      updateTaskStatus: (id: string, status: Task['status']) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),
      
      setSearchQuery: (query: string) => set({ searchQuery: query }),
      
      getFilteredTasks: () => {
        const { tasks, searchQuery } = get();
        if (!searchQuery.trim()) return tasks;
        
        const query = searchQuery.toLowerCase();
        return tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query) ||
            task.assignee.toLowerCase().includes(query) ||
            task.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      },
      
      getTasksByStatus: (status: Task['status']) => {
        const filteredTasks = get().getFilteredTasks();
        return filteredTasks.filter((task) => task.status === status);
      },
    }),
    {
      name: 'task-storage',
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);
