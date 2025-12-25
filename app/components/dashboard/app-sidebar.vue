<script setup>
const menus = [
  {
    name: "overview",
    menu: [
      { title: "Home", link: "/dashboard", icon: "Home" },
      { title: "Analytics", link: "/dashboard/analytics", icon: "ChartSquare" },
      { title: "Sales", link: "/dashboard/sales", icon: "DollarSquare" },
    ],
  },
  {
    name: "settings",
    menu: [
      { title: "Profile", link: "/dashboard/profile", icon: "User" },
      { title: "Security", link: "/dashboard/security", icon: "Shield" },
      {
        title: "Notifications",
        link: "/dashboard/notifications",
        icon: "Notification",
      },
    ],
  },
];
</script>

<template>
  <aside
      :class="[
        'fixed md:static z-40 inset-y-0 left-0 w-64 bg-white border-r border-gray-300 md:translate-x-0 transform transition-transform duration-200',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div class="flex items-center justify-between p-4">
        <!-- Logo -->
        <img class="h-10 mx-auto" src="~/assets/images/logo-nuxtdash.svg" alt="logo nuxtdash" />
        <button class="md:hidden" @click="sidebarOpen = false">
          <i class="lucide lucide-x w-5 h-5"></i>
        </button>
      </div>

      <div class="mt-6 px-4">
        <div v-for="(section, index) in menus" :key="index" class="mb-6">
          <h3 class="text-xs tracking-wider font-semibold text-gray-400 uppercase mb-3">
            {{ section.name }}
          </h3>
          <div class="flex flex-col space-y-2">
           <NuxtLink
                v-for="item in section.menu"
                :key="item"
                :to="item.link"
                class="flex items-center px-4 py-2.5  text-gray-700 rounded-md hover:bg-gray-100"
              >
                <VsxIcon
                  :iconName="item.icon"
                  :size="24"
                  color="#5584FF"
                  type="bulk"
                  class="mr-3"
                />
                <span>{{ item.title }}</span>
              </NuxtLink>
          </div>
        </div>
      </div>
    </aside>
</template>
