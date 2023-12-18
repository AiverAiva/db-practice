<template>
  <div>
    <Navbar/>
    <NuxtPage />
    <!-- <nuxt/> -->
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>