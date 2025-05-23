<!-- src/components/Home.vue -->
<template>
   <div class="link-container">
    <router-link to="/parties" class="party-link">View All Parties</router-link>
    <router-link to="/history" class="party-link">View historical changes</router-link>
    <router-link to="/pivots" class ="party-link">View pivoted data</router-link>
  </div>
  <div class="link-container">
  <router-link to="/results" class="party-link">View results</router-link>
 </div>
  <SearchImage />
  <ImageGallery />
 

</template>

<script setup>
import SearchImage from './SearchImage.vue'
import ImageGallery from './ImageGallery.vue'

</script>

<style scoped>
.link-container {
  text-align: center;
  margin: 20px 0;
}

.party-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0077cc;
  color: white;
  text-decoration: none;
  font-size: 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.party-link:hover {
  background-color: #005fa3;
}
</style>
