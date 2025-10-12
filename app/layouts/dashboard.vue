<script setup lang="ts"></script>

<template>
  <div>
    <!-- Sidebar -->
    test
    <!-- Content -->
    <div class="flex flex-col flex-1">
      <main>
        <div class="max-w-[1536px] mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
