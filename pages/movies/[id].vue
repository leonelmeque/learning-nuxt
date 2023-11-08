<script setup>
  import { useCustomFetch } from '~/lib/api/config'

  const { params } = useRoute()

  const { data, error } = await useCustomFetch(`&i=${params.id}`, {
    pick: ['Title', 'Plot', 'Error'],
    key: `movie:${params.id}`,
  })

  if (data.value.Error === 'Incorrect IMDb ID.') {
    showError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    })
  }
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
