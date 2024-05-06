<template>
  <aside
    class="flex flex-col h-screen py-6 text-gray-200 align-middle transition-all duration-150 ease-in-out bg-primary gap-y-8 item group md:flex rounded-r-md"
    :class="isOpened ? 'w-48 px-4' : 'w-12 px-2'"
  >
    <div class="flex flex-col my-auto gap-y-5">
      <button
        v-for="link in links"
        :key="link.icon"
        class="flex items-center justify-start gap-x-4 h-fit w-fit"
        @click="isOpened = !isOpened"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <span
          :class="isOpened ? 'block' : 'hidden'"
          class="text-lg transition duration-150 font-extralight"
          >{{ link.name }}</span
        >
      </button>
    </div>
    <button @click="isOpened = !isOpened">
      <Transition name="fade" mode="out-in">
        <svg
          v-if="isOpened"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </Transition>
    </button>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isOpened = ref(false);
const links = [
  {
    name: "Home",
    path: "/",
    icon: "icon",
  },
  {
    name: "Home",
    path: "/",
    icon: "icon",
  },
  {
    name: "Home",
    path: "/",
    icon: "icon",
  },
  {
    name: "Home",
    path: "/",
    icon: "icon",
  },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
