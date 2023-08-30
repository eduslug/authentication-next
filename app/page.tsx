"use client"; // This is a client component 

import React, { useState } from "react"
import { useRouter } from 'next/navigation'
import { authService } from "./services/auth/authService";


export default function Home() {
  const router = useRouter()

  const [value, setValue] = useState({
    usuario: 'omariosouto',
    senha: 'safepassword'
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValue((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue
      }
    })
  }

  return (
    < >
      <form className="grid h-screen place-items-center" onSubmit={(event) => {
        event.preventDefault();

        authService
          .login({
            username: value.usuario,
            password: value.senha,
          })
          .then(() => {
            router.push('/authentication-static')
          })
          .catch(() => {
            alert('Usuario ou senha errada')
          })
      }}>
        <input className="text-black flex-initial w-40"
          type="text"
          name="usuario"
          value={value.usuario}
          placeholder="usuario"
          onChange={handleChange}



        />
        <pre>
          {JSON.stringify(value, null, 4)}

        </pre>
        <input className="text-black flex-initial w-40"
          type="password"
          name="senha"
          value={value.senha}
          placeholder="senha"
          onChange={handleChange}
        />
        <div>
          <button>
            entrar
          </button>
        </div>
      </form>
    </>
  )
}
