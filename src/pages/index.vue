<script setup lang="ts">
import { useTestStore } from '../stores/test';
const testStore = useTestStore();
</script>

<template>
  <div>
    <h1>Test</h1>
    <p>{{ testStore.test }}</p>
    <button @click="testStore.test = !testStore.test">Toggle</button>
  </div>
</template>

