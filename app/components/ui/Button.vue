<script setup lang="ts">
const props = defineProps<{
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}>();

const baseClass =
  "inline-flex items-center justify-center  rounded-lg px-4 py-3 font-medium transition-all ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

const variantClass = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400";
    case "outline":
      return "border border-gray-300 text-gray-700 hover:bg-gray-200 focus:ring-gray-300";
    case "ghost":
      return "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200";
    default: // primary
      return "bg-primary text-white hover:bg-blue-700 focus:ring-primary";
  }
});
</script>

<template>
  <!-- Mode NuxtLink -->
  <NuxtLink v-if="to" :to="to" :class="[baseClass, variantClass]">
    <span class="inline-flex items-center gap-2">
      <slot name="icon" />
      <slot />
    </span>
  </NuxtLink>

  <!-- Mode Button -->
  <button
    v-else
    :type="type || 'button'"
    :disabled="disabled"
    :class="[baseClass, variantClass]"
  >
    <span class="inline-flex items-center gap-2">
      <slot name="icon" />
      <slot />
    </span>
  </button>
</template>
