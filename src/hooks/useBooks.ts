import { useEffect, useState } from "react";
import { Book } from "@/domain/book";
import { fetchBooks } from "@/services/booksService";

export type Status = "loading" | "success" | "error";

export interface UseBooksResult {
    data: Book[] | null;
    status: Status;
    error: string | null;
}

export function useBooks(): UseBooksResult {
    const [data, setData] = useState<Book[] | null>(null);
    const [status, setStatus] = useState<Status>("loading");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const books = await fetchBooks();
                setData(books);
                setStatus("success");
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
                setStatus("error");
            }
        };

        loadBooks();
    }, []);

    return { data, status, error };
}
