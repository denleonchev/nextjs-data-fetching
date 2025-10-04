"use client";

import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClientPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err) {
                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Users Client Page</h1>
            <ul>
                {error && <li>{error}</li>}
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.username}) - {user.email} - {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}