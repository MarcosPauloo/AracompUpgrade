import React from "react";

interface InputProps{
    label: string
}

function InputLogin({label}:InputProps) {
    return (
        <div>
            {label}
            <div className="flex items-center justify-center mt-2">
            <input
                type="text"
               
                className='w-96 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 outline-white bg-transparent py-4 px-3 border-2 border-white rounded-lg'
            />
        </div>
        </div>
    )
}

export default InputLogin