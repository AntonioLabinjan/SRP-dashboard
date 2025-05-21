<template>
  <div class="container">
    <h1 class="title">Politicians and Their Parties</h1>

    <!-- Filters -->
    <div class="filters">
      <label>
        Party:
        <select v-model="selectedPartyId">
          <option value="">All</option>
          <option v-for="party in parties" :key="party.id" :value="party.id">
            {{ party.name }}
          </option>
        </select>
      </label>

      <label>
        Birth Year:
        <input type="number" v-model.number="birthYearFilter" placeholder="Enter year" />
      </label>

      <label>
        Condition:
        <select v-model="birthYearCondition">
          <option value="exact">Exact</option>
          <option value="greater">Greater Than</option>
          <option value="less">Less Than</option>
        </select>
      </label>
    </div>

    <!-- Results -->
    <div class="grid">
      <div v-for="person in filteredPeople" :key="person.id" class="card">
        <img
          class="party-logo"
          :alt="person.partyName"
          :src="getPartyLogo(person.party_id)"
        />
        <div class="info">
          <h2>{{ person.title || '' }} {{ person.first_name }} {{ person.last_name }}</h2>
          <p><strong>Born:</strong> {{ person.birth_year }}</p>
          <p><strong>Party:</strong> {{ person.partyName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'

// [persons, parties, peopleWithParties, getPartyLogo] remain the same...

const selectedPartyId = ref('')
const birthYearFilter = ref(null)
const birthYearCondition = ref('exact')

const filteredPeople = computed(() => {
  return peopleWithParties.filter(person => {
    const partyMatch = selectedPartyId.value === '' || person.party_id === Number(selectedPartyId.value)

    let birthYearMatch = true
    if (birthYearFilter.value !== null) {
      if (birthYearCondition.value === 'exact') {
        birthYearMatch = person.birth_year === birthYearFilter.value
      } else if (birthYearCondition.value === 'greater') {
        birthYearMatch = person.birth_year > birthYearFilter.value
      } else if (birthYearCondition.value === 'less') {
        birthYearMatch = person.birth_year < birthYearFilter.value
      }
    }

    return partyMatch && birthYearMatch
  })
})
// Raw person data
const persons = [
  { id: 1, first_name: 'João', last_name: 'Silva', birth_year: 1965, title: 'Dr.', party_id: 1 },
  { id: 2, first_name: 'Carlos', last_name: 'Pereira', birth_year: 1970, title: 'Eng.', party_id: 2 },
  { id: 3, first_name: 'Rafael', last_name: 'Costa', birth_year: 1982, title: null, party_id: 3 },
  { id: 4, first_name: 'Miguel', last_name: 'Fernandes', birth_year: 1958, title: 'Prof.', party_id: 4 },
  { id: 5, first_name: 'Ana', last_name: 'Santos', birth_year: 1975, title: 'Dra.', party_id: 5 },
  { id: 6, first_name: 'Bruno', last_name: 'Almeida', birth_year: 1980, title: null, party_id: 6 },
  { id: 7, first_name: 'Ricardo', last_name: 'Neves', birth_year: 1967, title: null, party_id: 7 },
  { id: 8, first_name: 'Fernanda', last_name: 'Martins', birth_year: 1973, title: 'Eng.', party_id: 8 },
  { id: 9, first_name: 'Gustavo', last_name: 'Lima', birth_year: 1988, title: null, party_id: 9 },
  { id: 10, first_name: 'Patricia', last_name: 'Ramos', birth_year: 1990, title: 'Dra.', party_id: 10 },
  { id: 11, first_name: 'Tiago', last_name: 'Moreira', birth_year: 1969, title: null, party_id: 11 },
  { id: 12, first_name: 'Vasco', last_name: 'Mendes', birth_year: 1972, title: null, party_id: 12 },
  { id: 13, first_name: 'Diogo', last_name: 'Faria', birth_year: 1960, title: 'Dr.', party_id: 13 },
  { id: 14, first_name: 'Helena', last_name: 'Cruz', birth_year: 1985, title: null, party_id: 14 },
  { id: 15, first_name: 'Sofia', last_name: 'Teixeira', birth_year: 1978, title: 'Prof.', party_id: 15 },
  { id: 16, first_name: 'André', last_name: 'Rodrigues', birth_year: 1955, title: 'Eng.', party_id: 16 },
  { id: 17, first_name: 'Catarina', last_name: 'Barros', birth_year: 1992, title: null, party_id: 17 },
  { id: 18, first_name: 'José', last_name: 'Nogueira', birth_year: 1983, title: null, party_id: 18 },
  { id: 19, first_name: 'Mariana', last_name: 'Henriques', birth_year: 1976, title: 'Dra.', party_id: 19 },
  { id: 20, first_name: 'Filipe', last_name: 'Coelho', birth_year: 1991, title: null, party_id: 20 },
  { id: 21, first_name: 'Eduardo', last_name: 'Gomes', birth_year: 1963, title: 'Dr.', party_id: 21 },
]

const parties = [
  { id: 1, name: 'PS' },
  { id: 2, name: 'PPD/PSD' },
  { id: 3, name: 'B.E.' },
  { id: 4, name: 'CDS-PP' },
  { id: 5, name: 'PAN' },
  { id: 6, name: 'PCTP/MRPP' },
  { id: 7, name: 'A' },
  { id: 8, name: 'L' },
  { id: 9, name: 'JPP' },
  { id: 10, name: 'PDR' },
  { id: 11, name: 'PNR' },
  { id: 12, name: 'PURP' },
  { id: 13, name: 'PPM' },
  { id: 14, name: 'MPT' },
  { id: 15, name: 'MAS' },
  { id: 16, name: 'PCP-PEV' },
  { id: 17, name: 'R.I.R.' },
  { id: 18, name: 'CH' },
  { id: 19, name: 'IL' },
  { id: 20, name: 'NC' },
  { id: 21, name: 'PTP' },
]

// Merge data
const peopleWithParties = persons.map(person => {
  const party = parties.find(p => p.id === person.party_id)
  return {
    ...person,
    partyName: party ? party.name : 'Unknown',
  }
})

// Placeholder logo logic
function getPartyLogo(partyId) {
  if (partyId === 1) {
    return new URL('@/assets/logos/psparty.jpg', import.meta.url).href
  }
  else if(partyId === 4){
     return new URL('@/assets/logos/cdspp.png', import.meta.url).href
  }
  else if(partyId === 3){
    return new URL('@/assets/logos/be.png', import.meta.url).href
  }
  else if(partyId === 2){
    return new URL('@/assets/logos/ppdpsd.jpg', import.meta.url).href
  }
  else if(partyId === 5){
    return new URL('@/assets/logos/pan.jpg', import.meta.url).href
  }
  else if(partyId === 6){
    return new URL('@/assets/logos/communisti.jpg', import.meta.url).href
  }
  else if(partyId === 7){
    return new URL("@/assets/logos/a.jpg", import.meta.url).href
  }
  else if(partyId === 8){
    return new URL('@/assets/logos/L.png', import.meta.url).href
  }
  else if(partyId === 9){
    return new URL('@/assets/logos/jpp.png', import.meta.url).href
  }
  else if(partyId === 10){
    return new URL('@/assets/logos/pdr.png', import.meta.url).href
  }
  else if(partyId === 11){
    return new URL('@/assets/logos/pnr.png', import.meta.url).href
  }
  else if(partyId === 12){
    return new URL('@/assets/logos/prp.png', import.meta.url).href
  }
  else if(partyId === 13){
    return new URL('@/assets/logos/ppm.jpg', import.meta.url).href 
  }
  else if(partyId === 14){
    return new URL('@/assets/logos/mpt.jpg', import.meta.url).href
  }
  else if(partyId === 15){
    return new URL('@/assets/logos/mas.png', import.meta.url).href
  }
  else if(partyId === 16){
    return new URL('@/assets/logos/pcp-pev.png', import.meta.url).href
  }
  else if(partyId === 17){
    return new URL('@/assets/logos/rir.png', import.meta.url).href
  }
  else if(partyId === 18){
    return new URL('@/assets/logos/ch.png', import.meta.url).href
  }
  else if(partyId === 19){
    return new URL('@/assets/logos/il.png', import.meta.url).href
  }
  else if(partyId === 20){
    return new URL('@/assets/logos/nc.png', import.meta.url).href
  }
  else if(partyId === 21){
    return new URL('@/assets/logos/ptp.jpg', import.meta.url).href
  }
  
  return `https://via.placeholder.com/100x100.png?text=Party+${partyId}`
}
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.card {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 12px;
}

.party-logo {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
}

.info h2 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.info p {
  margin: 2px 0;
  color: #444;
  font-size: 0.95rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  justify-content: center;
}

.filters label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

</style>
