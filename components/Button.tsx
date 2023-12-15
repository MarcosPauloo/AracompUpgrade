'use client'
import React from "react";
import { redirect } from 'next/navigation'
import Link from 'next/link'

interface ButtonProps{
    children: React.ReactNode,
    icon: React.ReactNode,
    type: 'Login' | 'Logout' | 'Cadastro',
    color: string
}

export default function Button({ children, icon, type, color }: ButtonProps) {
    const onclick = (type: string) => {
        if (type == 'Login') {
            alert('Você fez o login')
        } else if (type == 'Cadastro') {
            alert('Você fez o cadastro')
        } else {
            alert('Desconectou-se')
        }
    }
    //</div><div className="bg-[#F72585] h-12 m-3 rounded-md flex items-center justify-center ">
    return (
        <div className={`bg-[${color}] h-12 m-3 rounded-md flex items-center justify-center `}>
            
            <Link href="/" onClick={()=>onclick(type)}>
                <div className="text-blue font-semibold flex flex-row justify-center items-center gap-2">
                    {icon}
                    {children}
                </div>
            </Link>
        </div>
        // <button onClick={()=> onclick(type)} className="w-full bg-[#F72585] h-12 rounded-md">
        //     <div className="text-blue font-semibold flex flex-row justify-center items-center gap-2">
        //         {icon}
        //         {children}
        //     </div>
        // </button>
    )
}