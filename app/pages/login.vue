<script setup>
useHead({
  title: "Login",
});
</script>

<template>
  <div class="grid grid-cols-2 items-center">
    <div class="px-4">
      <div class="mx-auto max-w-sm">
        <h4 class="text-4xl font-bold">Sign In</h4>
        <p class="paragraph mt-4">Start managing your website</p>
        <form class="mt-8" method="post">
          <!-- Input Email -->
          <div>
            <label>
              <span class="text-sm font-medium text-gray-700">Email</span>
              <UiInput type="text" placeholder="Enter your emaill adress" />
            </label>
          </div>
          <!-- Input Password -->
          <div class="mt-4">
            <label>
              <span class="text-sm font-medium text-gray-700">Password</span>
              <UiInput type="text" placeholder="Enter your password" />
            </label>
          </div>

          <!-- Forgot Password -->
          <div class="mt-4">
            <NuxtLink
              to="/reset-password"
              class="text-gray-400 underline hover:text-gray-600 transition-all text-sm"
              >Forgot password</NuxtLink
            >
          </div>

          <div class="mt-4 flex gap-4 flex-col">
            <!-- Button Submit -->
            <UiButton variant="primary">
              <template #icon>
                <VsxIcon iconName="LoginCurve" :size="24" type="linear" />
              </template>
              Sign in
            </UiButton>
            <!-- Button Customer Support -->
            <UiButton to="#" variant="outline">
              <VsxIcon iconName="MessageSearch" :size="24" type="linear" />
              Contact Support
            </UiButton>
          </div>
          <div class="my-6 bg-gray-300 w-full h-[1px]"></div>

          <!-- Login Google -->
          <UiButton class="w-full" variant="outline">
            <img class="w-6" src="~/assets/images/ic-google.svg" />
            Login with Google
          </UiButton>
        </form>
      </div>
    </div>
    <div class="h-screen p-4">
      <div
        class="h-full bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl overflow-hidden p-10"
      >
        <img
          class="h-full object-cover"
          src="~/assets/images/ilus-login.svg"
          alt="Ilustration Login"
        />
      </div>
    </div>
  </div>
</template>
