
import { useState } from "react";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !job) return;
    onAddUser({ name, job });
    setName("");
    setJob("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-5">
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
