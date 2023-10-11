import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "@/utils/supabase";

interface Book {
  title: string;
  author: string;
  genre: string;
  publishedDate: string;
}

const addBook = async (book: Book) => {
  const { data, error } = await supabase
    .from("books")
    .upsert(book)
    .single();
  
  if (error)
    throw new Error(error.message);

  return data
}

export default function useCreateBook(book: Book) {
  const queryClient = useQueryClient();

  return useMutation(() => addBook(book),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["books"]);
      },
    }
  );
}