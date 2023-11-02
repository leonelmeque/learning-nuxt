<script setup>
const route = useRoute()
const message = computed(()=>`I am on a team ${route.params.teamSlug} and my user id is ${route.params.userId}`)
</script>

<template>
  {{message}}
</template>