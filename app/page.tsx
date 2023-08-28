"use client"; // This is a client component 

import React, { useState } from "react"
import { useRouter } from 'next/navigation'


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
    <>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        router.push('/authentication-user');
        router.push('/authentication-static');
      }}>
        <input
          type="text"
          name="usuario"
          value={value.usuario}
          placeholder="usuario"
          onChange={handleChange}
        />
        <pre>
          {JSON.stringify(value, null, 4)}
        </pre>
        <input
          type="password"
          name="senha"
          value={value.senha}
          placeholder="senha"
          onChange={handleChange}
        />
        <div>
          <button
            type="button"
            onClick={() => router.push('/authentication-user')
            }>
            entrar
          </button>
        </div>
      </form>
    </>
  )
}
