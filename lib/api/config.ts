export const useClient = () => {
    const config = useRuntimeConfig()
    // const API_URL = `http://www.omdbapi.com/?i=${API_I}&apikey=${API_KEY}`

    const fetcher = (method: 'GET' | 'PUT' | 'POST' | 'DELETE') => {
        const headers = {
            'Content-Type': 'application/json',
        }

        return <T>(path: string, options: Omit<RequestInit, 'method'> ) => $fetch<T>(`${config.public.apiBase}${path}`, { headers, ...options, method })
            .then(async (res) => {
                const data = await res.json()
                if (res.ok) {
                    return data
                } else {
                    return Promise.reject(data)
                }
            })
    }

    return {
        get: fetcher('GET'),
        post: fetcher('POST'),
        put: fetcher('PUT'),
        delete: fetcher('DELETE')
    }
}