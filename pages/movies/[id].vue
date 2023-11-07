<script setup>
  import { useClient } from '~/lib/api/config'

  const { params } = useRoute()

  const { data, error } = useAsyncData(`movie:${params.id}`, () => {
    const client = useClient()
    return client.get(`&i=${params.id}`)
  })

  console.log(error.value)
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>