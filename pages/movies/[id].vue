<script setup>
  const { params } = useRoute()

  const { movie } = await useGetMovieById(params.id)

  useHead({
    title: movie.value.Title,
    meta: [
      { name: 'description', content: movie.value.Plot },
      { property: 'og:description', content: movie.value.Plot },
      { property: 'og:image', content: movie.value.Poster },
      { name: 'twitter:card', content: `summary_large_image` },
    ],
  })
</script>

<template>
  <div>
    <pre>{{ movie }}</pre>
  </div>
</template>
