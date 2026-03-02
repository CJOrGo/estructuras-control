<template>
  <header class="main-header">
    <h1>Estructuras de Vue</h1>
    <nav class="navbar">
      <router-link to="/">Inicio</router-link>
      <router-link to="/v-if">Ejemplo v-if</router-link>
      <router-link to="/v-show">Ejemplo v-show</router-link>
      <router-link to="/v-for">Ejemplo v-for</router-link>
      <router-link to="/v-key">Ejemplo v-bind:key</router-link>
    </nav>
  </header>

  <main class="page-content">
    <router-view />
  </main>
</template>

<style>
/* Reset básico para que no queden espacios blancos en las orillas */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f7f6; /* Fondo gris muy clarito */
}

.main-header {
  background-color: #42b883; /* El verde original de tu captura */
  color: white;
  padding: 30px 10px;
  text-align: center;
}

.main-header h1 {
  margin: 0 0 20px 0;
  font-size: 2.2rem;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  transition: 0.3s;
}

/* El estilo del botón cuando estás en esa página */
.navbar a.router-link-exact-active {
  background-color: #34495e; /* El color oscuro que se veía en tu ejemplo */
}

.page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>