import { useModalStore } from "@/store/modal"

export default function Modal({
  children,
  ...props
}: {
  children: React.ReactNode,
  modalTitle: string
}) {
  
  const setOpen = useModalStore((state) => state.setOpen)

  return (
  <>
    <div className="fixed w-screen h-screen bg-black bg-opacity-[0.5] z-50 top-0 left-0">
      <div className="relative w-3/4 bg-white rounded-md mx-auto mt-10 overflow-y-auto flex flex-col md:w-1/2 dark:bg-neutral-800">
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {props.modalTitle}
          </h3>
          <button 
            type="button" 
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setOpen("")}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>  
          </button>
        </div>
        
        {children}
      </div>
    </div>
  </>  
  )
}