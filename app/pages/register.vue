<script setup lang="ts">
useHead({
  title: "Register",
});
definePageMeta({
  layout: false
})
</script>

<template>
  <div class="grid grid-cols-2 items-center">
    <div class="px-4">
      <div class="mx-auto max-w-sm">
        <h4 class="text-4xl font-bold">Sign Up</h4>
        <p class="paragraph mt-2">Get started with us</p>

        <form class="mt-6" action="" method="post">
          <!-- Input Name -->
          <div>
            <label>
              <span class="text-sm font-medium text-gray-700">Full name</span>
              <UiInput type="text" placeholder="email address" />
            </label>
          </div>
          <!-- Input Email -->
          <div class="mt-4">
            <label>
              <span class="text-sm font-medium text-gray-700">Email</span>
              <UiInput type="text" placeholder="example@gmail.com" />
            </label>
          </div>
          <!-- Input Phone -->
          <div class="mt-4">
            <label>
              <span class="text-sm font-medium text-gray-700">Phone</span>
              <UiInput type="text" placeholder="+62 897 9988 902" />
            </label>
          </div>
          <!-- Input Password -->
          <div class="mt-4">
            <label>
              <span class="text-sm font-medium text-gray-700">Password</span>
              <UiInput type="text" placeholder="••••••" />
            </label>
          </div>

          <div class="mt-4 flex gap-4 flex-col">
            <!-- Button Submit -->
            <UiButton variant="primary">
              <template #icon>
                <VsxIcon iconName="LoginCurve" :size="24" type="linear" />
              </template>
              Sign up
            </UiButton>
            <div class="my-1 bg-gray-300 w-full h-[1px]"></div>
            <!-- Login Google -->
            <UiButton class="w-full" variant="outline">
              <img class="w-6" src="~/assets/images/ic-google.svg" />
              Continue with Google
            </UiButton>
          </div>

        </form>
      </div>
    </div>
    <div class="h-screen p-4">
      <div class="h-full bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl overflow-hidden p-10">
        <img class="h-full object-cover" src="~/assets/images/ilus-register.svg" alt="Ilustration Login" />
      </div>
    </div>
  </div>
</template>
