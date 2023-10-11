import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "@/utils/supabase";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedDate: string;
}

const updateBook = async (book: Book) => {
  const { data, error } = await supabase
    .from('books')
    .update(book)
    .eq('id', book.id)
    .select()
  
  if (error)
    throw new Error(error.message);

  return data
}

export default function useUpdateBook(book: Book) {
  const queryClient = useQueryClient();

  return useMutation(() => updateBook(book),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["books"]);
      },
    }
  );
}