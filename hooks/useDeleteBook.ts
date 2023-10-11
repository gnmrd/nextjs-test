import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "@/utils/supabase";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedDate: string;
}

const deleteBook = async (book: Book) => {
  const { data, error } = await supabase
    .from('books')
    .delete()
    .eq('id', book.id)
  
  if (error)
    throw new Error(error.message);

  return data
}

export default function useDeleteBook(book: Book) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteBook(book),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["books"]);
      },
    }
  );
}