<template>
    <footer
        class="font-orbitron font-light md:text-xl text-[3vw] bg-dark-900 flex text-center flex-col items-center border-t-2 pt-[2vw] pb-[2vw] md:pt-5 md:pb-5 justify-between relative w-full bottom-0 border-dark-600"
        :style="{ marginTop: props.marginTop }">
        <p class="w-full copyright">© 2025 - {{ curYear }}
            <i class="fa-regular fa-star fa-spin"></i>
            Lanxi All rights reserved
        </p>
        <p><a href="https://beian.miit.gov.cn/" class="hover-primary" target="_blank">湘ICP备2025145910号-2</a></p>
        <p>
            <span class="text-dark-400">基于 </span>
            <a class="hover-primary" target="_blank" href="https://github.com/xzadudu179/XME-Home-New">XME-Home-New</a>
            <span class="text-dark-400"> 二次开发</span>
        </p>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const curYear = ref(new Date().getFullYear());
const props = defineProps({
    marginTop: {
        type: String,
        required: false,
        default: "20vh"
    },
})
</script>

<style scoped>
footer {
    z-index: 150;

}

footer a {
    transition: color 0.3s;
}

footer p {
    padding: 0.3rem 0;
    color: var(--color-dark-300);
}
</style>