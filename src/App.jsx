import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import EditModal from "./components/EditModal";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [recentUser, setRecentUser] = useState(null);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1", {
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    })
    .then((res) => setUsers(res.data.data))
    .catch((err) => console.error("Axios error:", err));
  }, []);

 
  const handleAddUser = async ({ name, job }) => {
    try {
      const res = await axios.post(
        "https://reqres.in/api/users",
        { name, job },
        {
          headers: {
            "x-api-key": "reqres-free-v1"
          }
        }
      );

      const newUser = {
        id: Date.now(),
        name,
        job,
        email: `${name.toLowerCase()}@gmail.com`,
        avatar: `https://i.pravatar.cc/150?u=${Date.now()}`
      };

      setUsers([newUser, ...users]);
      setRecentUser(newUser);
    } catch (err) {
      console.error("Add User Error:", err);
    }
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-center">User Management Dashboard</h1>

      <UserForm onAddUser={handleAddUser} />

      {recentUser && (
        <div className="bg-green-100 p-4 mb-4 rounded border border-green-300">
          <h2 className="text-lg font-semibold mb-1">Recently Added:</h2>
          <p>👤 Name: {recentUser.name}</p>
          <p>💼 Job: {recentUser.job}</p>
        </div>
      )}

      <UserTable users={users} onDelete={handleDeleteUser} onEdit={setEditingUser} />

      {editingUser && (
        <EditModal
          user={editingUser}
          onUpdate={handleUpdateUser}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
}
