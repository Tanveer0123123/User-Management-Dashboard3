
export default function UserTable({ users, onDelete, onEdit }) {
  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Avatar</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="border p-2">{user.id}</td>
            <td className="border p-2">
              <img src={user.avatar} className="w-10 h-10 rounded-full" />
            </td>
            <td className="border p-2">{user.name || `${user.first_name} ${user.last_name}`}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">
              <button onClick={() => onEdit(user)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => onDelete(user.id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
