import { useState, useEffect } from "react";
import api from "../utils/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const createTask = async (taskData) => {
    const { data } = await api.post("/tasks", taskData);
    setTasks((prev) => [data, ...prev]);
  };

  const updateTask = async (id, updates) => {
    const { data } = await api.put(`/tasks/${id}`, updates);
    setTasks((prev) => prev.map((t) => (t._id === id ? data : t)));
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  return { tasks, loading, createTask, updateTask, deleteTask };
};
