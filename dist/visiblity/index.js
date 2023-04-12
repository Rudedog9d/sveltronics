import { onMount, onDestroy, tick } from 'svelte';
import { writable } from 'svelte/store';
export function useElementVisibility(node) {
    const isVisible = writable(false);
    const updateVisibility = () => {
        const rect = node.getBoundingClientRect();
        isVisible.set(rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.bottom >= 0 &&
            rect.right >= 0);
    };
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
    window.addEventListener('scroll', updateVisibility);
    return isVisible;
}
