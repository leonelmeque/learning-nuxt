<script lang="ts" setup>
  import { useClient } from '~/lib/api/config'

  const { params } = useRoute()

  const { data } = useAsyncData(
    `movie:${params.id}`,
    () => {
      const client = useClient()
      return client.get(`&i=${params.id}`)
    },
    {
      pick: ['Plot', 'Title'],
    },
  )
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>