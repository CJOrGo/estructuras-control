<template>
  <div class="container">
    <h2>Estructura: v-bind:key</h2>
    <p class="intro">
      Es un atributo se utiliza para asignar una identidad única e irrepetible a cada elemento de
      una lista. Sirve para que Vue identifique exactamente qué elemento ha cambiado, se ha movido o
      se ha eliminado.
    </p>

    <div class="list">
      <div v-for="usuario in usuarios" :key="usuario.id" class="card">
        <span class="id-tag">{{ usuario.id }}</span>
        <span class="name">{{ usuario.nombre }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const usuarios = ref([
  { id: '01', nombre: 'Ana García' },
  { id: '02', nombre: 'Luis Pérez' },
  { id: '03', nombre: 'María López' },
])
</script>

<style scoped>
.container {
  font-family: sans-serif;
  max-width: 400px;
  margin: auto;
  color: #333;
}

.intro {
  color: #666;
  font-size: 0.9em;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

/* Estética de tarjeta sencilla y moderna */
.card {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
}

.card:hover {
  border-color: #2196f3;
  background: #f0f7ff;
}

/* El ID destacado */
.id-tag {
  background: #2196f3;
  color: white;
  font-size: 0.7em;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 12px;
}

.name {
  font-weight: 500;
}
</style>
