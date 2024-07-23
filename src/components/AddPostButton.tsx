"use client";

import { useFormStatus } from "react-dom";

const AddPostButton = () => {
    const { pending } = useFormStatus()
    return (
        <button className="bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-blue-300 disabled:cursor-not-allowed" disabled={pending} >{
            pending ? (
                <div className="flex items-center gap-2">
                    {/* Spinner */}
                    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    Sending
  </svg>
                </div>
            ) : "Send"
        }</button>
    )
}

export default AddPostButton