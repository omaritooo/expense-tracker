<template>
  <div class="flex flex-col w-full min-h-fit gap-y-2">
    <label v-if="label" class="text-left" :for="label">{{ label }}</label>
    <Input
      v-model="modelValue"
      :id="label"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- <span v-if="errorStack" class="text-sm text-red-400">
      {{ errorStack["_errors" as keyof typeof errorStack] }}
    </span> -->
    <!-- <span v-if="fieldError">{{ fieldError }}</span> -->
    <span v-if="error" class="text-sm text-red-400">
      {{
        error[`${validation}` as keyof typeof error] &&
        error[`${validation}` as keyof typeof error].length > 0
          ? error[`${validation}` as keyof typeof error][0]
          : null
      }}</span
    >
  </div>
</template>

<script lang="ts" setup>
interface FieldError {
  [key: string]: string[];
}
interface Props {
  modelValue: number | string;
  label?: string;
  placeholder?: string;
  validation?: string;
  error?: FieldError;
  type?: "email" | "password" | "telephone" | "text";
}

import { Input } from "../ui/input";

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: "",
  placeholder: "",
  type: "text",
  error: undefined,
});
const { modelValue, label, placeholder, type, validation, error } =
  toRefs(props);

// const errorStack = computed(() => {
//   if (!error) {
//     return null;
//   }
//   console.log(error.value);
//   return error.value![validator as keyof typeof error]
//     ? error![validator as keyof typeof error]
//     : null;
// });

const fieldError = computed(() => {
  console.log(error.value);

  // return error.value;
  if (error.value && error.value[`${validation}`]) {
    return error.value[`${validation}`][0]
      ? error.value[`${validation}`][0]
      : null;
  }
});
if (error.value) {
  console.log(error.value[`${validation}`]);
}
defineEmits(["update:modelValue"]);
</script>

<style></style>
