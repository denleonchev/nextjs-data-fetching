import { Suspense } from "react";
import { Author } from "./author";

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export default async function PostsSequentialPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();
    const filteredPosts = posts.filter((post) => post.id % 10 === 1);

    return (
        <div>
            <h1>Blog posts</h1>
            {filteredPosts.map(post => (
                <li key={post.id}>
                    <h2>{post.id}</h2>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Suspense fallback={<p>Loading author...</p>}>
                        <Author userId={post.userId} />
                    </Suspense>
                </li>
            ))}
        </div>
    );
}