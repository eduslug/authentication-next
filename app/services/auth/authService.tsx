


export const authService = {
    async login(prop: { username: string, password: string }): Promise<void> {
        return fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: prop.username,
                password: prop.password,
            })
        })
            .then(async (respose) => {
                if (!respose.ok) throw new Error('Usuario invalido')
                console.log(respose)
                const body = await respose.json()
                console.log(body);
            })
    }
}

