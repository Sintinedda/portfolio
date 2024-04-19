<script setup>
    import { ref } from 'vue'
    import MyModal from '../components/MyModal.vue'
    import '../assets/modal.css'
    const works = ref([
        {
        nom: "Curriculum Vitae",
            date: "16/01/2024",
            gitHub: "https://github.com/Sintinedda/Curriculum-vitae-Jeremy-Aboudan-",
            pdf : "../../public/monCv.pdf",
            image: "work-1"
        },
        {
        nom: "Cahier des charges",
            date: "06/02/2024",
            pdf : "../../public/cahierDesCharges.pdf",
            image: "work-2"
        },
        {
        nom: "Espace commentaire dynamique",
            date: "18/02/2024",
            gitHub: "https://https://github.com/Sintinedda/Dynamiser-un-espace-commentaire",
            pdf : "../../public/espaceCommentaireDynamique.pdf",
            image: "work-3"
        },
        {
        nom: "Mon site Web",
            date: "Toujours en développement",
            gitHub: "https://github.com/Sintinedda/mon-site-web",
            pdf : "../../public/monSiteWeb.pdf",
            image: "work-4"
        },
    ])
    const selectedProject = ref({});
    const isModalOpened = ref(false);
    
    const openModal = (e) => {
        selectedProject.value = works.value[Number(e.target.id)];
        isModalOpened.value = true;
    };
    const closeModal = () => {
        isModalOpened.value = false;
    };
</script>
<template>
    <div id="modal">
        <section v-for="(work, index) in works">
            <button @click="openModal"><img :src="`../src/assets/img/${work.image}.png`" :id="index" :alt="`${work.image}`"><br>
            <h3>{{ work.nom }}</h3></button>
            <MyModal :currentProject="selectedProject" :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal">
                <template #header>
                </template>
                <template #content>
                </template>
                <template #footer>
                </template>
            </MyModal>
        </section>
    </div>
</template>