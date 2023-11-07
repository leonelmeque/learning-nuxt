<script lang="ts" setup>
  import { useMovieSearch } from '~/composables/use-movie-search'

  const { search, query, movies } = useMovieSearch()
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