<script lang="ts">
</script>
<template>
    <div class="loading">
        <img
        class="img"
        src="./gifs/wink-slow.gif"
        alt="Loading..."
        width="200"
        />
        <h2>Loading...  </h2>
  </div>
  <Particles 
    id="pparticles"
    :options="{
        particles: {
        number: {
            density: {
            enable: false,
            value_area: 1500,
            },
            value: 50,
        },
        shape: {
            type: 'star',
            stroke: {
            width: 0.8,
            color: '#45f0df'
            }
        },
        line_linked: {
            enable: false, 
            distance: 90, 
            opacity: 1, 
            width: 1.5
        },
        move: {
            enable: true,
            direction: 'left',
            random: true,
            straight: true,
            speed: 15,
            outMode: 'out'      
        },
        size: {
            anim: {
            speed: 100, 
            size_min: 0.03
            },
            random: true,
            value: 1.25,
        },
        opacity: {
            anim: {
                enable: true,
                speed: 1.25,
                opacity_min: 0.3
            },
            value: 1,
            random: true
        }
        },
        fullScreen: {
            enable: false
        },
        fpsLimit: 60,
        interactivity: {
        detectsOn: 'canvas'
        },
        detectRetina: true,
    }"
    />
  
</template>

<style scoped>

.loading {
  position: fixed;
  z-index: 10;
  margin: auto;
  margin-top: 20%;
  margin-left: 40vw;
  text-align: center;
  color: #45F0DF;
}

#pparticles {
  position: static;
  height: 100vh;
}

</style>