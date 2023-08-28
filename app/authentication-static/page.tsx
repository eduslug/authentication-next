import React from 'react'

function AuthenticationStatic({ value }: any) {
    return (
        <>
            <h1>
                Auth Page
            </h1>
            <pre>
                {JSON.stringify(value, null, 4)}
            </pre>
        </>
    )
}

export default AuthenticationStatic