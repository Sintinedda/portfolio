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
            nom: "tifosi",
            date: "10/10/2024",
            gitHub: "https://github.com/Sintinedda/tifosi",
            image: "sql"
        },
        {
            nom: "Au petit village",
            date:  "22/07/2024",
            gitHub: "https://github.com/Sintinedda/au-petit-village",
            pdf: "../../public/AuPetitVillage.pdf",
            image: "angular"
        },
        {
            nom: "Trouve ton artisan",
            date: "30/08/2024",
            gitHub: "https://github.com/Sintinedda/trouve-ton-artisan",
            image: "react"
        },
        {
            nom: "Librairie",
            date: "01/11/2024",
            gitHub: "https://github.com/Sintinedda/Library",
            image: "python"
        },
        {
            nom: "Russell API",
            date: "03/12/2024",
            gitHub: "https://github.com/Sintinedda/Russell-API",
            image: "nodejs"
        },
        {
            nom: "Stubborn",
            date: "17/02/2025",
            gitHub: "https://github.com/Sintinedda/StubbornCefProject",
            image: "symfony"
        },
        {
            nom: "Mon portfolio",
            date: "17/02/2025",
            gitHub: "https://github.com/Sintinedda/portfolio",
            image: "vuejs"
        },
        {
            nom: "Projet perso",
            date: "en cours",
            gitHub: "https://github.com/Sintinedda/my_site_web_symfony",
            image: "work-4"
        }
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
            <button @click="openModal"><img :src="`../public/assets/${work.image}.png`" :id="index" :alt="`${work.image}`"><br>
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