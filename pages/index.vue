<template>
  <main class="flex w-screen gap-x-2">
    <Sidebar />
    <div class="flex justify-center my-4 h-fit gap-x-4">
      <CardMain title="Expenses" text="$123.42" />
      <CardMain title="Expenses" text="$123.42" />
      <CardMain title="Expenses" text="$123.42" />
      <CardMain title="Expenses" text="$123.42" />
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style>
html {
  font-family: "Poppins";
  font-weight: 400;
}
</style>
