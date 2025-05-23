<template>
  <div class="container">
    <h2 class="title">Pivoted data</h2>
    <div class="image-grid">
      <div
  v-for="(img, index) in images"
  :key="index"
  class="image-card"
  @click="openModal(index)"
>
  <img :src="img" alt="Slika" class="preview-image" />
  <div class="image-title">{{ titles[index] }}</div>
</div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img :src="images[activeImage]" class="modal-image" />
        <button class="close-button" @click="closeModal">✕</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  require('@/assets/mandates_by_territory_and_party.png'),
  require('@/assets/percentage_by_territory_and_party.png'),
  require('@/assets/votes_by_party_and_territory.png'),
]

const titles = [
  'Mandates per territory and party',
  'Percentages by territory and party',
  'Votes by party and territory',
]

const showModal = ref(false)
const activeImage = ref(0)

const openModal = (index) => {
  activeImage.value = index
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
.container {
  background-color: #198ada;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  color: white;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.image-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.image-card:hover {
  transform: scale(1.05);
}

.preview-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  display: block;
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #444;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #666;
}

.image-title {
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
}

</style>
