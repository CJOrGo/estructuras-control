<template>
  <div class="v-if-page">
    <section class="intro">
      <h2>Estructura de Control: v-if, v-else-if y v-else</h2>
      <p>
        Estas directivas se utilizan para renderizar elementos de forma condicional. A diferencia de <code>v-show</code>, 
        estas directivas eliminan o insertan el elemento directamente en el DOM.
      </p>
      
      <div class="info-box">
        <p>
          <strong>Dato clave:</strong> Cuando una condición de <code>v-if</code> cambia a falso, Vue destruye 
          completamente el elemento y sus componentes hijos para liberar memoria.
        </p>
      </div>
    </section>

    <div class="demo-contenedor">
      <div class="control-entrada">
        <label>Introduce tu calificación (0-100): </label>
        <input 
          type="number" 
          v-model="calificacion" 
          min="0" 
          max="100" 
          step="1"
          class="input-calif"
          @keydown="bloquearCaracteres"
        >
      </div>

      <h3>Estado de la Evaluación</h3>
      
      <div class="resultado-lista">
        
        <div v-if="calificacion == 100" class="tarjeta-resultado excelente">
          <div class="icono">🌟</div>
          <div class="contenido">
            <span class="tag-condicion">Condición activa: <code>calificacion == 100</code></span>
            <p class="mensaje">¡Excelente! hiciste un excelente trabajo.</p>
          </div>
        </div>

        <div v-else-if="calificacion >= 90 && calificacion < 100" class="tarjeta-resultado muy-bien">
          <div class="icono">⭐</div>
          <div class="contenido">
            <span class="tag-condicion">Condición activa: <code>calificacion >= 90 && &lt; 100</code></span>
            <p class="mensaje">¡Muy bien! Casi perfecto.</p>
          </div>
        </div>

        <div v-else-if="calificacion >= 70 && calificacion < 90" class="tarjeta-resultado aprobado">
          <div class="icono">✅</div>
          <div class="contenido">
            <span class="tag-condicion">Condición activa: <code>calificacion >= 70 && &lt; 90</code></span>
            <p class="mensaje">Aprobado. Buen trabajo.</p>
          </div>
        </div>

        <div v-else-if="calificacion >= 0 && calificacion < 70" class="tarjeta-resultado reprobado">
          <div class="icono">❌</div>
          <div class="contenido">
            <span class="tag-condicion">Condición activa: <code>calificacion >= 0 && &lt; 70</code></span>
            <p class="mensaje">Reprobado. Necesitas estudiar más.</p>
          </div>
        </div>

        <div v-else class="tarjeta-resultado invalido">
          <div class="icono">⚠️</div>
          <div class="contenido">
            <span class="tag-condicion">Condición activa: <code>v-else</code> (Valor fuera de rango)</span>
            <p class="mensaje">Por favor, ingresa una nota válida.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estado inicial de la calificación
const calificacion = ref(0)

/**
 * Función para evitar la entrada de caracteres no numéricos 
 * comunes en inputs de tipo 'number'.
 */
const bloquearCaracteres = (event) => {
  const teclasProhibidas = ['e', 'E', '.', '-', '+', ','];
  if (teclasProhibidas.includes(event.key)) {
    event.preventDefault();
  }
}
</script>

<style scoped>
/* Estilos alineados con la estética de ForView.vue */
.v-if-page {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}

.intro {
  margin-bottom: 30px;
}

.info-box {
  background-color: #e8f5e9;
  border-left: 5px solid #42b883;
  padding: 15px;
  margin-top: 20px;
  border-radius: 4px;
}

.control-entrada {
  margin-bottom: 25px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}

.input-calif {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 80px;
}

.tarjeta-resultado {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  padding: 15px;
  border-radius: 8px;
}

.icono {
  background-color: #f0f0f0;
  min-width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 1.2rem;
}

.tag-condicion {
  display: block;
  font-size: 0.8rem;
  color: #7f8c8d;
  margin-bottom: 4px;
}

.mensaje {
  margin: 0;
  font-weight: bold;
}

/* Bordes laterales de colores para distinguir estados */
.excelente { border-left: 5px solid #27ae60; }
.muy-bien, .aprobado { border-left: 5px solid #2980b9; }
.reprobado { border-left: 5px solid #c0392b; }
.invalido { border-left: 5px solid #f39c12; }

/* Colores de texto para el mensaje */
.excelente .mensaje { color: #27ae60; }
.muy-bien .mensaje, .aprobado .mensaje { color: #2980b9; }
.reprobado .mensaje { color: #c0392b; }
</style>