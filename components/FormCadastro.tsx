
import React from 'react'
import InputLogin from './InputLogin'
import Button from './Button'
import { RiLogoutBoxLine } from "react-icons/ri";
import FormLayout from '../layout/formLayout';

 function FormCadastro(){
    return (
        <FormLayout>
            <InputLogin label='Usuário' />
            <InputLogin label='Senha' />
            <InputLogin label='Repetir senha' />
            
            <div className='w-full '>
                <Button
                    type='Cadastro'
                    icon={<RiLogoutBoxLine />}
                    color='#7209B7'
                >
                    Criar Conta
                </Button>
            </div>
            <p>Já tem uma conta? <a className='text-[#4361EE]' href='/login'>Entre aqui</a></p>
        </FormLayout>
    )
}

export default FormCadastro