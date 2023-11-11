<script setup>
  useHead({
    title: 'My Movie App',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - My Movie App` : 'My Movie App'
    },
  })
</script>
<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
