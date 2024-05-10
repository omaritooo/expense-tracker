<template>
  <form
    @submit.prevent="submit"
    class="flex flex-col items-center justify-between w-full max-w-xl p-6 align-middle rounded-sm gap-y-4"
  >
    <h1 class="text-3xl">
      {{ title }}
    </h1>
    <slot name="inputs">
      <!-- <div class="flex flex-col w-full gap-y-2">
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Email" />
      </div> -->
    </slot>
    <button
      class="px-10 py-2 mt-2 bg-white rounded-md"
      if="button"
      type="submit"
    >
      {{ button }}
    </button>
  </form>
</template>

<script lang="ts" setup>
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

interface Props {
  submit?: () => void;
  title?: string;
  description?: string;
  button?: string;
}

const props = defineProps<Props>();
</script>

<style></style>
