<template>
  <div class="gallery-container">
    <h2 class="gallery-title">Elections dashboard</h2>

    <!-- Grid s tipkama za slike -->
    <div class="gallery-grid">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="caption-button"
        @click="openModal(image)"
      >
        {{ image.caption }}
      </button>
    </div>

    <!-- Gumb za prikaz rezultata -->
    <div class="show-results-wrapper">
      <button class="caption-button show-results-button" @click="resultsModal = true">
        Show Results
      </button>
    </div>

    <!-- Modal za prikaz slike -->
    <div v-if="selectedImage" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">&times;</button>
        <img
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="modal-image"
        />
        <p class="modal-caption">{{ selectedImage.caption }}</p>
      </div>
    </div>

    <!-- Komponenta za rezultate -->
    <ResultsModal :visible="resultsModal" @close="resultsModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ResultsModal from './ResultsModal.vue' // Prilagodi putanju ako se nalazi drugdje

const images = [
  {
    src: new URL("../assets/BeforeAfterDhont/Dhont.png", import.meta.url).href,
    alt: 'Dhont Effect',
    caption: "Election results before and after D'Hondt method",
  },
  {
    src: new URL("../assets/BirthYearOrientation/year_orientation.png", import.meta.url).href,
    alt: 'Birth year orientations',
    caption: "Candidate orientations by birth year",
  },
  {
    src: new URL("../assets/TotalPartyOrientations/PartyOrientations.png", import.meta.url).href,
    alt: 'Party orientations',
    caption: 'Party orientations',
  },
  {
    src: new URL("../assets/GendersTitles/GenderTitles.png", import.meta.url).href,
    alt: 'Genders titles',
    caption: 'Titles by gender'
  },
  {
    src: new URL("../assets/PartyTitles/What are titles of persons representing each party-17. 05. 2025. 14_42_19.png", import.meta.url).href,
    alt: 'Party representative titles',
    caption: 'Titles of party representatives'
  }
]

const selectedImage = ref(null)
const resultsModal = ref(false)

const openModal = (image) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}
</script>

<style scoped>
.gallery-container {
  padding: 24px;
  background-color: #f7f9fb;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.gallery-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 6px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.caption-button {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  background-color: #004a99;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.caption-button:hover {
  background-color: #0066cc;
}

.show-results-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Modal content */
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  box-shadow: 0 8px 16px rgba(0,0,0,0.25);
  text-align: center;
  overflow: auto;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 4px;
  margin-bottom: 12px;
}

.modal-caption {
  font-size: 16px;
  font-weight: 500;
  color: #222;
}

/* Close button */
.close-button {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 24px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close-button:hover {
  color: #000;
}
</style>
