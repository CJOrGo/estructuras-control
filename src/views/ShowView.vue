<template>
  <div class="card-container">
    <h2 class="title">Uso de V-show</h2>

    <div class="explanation-box">
      <p>
        La directiva v-show se utiliza para alternar la visibilidad de un elemento de forma
        condicional. A diferencia de v-if, el elemento siempre permanece en el DOM (el código HTML
        no se borra), simplemente se le aplica automáticamente el estilo CSS display: none; cuando
        la condición es falsa.
      </p>
    </div>

    <button
      @click="visible = !visible"
      :class="[visible ? 'btn-danger' : 'btn-success', 'status-btn']"
    >
      {{ visible ? '🚫 Ocultar' : '👁️ Mostrar' }} Mensaje
    </button>

    <div v-show="visible" class="status-panel">
      <p>
        ⚡ ¡Es ideal para elementos que deben aparecer y desaparecer frecuentemente sin afectar el
        rendimiento de carga!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(true)
</script>

<style scoped>
/* CONTENEDOR PRINCIPA*/
.card-container {
  font-family: 'Inter', sans-serif;
  max-width: 500px;
  margin: 2rem auto; /* Centrado en la página */
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgb(0, 0, 0);
  border: 1px solid #eaeaea;
  text-align: center;
}

/*estilo del titulo */
.title {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/*cuadro de fondo en el texto principal*/
.explanation-box {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #57606f;
  text-align: left; /* Texto alineado a la izquierda */
}

/* ESTILOS DEL BOTÓN  */
.status-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
}

/* boton ocultar mensaje */
.btn-danger {
  background-color: #e74c3c; /* Rojo */
  color: white;
}

/* boton mostrar mensaje */
.btn-success {
  background-color: #2ecc71; /* Verde */
  color: white;
}

/* PANEL DEL MENSAJE (v-show) */
.status-panel {
  margin-top: 2rem;
  padding: 1.25rem;
  border-radius: 12px;
  border-left: 4px solid #2ecc71;
  color: #27ae60;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
