<template>
    <main>
        <div class="progress-bar">
            <div class="progress" :style="{ width: `${Math.round(scrollProgress)}%` }"></div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const throttle = (func, limit) => {
    let inThrottle
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args)
            inThrottle = true
            requestAnimationFrame(() => inThrottle = false)
        }
    }
}

const calculateScrollProgress = throttle(() => {
    const windowHeight = document.documentElement.clientHeight
    const documentHeight = document.documentElement.scrollHeight - windowHeight
    const scrolled = window.scrollY
    scrollProgress.value = (scrolled / documentHeight) * 100
}, 16) // roughly 60fps

onMounted(() => {
    window.addEventListener('scroll', calculateScrollProgress, { passive: true })
    calculateScrollProgress() // Initial calculation
})

onUnmounted(() => {
    window.removeEventListener('scroll', calculateScrollProgress)
})
</script>

<style scoped>
.progress-bar {
    width: 100%;
    height: 2px;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.progress {
    height: 100%;
    background-color: #2dd4bf;
    box-shadow: 0 0 10px #2dd4bf, 0 0 20px #2dd4bf;
    transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateZ(0);
    /* Hardware acceleration */
    will-change: width;
    /* Hint to browser for optimization */
}
</style>
