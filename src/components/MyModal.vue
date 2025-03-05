<script setup>
    import { ref }  from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import '../assets/modal.css'
    const props = defineProps({
        isOpen: Boolean,
        currentProject: Object,
    });
    const emit = defineEmits(["modal-close"]);
    const target = ref(null)
    onClickOutside(target, () => emit('modal-close'))
</script>

<template>
    <div v-if="isOpen" class="mask-modal">
        <div class="modal-wrapper">
            <div class="modal-container" ref="target">
                <div class="modal-header">
                    <button @click.stop="emit('modal-close')"></button>
                    <slot name="header"> {{ currentProject.nom }} </slot>
                </div>
                <div class="modal-body">
                    <slot name="content">
                        <p>Date de création : {{ currentProject.date }}</p>
                        <p v-if="currentProject.gitHub"><a class="github" :href="currentProject.gitHub" onclick="window.open(this.href); return false">Lien vers répertoire GitHub</a></p>
                        <p v-if="currentProject.pdf"><a class="pdf" :href="currentProject.pdf" onclick="window.open(this.href); return false">Lien vers pdf</a></p>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <img :src="`/assets/${currentProject.image}.png`" :alt="`${currentProject.image}`">
                    </slot>
                </div>
            </div>
        </div>
    </div> 
</template>