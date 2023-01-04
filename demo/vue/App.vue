<script setup lang="ts">
import { ref } from "vue";
import "email-obfuscator-webcomponent";

const counter = ref<number>(0);
</script>

<template>
  <main>
    <h1>Hello from Vue!</h1>
    <obfuscated-email-address
      src="https://rumaan.dev/jkvu1o0le24.png"
    ></obfuscated-email-address>
    <div class="counter">
      <button @click="counter--">-</button>
      <span>{{ counter }}</span>
      <button @click="counter++">+</button>
    </div>
    <a
      :style="{ textAlign: 'center' }"
      href="https://github.com/rumaan/email-obfuscator-webcomponent/tree/main/demo/vue"
    >
      Source
    </a>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.counter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-block: 2rem;
}
</style>
