import { tokenService} from "../tokenServices";

export const authService = {
    async login(prop: { username: string, password: string }): Promise<void> {
        return fetch(`//localhost:4000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: prop.username,
                password: prop.password,
            })
        }).then(async (respose) => {
            if (!respose.ok) throw new Error('Usuario invalido')
            const body = await respose.json()
            console.log(body.data.access_token);
            tokenService.save(body.data.access_token)
        })
        
    }
}

