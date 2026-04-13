<script setup>
</script>

<template>
 <header class="flex items-center justify-between p-4 bg-white border-b border-gray-300">
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
</template>