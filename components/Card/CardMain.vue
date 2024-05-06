<template>
  <Card class="dark w-72">
    <CardHeader>
      <CardTitle class="font-medium text-3xl">{{ title }}</CardTitle>
      <CardDescription v-if="description">{{ description }}</CardDescription>
    </CardHeader>
    <CardContent class="text-2xl font-light">
      <div class="flex flex-col gap-y-1">
        <span> {{ text }} </span>
        <span class="text-sm font-extralight"> +54.8% from last month </span>
      </div></CardContent
    >
    <CardFooter v-if="footer"> Card Footer </CardFooter>
  </Card>
</template>

<script lang="ts" setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toRefs } from "vue";
interface Props {
  title?: string;
  description?: string;
  text: number | string;
  footer?: string;
}
const props = defineProps<Props>();
const { title, description, text, footer } = toRefs(props);
toRefs;
</script>

<style></style>
