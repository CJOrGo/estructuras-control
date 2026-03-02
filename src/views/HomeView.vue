<template>
  <div class="home-container">
    <div class="card">
      <img src="../assets/vue.svg" alt="Vue logo" class="logo" width="100" />
      <h1>Proyecto: Estructuras de Control en Vue.js</h1>
      <hr />
      
      <div class="info-grid">
        <div class="info-item">
          <strong>Integrantes:</strong>
          <p>Bautista González Wendy Paola</p>
          <p>Ruí Rafael Samuel</p>
          <p>Orozco González Carlos Joás</p>
        </div>
        
        <div class="info-item">
          <strong>Materia:</strong>
          <p>Programación Web</p>
        </div>
        
        <div class="info-item">
          <strong>Fecha:</strong>
          <p>01 de Marzo de 2026</p>
        </div>

        <div class="info-item">
          <strong>Profesor:</strong>
          <p>Guzmán Sánchez Jorge Octavio</p>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  padding: 40px;
  width: 80%;
  max-width: 800px;
  text-align: center;
  border-top: 8px solid #42b883;
}

h1 {
  color: #2c3e50;
  margin: 20px 0;
}

hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 20px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  text-align: left;
  margin-top: 30px;
}

.info-item strong {
  color: #42b883;
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.info-item p {
  margin: 2px 0;
  color: #555;
}

.logo {
  margin-bottom: 10px;
}

.footer-msg {
  margin-top: 40px;
  font-style: italic;
  color: #888;
}
</style>