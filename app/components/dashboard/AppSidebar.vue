<script setup>
import { ref } from 'vue'

const props = defineProps(['sidebarOpen'])
const route = useRoute()

const openDropdown = ref(null)

const toggleDropdown = (title) => {
  openDropdown.value = openDropdown.value === title ? null : title
}

const menus = [
  {
    name: "overview",
    menu: [
      { title: "Home", link: "/", icon: "Home" },
      { title: "Analytics", link: "/analytics", icon: "ChartSquare" },
      { title: "Profiles", link: "/profile", icon: "UserSquare" },
      {
        title: "Forms",
        icon: "TableDocument",
        sublink: [
          { title: "Form Element", link: "/form-element" },
          { title: "Form layout", link: "/form-layout" }
        ]
      },
      {
        title: "Pages",
        icon: "Notepad2",
        sublink: [
          { title: "404 Error", link: "/404-error" },
          { title: "500 Error", link: "/500-error" },
          { title: "503 Error", link: "/503-error" }

        ]
      },
    ],
  },
  {
    name: "settings",
    menu: [
      { title: "Security", link: "/security", icon: "Shield" },
      { title: "Notifications", link: "/notifications", icon: "Notification" },
    ],
  },
];
</script>

<template>
  <aside :class="[
    'fixed md:static z-40 inset-y-0 left-0 w-64 bg-white border-r border-gray-300 md:translate-x-0 transform transition-transform duration-200',
    sidebarOpen ? 'translate-x-0' : '-translate-x-full',
  ]">
    <div class="flex items-center justify-between p-4">
      <img class="h-10 mx-auto" src="~/assets/images/logo-nuxtdash.svg" alt="logo" />
      <button class="md:hidden" @click="$emit('closeSidebar')">
        <i class="lucide lucide-x w-5 h-5"></i>
      </button>
    </div>

    <div class="mt-6 px-4 overflow-y-auto h-[calc(100vh-80px)]">
      <div v-for="(section, index) in menus" :key="index" class="mb-6">
        <h3 class="text-xs tracking-wider font-semibold text-gray-400 uppercase mb-3 px-4">
          {{ section.name }}
        </h3>

        <div class="flex flex-col space-y-1">
          <div v-for="item in section.menu" :key="item.title">

            <template v-if="item.sublink">
              <button @click="toggleDropdown(item.title)" :class="[
                'w-full flex items-center justify-between px-4 py-2.5 text-gray-700 rounded-md hover:bg-gray-100 transition-colors',
                openDropdown === item.title ? 'bg-gray-50' : 'bg-transparent'
              ]">
                <div class="flex items-center">
                  <VsxIcon :iconName="item.icon" :size="20" color="#5584FF" type="bulk" class="mr-3" />
                  <span class="text-sm font-medium">{{ item.title }}</span>
                </div>
                <VsxIcon iconName="ArrowDown2" :size="32" color="#5584FF" type="linear" :class="[
                  'w-4 h-4 transition-all duration-200',
                  openDropdown === item.title ? 'rotate-180': ''
                ]" />
               
              </button>

              <div v-show="openDropdown === item.title" class="mt-1 ml-9 flex flex-col space-y-1">
                <NuxtLink v-for="sub in item.sublink" :key="sub.link" :to="sub.link" :class="[
                  'block px-4 py-2 text-sm rounded-md transition-colors',
                  route.path === sub.link ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                ]">
                  {{ sub.title }}
                </NuxtLink>
              </div>
            </template>

            <NuxtLink v-else :to="item.link" :class="[
              'flex items-center px-4 py-2.5 text-gray-700 rounded-md hover:bg-gray-100 transition-colors',
              route.path == item.link ? 'bg-blue-50 text-blue-600 font-semibold border-r-4 border-blue-500' : 'bg-transparent'
            ]">
              <VsxIcon :iconName="item.icon" :size="20" color="#5584FF" type="bulk" class="mr-3" />
              <span class="text-sm font-medium">{{ item.title }}</span>
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
  </aside>
</template>