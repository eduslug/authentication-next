import React from 'react'

function AuthenticationStatic(props: { value: string }) {
    return (
        <>
            <h1 >
                Auth Page{}
            </h1>
            <pre>
                {JSON.stringify(props.value, null, 4)}
            </pre>
        </>
    )
}

export default AuthenticationStatic