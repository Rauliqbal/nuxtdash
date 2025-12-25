<script setup lang="ts">
const sidebarOpen = ref(false);
</script>

<template>
  <div class="flex min-h-screen bg-white text-gray-900">
    <!-- Sidebar -->
    <DashboardAppSidebar/>

    <!-- Overlay untuk mobile -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/40 z-30 md:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Content -->
    <!-- Main content -->
    <div class="flex-1 flex flex-col bg-[#f1f1f1]">
      <!-- Topbar -->
      <DashboardAppHeader/>

      <!-- Content slot -->
      <main class="flex-1 p-6 container">
        <slot />
      </main>
    </div>
  </div>
</template>
