type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersServerPage() {
    await new Promise(resolve => setTimeout(resolve, 2000)); //Simulate network delay
    // throw new Error("Simulated error");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();
    console.log(users);

  return (
    <div>
      <h1>Users Client Page</h1>
      <p>This is a server-side rendered page for users.</p>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} ({user.username}) - {user.email} - {user.phone}
                </li>
            ))}
        </ul>
    </div>
  );
}