<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    :type="type || 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
    class="border bg-primary/5 rounded-xl px-4 py-3 w-full  outline-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all ease-out"
  />
</template>
