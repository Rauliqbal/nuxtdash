<template>
  <SidebarProvider>
    <AppSidebar />
   <div class="flex flex-col flex-1">
     <SidebarTrigger />
     <main>
      <div class="max-w-[1536px] mx-auto">
        <slot />
      </div>
    </main>
   </div>
  </SidebarProvider>
</template>
