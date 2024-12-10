import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import FormElement from './FormElement'

const PreviewModal = ({ onClose }) => {
  const { editorElements } = useSelector((state) => state.global)
  const [isSubmitted, setIsSubmitted] = useState(false)
  

  const handleSubmit = () => {
   
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000) 
  }

  return (
    <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col z-40">
      <div className="w-[90%] max-w-5xl h-[90%] bg-white m-auto shadow-xl rounded-xl flex flex-col p-2">
        <div className="flex justify-end">
          <button className="text-2xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col flex-1">
          {editorElements.map((element) => (
            <FormElement key={element.id} {...element} />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-100"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {isSubmitted && (
          <div className="mt-4 text-center text-green-600">
            Submit Successful!
          </div>
        )}
      </div>
    </div>
  )
}

export default PreviewModal
