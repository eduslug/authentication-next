export async function HttpClient<T>(
  fetchUrl: string,
  fetchOptions: RequestInit
): Promise<{
  ok: boolean;
  status: number;
  statusText: string;
  body: T;
}> {
  const options: RequestInit = {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...(fetchOptions.headers || {}),
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };

  const respostaDoServidor = await fetch(fetchUrl, options);

  const responseBody: T = await respostaDoServidor.json();

  return {
    ok: respostaDoServidor.ok,
    status: respostaDoServidor.status,
    statusText: respostaDoServidor.statusText,
    body: responseBody,
  };
}
