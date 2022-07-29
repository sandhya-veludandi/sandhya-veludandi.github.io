<script lang="ts">
import { defineComponent } from 'vue'
import Mobile from './components/Mobile.vue'
import PageLoader from './components/PageLoader.vue'
import SpaceHeader from './components/SpaceHeader.vue'
import Navbar from './components/Navbar.vue'
import Sections from './components/Sections.vue'
import Footer from './components/Footer.vue'


export default defineComponent({
  components: {
    Mobile,
    PageLoader,
    SpaceHeader,
    Navbar,
    Sections,
    Footer
  },
  data: () => {
    return {
      windowWidth: 0,
      windowHeight: 0,
      isMobile: false,
      isLoading: true
    }
  },
  created() {
    this.checkScreen();  
  }, 
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight; 
      if (this.windowWidth < 620) {
        this.isMobile = true; 
        return; 
      }
      this.isMobile = false; 
      return; 
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
})

</script>

<template>
  <div v-show="!isMobile && isLoading">
    <PageLoader />
  </div>
  <div v-if ="!isMobile" class="sticky-name">SANDHYA VELUDANDI</div>
  <header v-if="!isMobile">
    <SpaceHeader />
  </header>
  <header v-else>
    <Mobile />
  </header>
  <main v-show="!isMobile">
    <Navbar />
    <Sections />
  </main>
  <div v-show="!isMobile"><Footer /></div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

body {
margin: 0;
padding: 0;
cursor: default !important;  
background-color: #111d4A;  
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-size: 100%;
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

.sticky-name { 
  position: sticky; 
  top: 0;   
  height: max(5vh, 3vw);
  padding: 0.25vmin;
  font-family: 'Montserrat', sans-serif;
  font-size: max(3.8vh, 2.5vw); 
  font-weight: 900; 
  color: #111d4A;  
  letter-spacing: 0.7vw;
  text-align: center; 
  background-color: #D1D7ED; 
  z-index: 1;
}



</style>
