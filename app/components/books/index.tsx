"use client"

import useBooks from "@/hooks/useBooks"
import { useBookStore } from "@/store/book"
import { useModalStore } from "@/store/modal"
import formatDate from "@/utils/formatDate"
import { RxPencil2, RxTrash } from "react-icons/rx"

import Modal from "../modals"
import CreateBook from "../modals/CreateBook"
import UpdateBook from "../modals/UpdateBook"
import DeleteBook from "../modals/DeleteBook"

export default function Books() {
  const { data, isSuccess } = useBooks()
  const [ activeModal, setOpen ] = useModalStore((state) => [state.activeModal, state.setOpen])
  const setSelectedBook = useBookStore((state) => state.setSelectedBook)

  return (
    <div className="w-full rounded-lg bg-yellow-100 p-10 md:p-20">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">Books</h1>
        <button 
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={() => setOpen("createBook")}
        >
          Add a Book
        </button>
      </div>
      
      <div className="flex flex-col">
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm md:text-md">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Published</th>
            </tr>
          </thead>
          {
            isSuccess &&
            <tbody className="text-center">
              {data.map((book) => (
                <tr key={book.id} className="border-b border-gray-300">
                  <td className="py-3 px-2 md:px-0">{book.id}</td>
                  <td className="py-3 px-2 md:px-0">{book.title}</td>
                  <td className="py-3 px-2 md:px-0">{book.author}</td>
                  <td className="py-3 px-2 md:px-0">{book.genre}</td>
                  <td className="py-3 px-2 md:px-0">{formatDate(book.publishedDate)}</td>
                  <td className="py-3 px-2 md:px-0">
                    <button
                      onClick={() => {
                        setSelectedBook(book)
                        setOpen("updateBook")
                      }}
                    >
                      <RxPencil2 className="text-2xl mx-2" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBook(book)
                        setOpen("deleteBook")
                      }}
                    >
                      <RxTrash className="text-red-600 text-2xl mx-2" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
      </div>
      { activeModal === "createBook" && (
        <Modal modalTitle="Add a Book">
          <CreateBook />
        </Modal>
      )}
      { activeModal === "updateBook" && (
        <Modal modalTitle="Update">
          <UpdateBook />
        </Modal>
      )}
      { activeModal === "deleteBook" && (
        <Modal modalTitle="Delete">
          <DeleteBook />
        </Modal>
      )}
    </div>
  )
}