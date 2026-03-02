<template>
  <div class="v-for-page">
    <section class="intro">
      <h2>Estructura de Control: v-for</h2>
      <p>
        Esta directiva se utiliza para renderizar una lista de elementos recorriendo un arreglo de datos.
      </p>
      
      <div class="info-box">
        <p>
          <strong>Nota sobre el uso de :key:</strong> Aunque el enfoque es el uso de <code>v-for</code>, 
          se incluye el atributo <code>:key</code> porque funciona como la <strong>"huella digital"</strong> 
          que Vue utiliza para identificar cada elemento de forma única. Esto permite que Vue no pierda 
          de vista los elementos si la lista llega a cambiar, mejorando el rendimiento y evitando errores visuales.
        </p>
      </div>
    </section>

    <div class="lista-contenedor">
      <h3>Mi Lista de Tareas</h3>
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index" class="tarjeta-tarea">
          <span class="numero">{{ index + 1 }}</span>
          <p class="texto-tarea">{{ tarea }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tareas = ref([
  'Analizar la directiva v-for',
  'Comprender la importancia de :key',
  'Implementar rutas en Vue Router',
  'Preparar capturas para el reporte PDF'
])
</script>

<style scoped>
.v-for-page {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}

.intro {
  margin-bottom: 30px;
  text-align: left;
}

.info-box {
  background-color: #e8f5e9;
  border-left: 5px solid #42b883;
  padding: 15px;
  margin-top: 20px;
  border-radius: 4px;
  font-size: 0.95rem;
}

.lista-contenedor {
  width: 100%;
}

.tarjeta-tarea {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  padding: 15px;
  border-radius: 8px;
  list-style: none;
}

.numero {
  background-color: #42b883;
  color: white;
  min-width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;
  font-weight: bold;
}

.texto-tarea {
  margin: 0;
}
</style>