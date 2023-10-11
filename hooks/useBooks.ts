import { useQuery } from "@tanstack/react-query";
import supabase from "@/utils/supabase";

const getBooks = async () => {
  const { data, error } = await supabase
    .from("books")
    .select()
  
  if (error)
    throw new Error(error.message);

  if (!data)
    throw new Error("Books not found");

  return data
}

export default function useBooks() {
  return useQuery(["books"], () => getBooks())
}