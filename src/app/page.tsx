'use client'

import Image from 'next/image'
import { redirect } from 'next/navigation'
import Button from '../../components/Button'
import { RiLogoutBoxLine } from "react-icons/ri";
import Link from "next/link";

export default function Home() {

  const user = 'Marcos Paulo'
  const onclick2 = (type: string) => {
    console.log('2')
    if (type == 'Login') {
        alert('Você fez o login')
    } else if (type == 'Cadastro') {
        alert('Você fez o cadastro')
    } else {
        alert('Desconectou-se')
    }
  }

  if (user) {
    return (
      <main className='flex justify-center items-center w-full min-h-[100vh]'>
        <section className='flex flex-col gap-3 w-[50%] h-[50%] m-auto'>
          <div>
            <Image 
              alt="logo aracomp"
              src={'/assets/logo.svg'}
              width={720}
              height={420}
              />
          </div>
          <div className='flex flex-col items-center'>
            <p>Parabéns<span className='text-[#4361EE] ml-2'>{user}</span></p>
            <p>Login feito com sucesso</p>
          </div>
          <Button
            type='Logout'
            icon={<RiLogoutBoxLine />}
            color='#F72585'
            onclick={()=>onclick2}
          >
            <Link href={'/login'}>
              Sair da conta
            </Link>

          </Button>
          
        </section>
      </main>
    )
  }
  else {
    redirect('/login')
  }
}
