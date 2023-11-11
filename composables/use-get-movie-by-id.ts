import { useCustomFetch } from '~/lib/api/config'

export const useGetMovieById = async (id: string) => {
  const { data } = await useCustomFetch(`&i=${id}`, {
    pick: ['Title', 'Plot', 'Poster', 'Error'],
    key: `movie:${id}`,
  })

  if (data.value?.Error === 'Incorrect IMDb ID.') {
    showError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    })
  }

  return {
    movie: data,
  }
}
