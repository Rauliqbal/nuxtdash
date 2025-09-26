<script setup lang="ts">
import MainNavbar from '~/component/MainNavbar.vue';


</script>

<template>
  <div>
    <MainNavbar/>
    <main>
      <slot />
    </main>
  </div>
</template>
