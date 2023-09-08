import React from 'react'

function AuthenticationStatic(props: { value: string }) {
    return (
        <>
            <div className="flex items-center gap-3" page-header-actions-single>
                <button>
                    Usuario
                </button>
                <button>
                    Ativar Usuário
                </button>

                <button>
                    Desativar Usuário
                </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
             </div>
        </>
    )
}

export default AuthenticationStatic