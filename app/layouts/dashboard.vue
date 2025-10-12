<script setup lang="ts">
const sidebarOpen = ref(false);
</script>

<template>
  <div class="flex min-h-screen bg-white text-gray-900">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed md:static z-40 inset-y-0 left-0 w-64 bg-white  md:translate-x-0 transform transition-transform duration-200',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div class="flex items-center justify-between p-4">
        <!-- Logo -->
        <img src="~/assets/images/logo-nuxtdash.svg" alt="logo nuxtdash" />
        <button class="md:hidden" @click="sidebarOpen = false">
          <i class="lucide lucide-x w-5 h-5"></i>
        </button>
      </div>
      <nav class="p-4 space-y-2">
        <NuxtLink
          to="/dashboard"
          class="block rounded-lg px-4 py-3 hover:bg-gray-100 transition"
          active-class="bg-gray-200 font-semibold"
        >
          Home
        </NuxtLink>
      </nav>
    </aside>

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
      <header class="flex items-center justify-between p-4 bg-white">
        <button class="md:hidden" @click="sidebarOpen = true">
          <VsxIcon
            iconName="HambergerMenu"
            :size="32"
            color="#5584FF"
            type="bulk"
          />
        </button>
        <h2 class="text-lg font-semibold">Dashboard</h2>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">Hi, Admin</span>
          <button class="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
            <i class="lucide lucide-user w-5 h-5"></i>
          </button>
        </div>
      </header>

      <!-- Content slot -->
      <main class="flex-1 p-6 container">
        <slot />
      </main>
    </div>
  </div>
</template>
