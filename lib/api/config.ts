import type { UseFetchOptions } from 'nuxt/app'

export const useClient = () => {
  const config = useRuntimeConfig()

  const fetcher = (method: 'GET' | 'PUT' | 'POST' | 'DELETE') => {
    return <T>(path: string, options?: Omit<RequestInit, 'method'>) =>
      $fetch<T>(`${config.public.apiBase}${path}`, {
        ...options,
        method,
      })
  }

  return {
    get: fetcher('GET'),
    post: fetcher('POST'),
    put: fetcher('PUT'),
    delete: fetcher('DELETE'),
  }
}

export const useCustomFetch = async (
  path: string,
  options: UseFetchOptions<unknown>,
) => {
  const config = useRuntimeConfig()

  return await useFetch(`${config.public.apiBase}${path}`, options)
}
