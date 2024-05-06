<template>
  <main
    class="flex items-center w-screen h-screen bg-gray-200 justify-items-center"
  >
    <div
      class="flex flex-col self-center max-w-4xl p-6 mx-auto bg-white gap-y-4"
    >
      <Input type="email" v-model="user.email" placeholder="Email" />
      <Input type="password" v-model="user.password" placeholder="****" />
      <button @click="signUp">Login</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Input } from "@/components/ui/input";
import { z } from "zod";
import {
  registerSchema,
  type registerSchemaType,
} from "~/schemas/registerSchema";
const config = useRuntimeConfig();
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const errors = ref<z.ZodFormattedError<registerSchemaType> | null>(null);

const user = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const signUp = async () => {
  try {
    const valid = await registerSchema.safeParse(user);
    if (!valid.success) {
      errors.value = valid.error.format();
      console.log(errors.value);
      return;
    }
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
