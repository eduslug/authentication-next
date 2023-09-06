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

  return (<div className="w-full max-w-xs ">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 align-content: center" onSubmit={(event) => {
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
      <label className="block text-gray-700 text-sm font-bold mb-2">Usuario</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        name="usuario"
        value={value.usuario}
        placeholder="usuario"
        onChange={handleChange}
      />
      {/* <pre>
          {JSON.stringify(value, null, 4)}

        </pre> */}
      <label className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        name="senha"
        value={value.senha}
        placeholder="senha"
        onChange={handleChange}
      />
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-8 rounded focus:outline-none focus:shadow-outline">
          entrar
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Esqueceu a senha?
        </a>
      </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2023 Acme Corp. All rights reserved.Eduardo
    </p>
  </div>
  )
}
