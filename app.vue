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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
