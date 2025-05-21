<template>
  <div class="search-map-container">
    <!-- Map Search Section -->
    <h2>Find a location</h2>
    <select v-model="selectedLocation" @change="updateMap" class="location-select">
      <option disabled value="">Select a location</option>
      <option v-for="location in predefinedLocations" :key="location" :value="location">
        {{ location }}
      </option>
    </select>
    <iframe
      :src="mapUrl"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <!-- Image Search Section -->
    <div class="image-search">
      <h2>Search Territory Results</h2>
      <input
        v-model="searchQuery"
        @keyup.enter="searchImage"
        placeholder="Search teritorry"
      />
      <button @click="searchImage">Search</button>

      <div v-if="filteredImages.length > 0" class="image-results">
        <div
          v-for="(img, index) in filteredImages"
          :key="index"
          class="image-preview"
        >
          <img :src="img.src" :alt="img.name" />
          <p>{{ img.name }}</p>
        </div>
      </div>

      <div v-else-if="searched" class="not-found">
        No results for "{{ searchQuery }}"
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Google Maps Embed
const apiKey = 'AIzaSyABnMhIxKKcPDiZLzB0f2_d8wOf9SuRXUA'
const predefinedLocations = [
  'Aveiro, Portugal',
  'Território Nacional, Portugal',
  'Beja, Portugal',
  'Braga, Portugal',
  'Bragança, Portugal',
  'Castelo Branco, Portugal',
  'Coimbra, Portugal',
  'Évora, Portugal',
  'Faro, Portugal',
  'Guarda, Portugal',
  'Leiria, Portugal',
  'Lisboa, Portugal',
  'Madeira, Portugal',
  'Portalegre, Portugal',
  'Porto, Portugal',
  'Santarém, Portugal',
  'Setúbal, Portugal',
  'Viana do Castelo, Portugal',
  'Vila Real, Portugal',
  'Viseu, Portugal',
  'Território Nacional, Portugal',

]
const selectedLocation = ref('')
const mapUrl = ref('https://www.google.com/maps/embed/v1/place?key=' + apiKey + '&q=' + encodeURIComponent(predefinedLocations[0]))

const updateMap = () => {
  if (selectedLocation.value) {
    mapUrl.value =
      'https://www.google.com/maps/embed/v1/place?key=' +
      apiKey +
      '&q=' +
      encodeURIComponent(selectedLocation.value)
  }
}

// Image Search
const BlankNull = require.context('@/assets/BlankAndNull', false, /\.(png|jpe?g|webp)$/)
const TeritoryOrientations = require.context('@/assets/TeritoryOrientations', false, /\.(png|jpe?g|webp)$/)

const allImages = []
BlankNull.keys().forEach(key => {
  allImages.push({
    name: key.replace('./', '').toLowerCase(),
    src: BlankNull(key),
  })
})
TeritoryOrientations.keys().forEach(key => {
  allImages.push({
    name: key.replace('./', '').toLowerCase(),
    src: TeritoryOrientations(key),
  })
})

const searchQuery = ref('')
const filteredImages = ref([])
const searched = ref(false)

const searchImage = () => {
  const query = searchQuery.value.trim().toLowerCase()
  filteredImages.value = allImages.filter(img => img.name.includes(query))
  searched.value = true
}
</script>

<style scoped>
.search-map-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

/* Map Section */
.location-select {
  width: 90%;
  max-width: 500px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

/* Image Search Section */
.image-search {
  margin-top: 40px;
}

.image-search input {
  padding: 8px;
  width: 70%;
  margin-right: 8px;
  font-size: 16px;
}

.image-search button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.image-results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.image-preview {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  background: #fafafa;
}

.image-preview img {
  max-width: 100%;
  border-radius: 4px;
}

.image-preview p {
  margin-top: 8px;
  font-size: 14px;
  color: #444;
  word-break: break-word;
}

.not-found {
  margin-top: 20px;
  color: red;
}
</style>
