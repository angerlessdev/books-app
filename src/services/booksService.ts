import { Book } from "@/domain/book";

const API_URL = "https://gutendex.com/books/?page=1";

export async function fetchBooks(): Promise<Book[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.results)) {
        throw new Error("Unexpected API response structure");
    }

    return data.results
        .filter((b: Partial<Book>) => b.id && b.title)
        .slice(0, 10) as Book[];
}

