<script setup>
useHead({
  title: "Register",
})
</script>

<template>
  <div class="grid grid-cols-2 items-center">
      <div class="px-4">
        <div class="mx-auto max-w-sm ">
          <h4 class="text-4xl font-bold">Sign Up</h4>
          <p class="paragraph mt-4">Get started with us</p>

          <form class="mt-8" action="" method="post">
            <div>
              <label>
                <span class="text-sm font-medium text-gray-700">Full name</span>
                <Input name="login" class="bg-white" placeholder="email address" />
              </label>
            </div>

            <div class="mt-4">
              <label>
                <span class="text-sm font-medium text-gray-700">Email</span>
                <Input name="login" class="bg-white" placeholder="example@gmail.com" />
              </label>
            </div>

            <div class="mt-4">
              <label>
                <span class="text-sm font-medium text-gray-700">Phone</span>
                <Input name="login" class="bg-white" placeholder="+62 897 9988 902" />
              </label>
            </div>

            <div class="my-4">
              <label>
                <span class="text-sm font-medium text-gray-700">Password</span>
                <Input name="login" class="bg-white" placeholder="••••••" />
              </label>
            </div>


            <hr class="my-4">

            <div class="flex flex-col items-center">
              <Button class=" w-full">
              <VsxIcon iconName="LoginCurve" :size="24" type="linear" />
              Register
            </Button>
            <span class="italic text-gray-400 my-3 text-sm">Or</span>
            <Button class="w-full" variant="secondary">
              <VsxIcon iconName="Google" :size="24"  type="linear" />
              Continue with Google
            </Button>
            </div>
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
