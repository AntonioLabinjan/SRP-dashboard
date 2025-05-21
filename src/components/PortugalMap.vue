<template>
  <div class="map-container">
    <h3>Find a location</h3>
    <input
      id="autocomplete"
      type="text"
      placeholder="Enter a location"
      class="autocomplete"
    />
    <iframe
      :src="mapUrl"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const apiKey = 'AIzaSyABnMhIxKKcPDiZLzB0f2_d8wOf9SuRXUA' // <-- Use your own Google Maps API key (with Places API enabled)
const mapUrl = ref(
  'https://www.google.com/maps/embed/v1/place?key=' +
    apiKey +
    '&q=Beram,Croatia'
)

onMounted(() => {
  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
  script.async = true
  document.head.appendChild(script)

  script.onload = () => {
    const autocompleteInput = document.getElementById('autocomplete')
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInput
    )
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      if (place.geometry) {
        const location = place.formatted_address || place.name
        mapUrl.value =
          'https://www.google.com/maps/embed/v1/place?key=' +
          apiKey +
          '&q=' +
          encodeURIComponent(location)
      }
    })
  }
})
</script>

<style scoped>
.map-container {
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
}

.autocomplete {
  width: 90%;
  max-width: 500px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
