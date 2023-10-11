import { useBookStore } from "@/store/book"
import { useModalStore } from "@/store/modal"
import useDeleteBook from "@/hooks/useDeleteBook"

export default function DeleteBook() {
  const setOpen = useModalStore((state) => state.setOpen)
  const selectedBook = useBookStore((state) => state.selectedBook)
  const deleteBookMutation = useDeleteBook(selectedBook)

  const handleSubmit = () => {
    deleteBookMutation.mutate();
    setOpen("");
  }

  return (
  <>
    <div className="p-4">
      <p className="my-3">Are you sure you want to delete {selectedBook.title} by {selectedBook.author}?</p>
      <button
        className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={handleSubmit}
      >
        Delete
      </button>
    </div>
  </>
  )
}