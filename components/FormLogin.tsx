'use client'

import React, {useState, useEffect} from 'react'
import Input from './Input'
import Button from './Button'
import { RiLogoutBoxLine } from "react-icons/ri";
import FormLayout from '../layout/formLayout';

function FormLogin() {
    const [login, setLoggin] = useState('') 
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(login)
        console.log(password)
    }, [login, password])

    function fazerLogin() {
        if (login === '' || password === '') {
            alert('preencha todos os campos')
        } else {
            alert('login realizado com sucesso')
        }
    }

    return (
        <FormLayout>
            <Input label='Usuário' setTexto={setLoggin}/>
            <Input label='Senha' setTexto={setPassword} />

                <div className='py-2 px-3 w-full'>
                    <Button
                        type='Login'
                    icon={<RiLogoutBoxLine />}
                    color='#7209B7'
                    onclick={fazerLogin}
                    >
                        Login
                    </Button>
                </div>
                <p>Não tem uma conta? <a className='text-[#4361EE]' href='/cadastro'>Crie uma agora</a></p>
        </FormLayout>
    )
}

export default FormLogin