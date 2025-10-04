type Author = {
    id: number;
    name: string;
}

export async function Author({ userId }: { userId: number }) {
    await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate delay
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const author: Author = await response.json();

    return (
        <p>Written by {author.name}</p>
    );
}