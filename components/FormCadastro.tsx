'use client'

import React, {useState, useEffect} from 'react'
import Input from './Input'
import Button from './Button'
import { RiLogoutBoxLine } from "react-icons/ri";
import FormLayout from '../layout/formLayout';

function FormCadastro() {
    const [cadastro, setCadastro] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(cadastro)
        console.log(password)
    }, [cadastro, password])

    function fazerCadastro() {
        console.log("top")
        if (cadastro === '' || password === '') {
            alert('preencha todos os campos')
        } else {
            alert('cadastro realizado com sucesso')
        }
    }

    return (
        <FormLayout>
            <Input label='Usuário' setTexto={setCadastro}/>
            <Input label='Senha' setTexto={setPassword} />
            <Input label='Repetir senha' setTexto={setPassword}/>
            
            <div className='w-full '>
                <Button
                    type='Cadastro'
                    icon={<RiLogoutBoxLine />}
                    color='#7209B7'
                    onclick={fazerCadastro}
                >
                    Criar Conta
                </Button>
            </div>
            <p>Já tem uma conta? <a className='text-[#4361EE]' href='/login'>Entre aqui</a></p>
        </FormLayout>
    )
}

export default FormCadastro