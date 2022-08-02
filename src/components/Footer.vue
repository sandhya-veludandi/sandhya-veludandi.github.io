<script setup lang="ts">
</script>

<template>
    <footer>
    <Particles 
    id="tsparticles"
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
            direction: 'right',
            random: true,
            straight: true,
            speed: 0.25,
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
        <div class="flex-container">
            <a href="tel:3392241910"><v-icon name="fa-phone-square-alt" animation="float"/></a>
            <a href="mailto:sandhya-veludandi@pm.me"><v-icon name="hi-solid-mail" animation="float"/></a>
            <a href="https://www.linkedin.com/in/sandhya-veludandi"><v-icon name="io-logo-linkedin" animation="float"/></a>
            <a href="https://github.com/sandhya-veludandi"><v-icon name="fa-github-square" animation="float"/></a>
        </div>
    </footer>
</template>

<style scoped>

canvas {
    display: block; 
}

#tsparticles {
position: absolute; 
height: 3.5vw;
z-index: -1;
width: 100%;
}

.flex-container {
    margin-left: 9vw; 
    margin-right: 9vw;  
    margin-top: 0.3vw; 
    padding: 0.45vw; 
    display: flex;
    justify-content: space-evenly;  
}

a {
text-decoration: none; 
}

a:visited {
    color: #d6dce0 ;
}

.ov-icon {
color: white; 
width: max(4.5vh, 3vw);
height: max(4.5vh, 3vw); 
}

.ov-icon:hover {
  cursor: pointer;
  color: #d6dce0;
}

</style>