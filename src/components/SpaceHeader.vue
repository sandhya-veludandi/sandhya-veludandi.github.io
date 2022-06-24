<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


export default defineComponent({
  components: {
      Carousel,
      Slide
  },
  data: () => {
    return {
        slides: {
            newGrad: "👩🏽‍🎓New Grad!",
            statistician: "📈Statistician",
            computerScientist: "💻Computer Scientist",
            softwareEngineer: "⌨️Software Engineer",
            webDeveloper: "👩🏽‍💻Web Developer",
            dataScientist: "📊Data Scientist",
        }
    }
  }
})

</script>

<template>
    <Particles 
    id="particles"
    :options="{
        particles: {
        number: {
            density: {
            enable: false,
            value_area: 1500,
            },
            value: 100,
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
        background: {
        color: '#111d4A'
        },
        fullScreen: {
            enable: false
        },
        fpsLimit: 60,
        interactivity: {
        detectsOn: 'canvas',
        events: {
            onHover: {
            enable: true,
            mode: 'grab',
            },
            onClick: {
            enable: true,
            mode: 'push',
            }
        },
        modes: {
            grab: {
            line_linked: {
                opacity: 0.85
            },
            distance: 90
            },
            push: {
                particles_nb: 1
            }
        }
        },
        detectRetina: true,
    }"
    />
    <div id="space-header">
        <Transition appear name="fade">
            <h1>HI, UNIVERSE!</h1>
        </Transition> 
        <Transition appear name="intro-fade">
            <span class="roles">
                <div class="intro">I'm Sandhya Veludandi, and I'm a</div>
            </span>
        </Transition>
        <Transition appear name="role-fade">
            <Carousel :autoplay="2000" :wrap-around="true">
                <Slide v-for="slide in slides" :key="slide" class="slides">
                    {{ slide }}
                </Slide>
            </Carousel>
        </Transition>
    </div> 
</template>

<style scoped>
canvas {
display: block;  
}

#particles {
position: static !important; 
background-color: #111d4A;  
height: 83vh; 
width: 100%; 
}

#space-header {
color: white; 
position: absolute; 
width: 70%; 
top: 25%; 
left: 23%; 
margin-left: -110px; 
text-align: center; 
font-family: 'Archivo Black', sans-serif; 
white-space: nowrap; 
}

#space-header h1 { 
font-size: 85px; 
color: #fff; 
margin-bottom: 0.2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.intro-fade-enter-active,
.intro-fade-leave-active {
  transition: opacity 3s ease-in 0.6s;
}

.intro-fade-enter-from,
.intro-fade-leave-to {
  opacity: 0;
}

.role-fade-enter-active,
.role-fade-leave-active {
  transition: opacity 1s ease-in 2.2s;
}

.role-fade-enter-from,
.role-fade-leave-to {
  opacity: 0;
}

.intro {
    font-size: 1.15em; 
}

.slides {
    font-size: 1.5em; 
}


</style>
