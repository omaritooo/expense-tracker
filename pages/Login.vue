<template>
  <main
    class="flex flex-col-reverse items-center justify-between w-full min-h-screen p-6 align-middle bg-gray-200 lg:w-screen lg:h-screen lg:flex-row justify-items-center"
  >
    <!-- <component :is -->
    <!-- <lazy-auth-login /> -->
    <div
      class="relative flex flex-col items-center justify-center w-full h-full align-middle lg:w-1/2"
    >
      <Transition name="slide-up">
        <div class="lg:absolute" v-if="authStatus">
          <LazyAuthLogin />
        </div>
        <div class="lg:absolute" v-else-if="!authStatus">
          <LazyAuthRegister />
        </div>
      </Transition>
      <span class="mt-auto">
        {{ authStatus ? "Already a user?" : "New user?" }}
        <button @click="authStatus = !authStatus">
          {{ authStatus ? "Login now." : "Register now!" }}
        </button>
      </span>
    </div>
    <div
      class="w-full rounded-sm h-28 lg:h-full lg:w-1/2 min-h-28 bg-purple-950"
    ></div>
    <Toaster />
  </main>
</template>

<script lang="ts" setup>
const Login = resolveComponent("LazyAuthLogin");
const Register = resolveComponent("LazyAuthRegister");
const authStatus = ref<boolean>(true);
const activeComponent = ref(authStatus ? Register : Login);

// const activeComponent = computed(() => {
//   return authStatus ? Register : Login;
// });
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
