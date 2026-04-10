import { useTasks } from "../hooks/useTasks";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const COLUMNS = [
  { id: "todo", label: "To Do" },
  { id: "inprogress", label: "In Progress" },
  { id: "done", label: "Done" },
];

export default function DashboardPage() {
  const { tasks, loading, createTask, updateTask, deleteTask } = useTasks();
  const { user, logout } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", priority: "medium", dueDate: "" });

  const handleCreate = async (e) => {
    e.preventDefault();
    await createTask(form);
    setForm({ title: "", description: "", priority: "medium", dueDate: "" });
    setShowForm(false);
  };

  const handleStatusChange = (taskId, newStatus) => {
    updateTask(taskId, { status: newStatus });
  };

  if (loading) return <p style={{ padding: "2rem" }}>Loading tasks...</p>;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Mark-do</h1>
        <div>
          <span>Hi, {user?.name}</span>
          <button onClick={() => setShowForm(true)}>+ New Task</button>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </header>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>New Task</h3>
            <form onSubmit={handleCreate}>
              <input
                placeholder="Task title" required value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <textarea
                placeholder="Description (optional)" value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
              <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
                <option value="low">Low priority</option>
                <option value="medium">Medium priority</option>
                <option value="high">High priority</option>
              </select>
              <input
                type="date" value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              />
              <div style={{ display: "flex", gap: "8px" }}>
                <button type="submit">Create Task</button>
                <button type="button" className="btn-cancel" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="board">
        {COLUMNS.map((col) => (
          <div key={col.id} className="column">
            <h3>
              {col.label}
              <span className="count">{tasks.filter((t) => t.status === col.id).length}</span>
            </h3>
            {tasks
              .filter((t) => t.status === col.id)
              .map((task) => (
                <div key={task._id} className={`task-card priority-${task.priority}`}>
                  <p className="task-title">{task.title}</p>
                  {task.description && <p className="task-desc">{task.description}</p>}
                  <div className="task-meta">
                    <span className={`badge ${task.priority}`}>{task.priority}</span>
                    {task.dueDate && (
                      <span className="due">
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <div className="task-actions">
                    <select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task._id, e.target.value)}
                    >
                      <option value="todo">To Do</option>
                      <option value="inprogress">In Progress</option>
                      <option value="done">Done</option>
                    </select>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
