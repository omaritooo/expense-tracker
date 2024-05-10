<template>
  <main
    class="flex items-center justify-between w-screen h-screen p-6 align-middle bg-gray-200 justify-items-center"
  >
    <div class="flex justify-center w-1/2">
      <BaseForm :submit="signUp" button="Login" title="Register">
        <template #inputs>
          <BaseInput
            label="Email"
            :error="errors?.fieldErrors"
            validation="email"
            type="email"
            v-model="user.email"
            placeholder="email@email.com"
          />
          <BaseInput
            :error="errors?.fieldErrors"
            label="Username"
            validation="username"
            type="text"
            v-model="user.username"
            placeholder="babyicee"
          />
          <div class="flex w-full gap-x-4">
            <BaseInput
              :error="errors?.fieldErrors"
              validation="first_name"
              label="First Name"
              type="text"
              v-model="user.firstName"
              placeholder="John"
            />
            <BaseInput
              label="Last Name"
              validation="last_name"
              :error="errors?.fieldErrors"
              type="text"
              v-model="user.lastName"
              placeholder="Doe"
            />
          </div>
          <div class="flex flex-col w-full gap-y-2">
            <label class="text-left"> Birthday </label>

            <BaseDatepicker v-model="user.birthday" ss="w-full" />
          </div>
          <BaseInput
            label="Password"
            :error="errors?.fieldErrors"
            validation="password"
            type="password"
            v-model="user.password"
            placeholder="*******"
          />
          <BaseInput
            label="Confirm your password"
            :error="errors?.fieldErrors"
            validation="confirmPassword"
            type="password"
            v-model="user.confirmPassword"
            placeholder="*******"
          />
        </template>
      </BaseForm>
    </div>
    <div class="w-1/2 h-full rounded-sm bg-purple-950"></div>
    <Toaster />
  </main>
</template>

<script lang="ts" setup>
import { useToast } from "@/components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast";
import { z } from "zod";
const { toast } = useToast();

const userAuth = useSupabaseUser();
import {
  registerSchema,
  type registerSchemaType,
} from "~/schemas/registerSchema";

const client = useSupabaseClient();
const flag = false;
const errors = ref<registerSchemaType | null>(null);

const user = reactive({
  email: "",
  password: "",
  username: "",
  birthday: undefined,
  firstName: "",
  lastName: "",
  confirmPassword: "",
});

const signUp = async () => {
  console.log(user.birthday);
  const valid = await registerSchema.safeParse(user);
  if (!valid.success) {
    errors.value = valid.error.flatten();
    for (let err in errors.value.fieldErrors) {
      console.log(err);
    }
    console.log(errors.value.fieldErrors);
  }
  await $fetch("/api/login", { method: "post", body: { ...user } });
};
</script>

<style></style>
