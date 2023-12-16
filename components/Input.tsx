import React, {FormEvent} from "react";

interface InputProps{
    label: string,
    setTexto: (texto: string)=>void,
}

function Input({ label, setTexto }: InputProps) {
    // const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')
    // const [isLogged, setIsLogged] = useState(false)

    // function fazerLogin(event: FormEvent) {
    //     if (texto === '') {
    //         console.log('coloque alguma coisa no input')
    //     }

    //     // setIsLogged(true)
    //     // setLogin('')
    //     // alert('input com sucesso')
    // }

    function imprimirValor(valor: string) {
        setTexto(valor)
    }

    return (
        <div>
            {label}
            <div className="flex items-center justify-center mt-2">
            <input
                type="text"
                onChange={event=>imprimirValor(event.target.value)}
                //onChange={event=>setTexto(event.target.value)}
                className='w-96 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 outline-white bg-transparent py-4 px-3 border-2 border-white rounded-lg'
            />
        </div>
        </div>
    )
}

export default Input