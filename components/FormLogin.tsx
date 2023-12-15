
import React from 'react'
import InputLogin from './InputLogin'
import Button from './Button'
import { RiLogoutBoxLine } from "react-icons/ri";
import FormLayout from '../layout/formLayout';

 function FormLogin(){
    return (
        <FormLayout>
            <InputLogin label='Usuário' />
                <InputLogin label='Senha' />

                <div className='py-2 px-3 w-full'>
                    <Button
                        type='Login'
                    icon={<RiLogoutBoxLine />}
                    color='#7209B7'
                    >
                        Login
                    </Button>
                </div>
                <p>Não tem uma conta? <a className='text-[#4361EE]' href='/cadastro'>Crie uma agora</a></p>
        </FormLayout>
    )
}

export default FormLogin