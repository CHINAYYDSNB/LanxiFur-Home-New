<template>
    <FadeContent :blur="true" :duration="1000" :delay="100" :threshold="0" :always-play="false" :initial-opacity="0"
        easing="ease-out">
        <div ref="artalkEl" class="artalk-comments"></div>
    </FadeContent>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import FadeContent from './Bit/FadeContent.vue';

const props = defineProps({
    path: {
        type: String,
        required: false,
        default: ""
    },
})

const artalkEl = ref<HTMLElement | null>(null);
const route = useRoute();
const pageKey = computed(() => props.path || window.location.hostname + route.path);
let artalk: any = null;

function loadScript(src: string): Promise<void> {
    return new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => resolve();
        document.head.appendChild(s);
    });
}

function loadCss(href: string) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    document.head.appendChild(l);
}

onMounted(async () => {
    loadCss('https://artalk.lanxis.top/dist/Artalk.css');
    await loadScript('https://artalk.lanxis.top/dist/Artalk.js');
    if (artalkEl.value && (window as any).Artalk) {
        artalk = (window as any).Artalk.init({
            el: artalkEl.value,
            server: 'https://artalk.lanxis.top',
            site: '岚汐的个人主页',
            pageKey: pageKey.value,
            darkMode: true,
        });
    }
});

onBeforeUnmount(() => {
    if (artalk && typeof artalk.destroy === 'function') {
        artalk.destroy();
    }
});
</script>

<style scoped>
.artalk-comments {
    width: 100%;
    max-width: 900px;
    margin: 2rem auto 0;
}
</style>

<style>
.atk-comment-wrap * {
    font-family: 'Fira Code', 'Orbitron', monospace !important;
    font-size: 0.9rem;
}
.atk-comment-wrap .atk-nick {
    font-family: 'Orbitron', sans-serif !important;
}
</style>
