export interface Author {
    name: string;
    birth_year?: number | null;
    death_year?: number | null;
}

export interface Book {
    id: number;
    title: string;
    authors: Author[];
}
