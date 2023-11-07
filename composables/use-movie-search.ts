import { useClient } from '~/lib/api/config'

export type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieSearch = () => {
  const client = useClient()

  const query = ref('')
  const movies = ref<any>([])

  async function search() {
    const data = await client.get<{ Search: Movie[] }>(`&s=${query.value}`)
    movies.value = data.Search
  }

  return {
    query,
    movies,
    search,
  }
}
