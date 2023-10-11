import { useState } from "react"
import { useModalStore } from "@/store/modal"
import useCreateBook from "@/hooks/useCreateBook"

export default function CreateBook() {
  const [data, setData] = useState({
    title: "",
    author: "",
    genre: "",
    publishedDate: "",
  })
  const setOpen = useModalStore((state) => state.setOpen)
  const createBookMutation = useCreateBook(data)

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBookMutation.mutate();
    setOpen("");
  }

  return (
  <>
    <div className="flex p-4">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="my-3">
          <label>Title</label>
          <input 
            type="text" 
            name="title"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            placeholder="Title"
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="my-3">
          <label>Author</label>
          <input 
            type="text" 
            name="author"
            className="w-full mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            placeholder="Author"
            onChange={handleChange}  
            required
          />
        </div>
        <div className="my-3">
          <label>Genre</label>
          <select
            name="genre" 
            className="w-full mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            onChange={handleChange}
            defaultValue=""
            required 
          >
            <option value="" disabled hidden>Genre</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        <div className="my-3">
          <label>Date Published</label>
          <input 
            type="date" 
            name="publishedDate"
            className="w-full mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            placeholder="Date Published" 
            onChange={handleChange} 
            required
          />
        </div>
        <div className="my-3">
          <button 
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </>  
  )
}