<script setup>
useHead({
  title: "Login",
})
</script>

<template>
  <div class="grid grid-cols-2 items-center">
      <div class="px-4">
        <div class="mx-auto max-w-sm ">
          <h4 class="text-4xl font-bold">Reset Password</h4>
          <p class="paragraph mt-4">Send your email for reset password</p>

          <form class="mt-8" action="" method="post">
            <div>
              <label>
                <span class="text-sm font-medium text-gray-700">Email</span>
                <Input name="login" class="bg-white" placeholder="email address" />
              </label>
            </div>
           
            <hr class="my-4">

            <Button class=" w-full">
              <VsxIcon iconName="LoginCurve" :size="24" type="linear" />
              Sign in
            </Button>
            <Button class="mt-3 w-full" variant="outline">
              <VsxIcon iconName="MessageSearch" :size="24" type="linear" />
              Contact Support
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
