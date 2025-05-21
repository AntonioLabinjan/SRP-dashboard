<template>
  <div v-if="visible" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="emit('close')">&times;</button>
      <h3 style="margin-bottom: 16px;">Election Results Visualizations</h3>
      <img :src="barchart" alt="Bar Chart" class="modal-image" />
      <img :src="piechart" alt="Pie Chart" class="modal-image" />
      <img :src="stripplot" alt="Strip Plot" class="modal-image" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  visible: Boolean,
})

const emit = defineEmits(['close'])

const barchart = new URL('../assets/barchart_mandati.png', import.meta.url).href
const piechart = new URL('../assets/piechart_mandati.png', import.meta.url).href
const stripplot = new URL('../assets/stripplot_mandati.png', import.meta.url).href
</script>

<style scoped>
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
  max-height: 70vh;
  border-radius: 4px;
  margin-bottom: 16px;
}

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
