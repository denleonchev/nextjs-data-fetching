import { Suspense } from "react";
import { Author } from "./author";

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

type Album = {
    id: number;
    userId: number;
    title: string;
}

export default async function UserParallelPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const [posts, albums] = await Promise.all([
        (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json() as unknown as Post[],
        (await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)).json() as unknown as Album[]
    ]);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.id}</h2>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
            <h1>Albums</h1>
            {albums.map(album => (
                <li key={album.id}>
                    <h2>{album.id}</h2>
                    <h2>{album.title}</h2>
                </li>
            ))}
        </div>
    );
}