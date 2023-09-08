const ACCESS_TOKEN_KEY = 'access_token';

export const tokenServices = {
    /* TOKEN DE ACESSO */
    save(props: { accessToken: string }) {
        localStorage.setItem(ACCESS_TOKEN_KEY, props.accessToken);
        sessionStorage.setItem(ACCESS_TOKEN_KEY, props.accessToken);
    },
    get() {
        return sessionStorage.getItem(ACCESS_TOKEN_KEY);
    },
    delete() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    },
};







