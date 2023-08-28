import React from 'react'

function AuthrnticationUser({ value }: any) {
    return (
        <>
            <h1>
                user 
            </h1>
            <pre>
                {JSON.stringify(value, null, 4)}
            </pre>
        </>
    )
}

export default AuthrnticationUser