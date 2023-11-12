<script setup>
  import { useIsLoggedIn } from '~/composables/use-is-logged-in'

  const isLoggedIn = useIsLoggedIn()

  function login() {
    isLoggedIn.value = true
    useRouter().push('/')
  }

  definePageMeta({
    layout: 'plain',
  })
</script>

<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <label for=""
      >Username
      <input type="text" />
    </label>
    <label for="">
      Password
      <input type="text" />
    </label>
    <button>Submit</button>
  </form>
</template>
