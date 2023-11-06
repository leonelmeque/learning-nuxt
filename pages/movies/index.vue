<script lang="ts" setup>

   import {useClient} from "~/lib/api/config";

   const client = useClient()

   const query = ref("")
   const movies = ref<any>([])
   async function search(){
    const data = await client.get<{name: string}>(`&s=${query.value}`)
    movies.value = data.Search
    console.log(data)
   }
</script>

<template>
  <div>
    Page: Movies
  </div>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title" width="100" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
