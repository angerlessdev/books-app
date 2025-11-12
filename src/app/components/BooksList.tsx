"use client";

import { useBooks } from "@/hooks/useBooks";

export default function BooksList() {
    const { data, status, error } = useBooks();

    if (status === "loading") return <p>Loading books...</p>;
    if (status === "error") return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <p>No books available.</p>;

    return (
        <section>
            <h2>Book List</h2>
            <ul>
                {data.slice(0, 10).map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> —{" "}
                        {book.authors?.[0]?.name ?? "Unknown author"}
                    </li>
                ))}
            </ul>
        </section>
    );
}
