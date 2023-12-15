
import React from 'react'
import LogginGoogle from '../components/LogginGoogle'
interface FormLayoutProps{
    children: React.ReactNode
}

function FormLayout({children}:FormLayoutProps){
    return (
        <div className='w-[500px] bg-[#161616] flex flex-col justify-center items-center rounded-xl p-3'>
            <div className='px-8 py-4 mt-4 h-full w-full flex flex-col items-center justify-center gap-2'>
                <LogginGoogle/>
                {children}
            </div>
            
        </div>
    )
}

export default FormLayout