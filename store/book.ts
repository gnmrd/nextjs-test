import { create } from 'zustand';

type BookStore = {
  selectedBook: {
    id: string,
    title: string,
    author: string,
    genre: string,
    publishedDate: string,
  };
  setSelectedBook: (book: {
    id: string,
    title: string,
    author: string,
    genre: string,
    publishedDate: string,
  }) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  selectedBook: {
    id: "",
    title: "",
    author: "",
    genre: "",
    publishedDate: "",
  },
  setSelectedBook: (book) => set({ 
    selectedBook: {
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      publishedDate: book.publishedDate,
    }
  })
}))