<script setup>
import { ref } from 'vue'

const socials = ref([
  {
    type: "Linkedin",
    link: "#",
    url: "https://www.linkedin.com/in/hasibul-huda/"
  },
  {

    type: "GitHub",
    link: "#",
    url: "https://github.com/Hasib-cirkut"
  },
  {

    type: "hasibulhuda1@gmail.com",
    link: "#",
    url: "mailto:hasibulhuda1@gmail.com"
  }
])

const currentActiveSocial = ref(0)
const animationOnGoing = ref(false)

function handleSwitch() {
  animationOnGoing.value = true

  setTimeout(() => {
    animationOnGoing.value = false

    if (currentActiveSocial.value >= socials.value.length - 1) {
      currentActiveSocial.value = 0

      return
    }

    currentActiveSocial.value += 1

  }, 500)
}
</script>

<template>
  <li class="flex justify-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
    <p :class="{ 'translateDown': animationOnGoing }">{{ socials[currentActiveSocial].type }}</p>
  </li>
  <button @click="handleSwitch">Switch</button>
</template>

<style>
@keyframes myAnimation {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }

  25% {
    opacity: 0.75;
    transform: translateY(5px);
  }

  50% {
    opacity: 0.5;
    transform: translateY(10px);
  }

  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

.translateDown {
  animation-name: myAnimation;
  animation-duration: 500ms;
  animation-timing-function: ease-out;
}
</style>
