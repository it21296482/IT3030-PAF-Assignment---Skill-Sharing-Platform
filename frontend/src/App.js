import React, { useEffect, useState } from "react";
import { getAllUsers, addUser } from "./Api";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser({ name, email });
        fetchUsers(); // Refresh the user list
        setName("");
        setEmail("");
    };

    return (
        <div>
            <h1>Skill Sharing Platform</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Add User</button>
            </form>

            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
