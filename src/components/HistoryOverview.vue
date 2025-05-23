<template>
  <div class="history-viewer">
    <h2>Historical overview for territory</h2>

    <label for="territory-select">Pick territory:</label>
    <select id="territory-select" v-model="selectedTerritory" @change="onTerritoryChange">
      <option disabled value="">-- pick --</option>
      <option v-for="t in territories" :key="t" :value="t">{{ t }}</option>
    </select>

    <div v-if="selectedTerritory" class="graphs">
      <h3>Plots for: {{ selectedTerritory }}</h3>
      <div class="graph">
        <h4>Votes throught time</h4>
        <img :src="getGraphPath('votes_over_time.png')" alt="Glasovi kroz vrijeme" />
      </div>

      <div class="graph">
        <h4>Vote percentages throught time</h4>
        <img :src="getGraphPath('percentage_over_time.png')" alt="Postotak glasova kroz vrijeme" />
      </div>

      <div class="graph">
        <h4>Mandates per party</h4>
        <img :src="getGraphPath('mandates.png')" alt="Mandati po stranci" />
      </div>

      <div class="graph">
        <h4>Changes in election leading party</h4>
        <img :src="getGraphPath('leader_changes.png')" alt="Promjene vodeće stranke" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const basePath = "/graphs"

// Lista teritorija - prebaci s backend-a ili hardkodiraj
const territories = [
  'Aveiro',
  'Território Nacional',
  'Beja',
  'Braga',
  'Bragança',
  'Castelo Branco',
  'Coimbra',
  'Évora',
  'Faro',
  'Guarda',
  'Leiria',
  'Lisboa',
  'Madeira',
  'Portalegre',
  'Porto',
  'Santarém',
  'Setúbal',
  'Viana do Castelo',
  'Vila Real',
  'Viseu',
  'Território Nacional',
]

const selectedTerritory = ref("")

// Funkcija za pretvaranje imena teritorija u naziv foldera iz Pythona
function territoryToFolder(name) {
  return name.toLowerCase().replace(/ /g, "_").replace(/,/g, "")
}

// Put do foldera s grafovima
//const basePath = "C:/Users/Korisnik/Desktop/spi_chckpnt/graphs"

function getGraphPath(filename) {
  if (!selectedTerritory.value) return ""
  const folder = territoryToFolder(selectedTerritory.value)
  return `${basePath}/${folder}/${filename}`
}

function onTerritoryChange() {
  // event handler ako želiš dodatnu logiku
}
</script>

<style scoped>
.history-viewer {
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

label {
  font-weight: bold;
  margin-right: 8px;
}

select {
  margin-bottom: 20px;
  padding: 4px 8px;
  font-size: 16px;
}

.graphs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.graph {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 6px;
  background: #f9f9f9;
  text-align: center;
}

.graph img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
