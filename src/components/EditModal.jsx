
import { useState } from "react";

export default function EditModal({ user, onUpdate, onClose }) {
  const [name, setName] = useState(user.name || user.first_name);
  const [job, setJob] = useState(user.job || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...user, name, job });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-3">Edit User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="border w-full p-2" value={name} onChange={e => setName(e.target.value)} />
          <input className="border w-full p-2" value={job} onChange={e => setJob(e.target.value)} />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-gray-300 px-3 py-1">Cancel</button>
            <button type="submit" className="bg-green-500 text-white px-3 py-1">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
