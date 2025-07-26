import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔄 Add new task
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  // ❌ Delete a task by its text
  function handleDeleteTask(textToDelete) {
    const updatedTasks = tasks.filter((task) => task.text !== textToDelete);
    setTasks(updatedTasks);
  }

  // 🟡 Set category to filter
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // 🧹 Filter tasks
  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
