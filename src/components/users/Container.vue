<script setup lang="ts">
import { Button } from "@/components/ui/button";

import { useForm } from "./useForm";
const { users, focusedUser, onUser, isLoading } = useForm();
</script>
<template>
  <div class="w-4/6 m-auto flex flex-col items-center">
    <div v-if="users.isFetched" class="flex flex-col gap-2">
      <p>Users</p>
      <Button
        v-for="(user, index) in users.data.value"
        :key="index"
        @click="() => onUser(user?.name)"
      >
        {{ user.name }}
      </Button>
    </div>
    <div v-if="isLoading">isLoading</div>
    <div>
      <div>{{ focusedUser?.email }}</div>
    </div>
  </div>
</template>
