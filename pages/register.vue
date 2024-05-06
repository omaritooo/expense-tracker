<template>
  <main
    class="flex items-center w-screen h-screen bg-gray-200 justify-items-center"
  >
    <div
      class="flex flex-col self-center max-w-4xl p-6 mx-auto bg-white gap-y-4"
    >
      <button>Facebook</button>
      <button>Google</button>
      <button @click="signUp">Login</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Input } from "@/components/ui/input";
const config = useRuntimeConfig();
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
console.log(config.public.KEY);

const signUp = async () => {
  try {
    // const { data, error } = await client.auth.signUp({
    //   email: email.value,
    //   password: password.value,
    // });
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "facebook",
    });
    if (error) throw error;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
