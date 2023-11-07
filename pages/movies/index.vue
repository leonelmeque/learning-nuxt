<script lang="ts" setup>
  import { useClient } from '~/lib/api/config'

  type Movie = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
  }

  const client = useClient()

  const query = ref('')
  const movies = ref<any>([])

  async function search() {
    const data = await client.get<{ Search: Movie[] }>(`&s=${query.value}`)
    movies.value = data.Search
    console.log(data)
  }
</script>

<template>
  <div>Page: Movies</div>
  <form @submit.prevent="search">
    <input v-model="query" type="text" />
    <button>Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink
        :to="{
          name: 'movies-id',
          params: { id: movie.imdbID },
        }"
      >
        <img :alt="movie.title" :src="movie.Poster" width="100" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>