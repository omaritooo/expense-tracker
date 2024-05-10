<script setup lang="ts">
// import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-vue-next";

import { ref } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/v-calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const date = defineModel({ default: Date.now() });
const formattedDate = ref(useDateFormat(date, "DD-MM-YYYY"));
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="'outline'"
        :class="
          cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )
        "
      >
        <CalendarIcon class="w-4 h-4 mr-2" />
        <!-- <span>{{ date ? format(date, "PPP") : "Pick a date" }}</span> -->
        <span> {{ formattedDate }}</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="date" />
    </PopoverContent>
  </Popover>
</template>
