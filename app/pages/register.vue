<script setup>
import Button from "~/component/ui/Button.vue";
import Input from "~/component/ui/Input.vue";

useHead({
  title: "Register",
});
</script>

<template>
  <div class="grid grid-cols-2 items-center">
    <div class="px-4">
      <div class="mx-auto max-w-sm">
        <h4 class="text-4xl font-bold">Sign Up</h4>
        <p class="paragraph mt-4">Get started with us</p>

        <form class="mt-8" action="" method="post">
          <!-- Input Name -->
          <div>
            <label>
              <span class="text-sm font-medium text-gray-700">Full name</span>
              <Input type="text" placeholder="email address" />
            </label>
          </div>
          <!-- Input Email -->
          <div class="mt-4">
            <label>
              <span class="text-sm font-medium text-gray-700">Email</span>
              <Input type="text" placeholder="example@gmail.com" />
            </label>
          </div>
          <!-- Input Phone -->
          <div class="mt-4">
            <label>
              <span class="text-sm font-medium text-gray-700">Phone</span>
              <Input type="text" placeholder="+62 897 9988 902" />
            </label>
          </div>
          <!-- Input Password -->
          <div class="mt-4">
            <label>
              <span class="text-sm font-medium text-gray-700">Password</span>
              <Input name="login" placeholder="••••••" />
            </label>
          </div>

          <div class="mt-4">
            <!-- Button Submit -->
            <Button variant="primary" class="w-full">
              <template #icon>
                <VsxIcon iconName="LoginCurve" :size="24" type="linear" />
              </template>
              Sign up
            </Button>
            <!-- Button Customer Support -->
            <Button class="mt-3 w-full" to="#" variant="outline">
              <VsxIcon iconName="MessageSearch" :size="24" type="linear" />
              Contact Support
            </Button>
          </div>
          <div class="my-6 bg-gray-300 w-full h-[1px]"></div>

          <!-- Login Google -->
          <Button class="w-full" variant="outline">
            <VsxIcon iconName="Google" :size="24" type="linear" />
            Login with Google
          </Button>
        </form>
      </div>
    </div>
    <div class="h-screen overflow-hidden rounded-2xl">
      <img
        class="h-full object-cover"
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  </div>
</template>
