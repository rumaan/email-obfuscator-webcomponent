<script setup lang="ts">
import { ref } from "vue";
import "email-obfuscator-webcomponent";

const counter = ref<number>(0);
</script>

<template>
  <h1>Hello from Vue!</h1>
  <main>
    <obfuscated-email-address
      src="https://rumaan.dev/jkvu1o0le24.png"
    ></obfuscated-email-address>
    <div>
      <button @click="counter--">-</button>
      <span>{{ counter }}</span>
      <button @click="counter++">+</button>
    </div>
  </main>
</template>
