import React from "react";
import Image from "next/image";
 
export default function LogginGoogle() {
    return (
        <div className="w-96 bg-transparent border-2 border-white rounded-lg py-3 px-3 mb-4">
            <div className="flex flex-row justify-center items-center gap-2">
                <Image
                    src={'/assets/google.svg'}
                    width={20}
                    height={20}
                    alt="Google"
                />
                <p className="font-bold">Login com o Google</p>
            </div>
        </div>
    )
}