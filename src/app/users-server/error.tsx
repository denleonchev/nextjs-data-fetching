"use client";

export default function UsersServerError({ error }: { error: Error }) {
    return <div>Error: {error.message}</div>;
}
