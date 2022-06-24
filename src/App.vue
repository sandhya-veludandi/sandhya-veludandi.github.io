<script setup lang="ts">
import SpaceHeader from './components/SpaceHeader.vue'
import Navbar from './components/Navbar.vue'
import Sections from './components/Sections.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="sticky-name">SANDHYA VELUDANDI</div>
  <header>
    <SpaceHeader />
  </header>  
  <main>
    <Navbar />
    <Sections />
  </main>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');


body {
  margin: 0; 
  cursor: default !important;  
  background-color: #111d4A;  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#color1 {
  background-color: #8789c0; 
}

#color2 {
  background-color: #45F0DF; 
}

#color3 {
  background-color: #C2CAE8; 
}

#color4 {
  background-color: #8380B6; 
}

#color5 {
  background-color: #111d4A; 
  color: white; 

}

#sticky-name { 
  position: sticky; 
  top: 0;   
  padding: 0.15em; 
  font-family: 'Montserrat', sans-serif;
  font-size: 30px; 
  font-weight: 900; 
  color: #111d4A;  
  letter-spacing: 8px;
  text-align: center; 
  background-color: #C2CAE8; 
  z-index: 1; 
  
}

</style>
