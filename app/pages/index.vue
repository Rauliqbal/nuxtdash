<script setup lang="ts">
import Button from '~/component/ui/Button.vue';

</script>

<template>
  <div class="container mt-40 pb-10">
    <h1 class="text-4xl lg:text-6xl text-center font-semibold max-w-4xl mx-auto">The website builder you're looking for</h1>
    <p class="text-center max-w-3xl mx-auto mt-8 text-gray-500 text-lg">Simple is a modern website builder powered by AI that changes how companies create user interfaces together.</p>
    <div class="flex justify-center gap-4 mt-8">
      <Button>Start free trial</Button>
      <Button variant="secondary">Learn More</Button>
    </div>

    <div class="mt-16 max-w-3xl mx-auto rounded-2xl overflow-hidden aspect-video shadow-2xl">
      <img  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    </div>
  </div>
</template>