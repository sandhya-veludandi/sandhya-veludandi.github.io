<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel';

export default defineComponent({
  components: {
      Carousel,
      Slide
  },
  data: () => {
    return {
        slides: {
            dataScientist: "📊 Data Scientist",
            newGrad: "👩🏽‍🎓 New Graduate !",
            computerScientist: "💻 Computer Scientist",
            statistician: "📈 Statistician",
            softwareEngineer: "⌨️ Software Engineer",
            webDeveloper: "👩🏽‍💻 Web Developer"
        }
    }
  }
})

</script>

<template>
    <div class="space-header">
        <Transition appear name="fade">
            <h1>HI, UNIVERSE!</h1>
        </Transition> 
        <Transition appear name="intro-fade">
            <span class="roles">
                <div class="intro">I am Sandhya Veludandi, and a</div>
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
    
</template>

<style scoped>
canvas {
display: block;  
}

#particles {
position: static; 
background-color: #111d4A;  
height: calc(100vh - max(5vh, 3vw) - max(10.45vh, 5.5vw));
}

.space-header {
top: calc((100vh - max(5vh, 3vw) - max(10.45vh, 5.5vw))/3);
max-width: 100vw;
color: white; 
position: absolute; 
display: flex;
flex-direction: column; 
text-align: center; 
font-family: 'Archivo Black', sans-serif;
word-wrap: break-word;
}

.space-header h1 { 
font-size: 11vmin;
color: #fff; 
margin-bottom: 1vw;
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
  transition: opacity 2s ease-in 1s;
}

.intro-fade-enter-from,
.intro-fade-leave-to {
  opacity: 0;
}

.role-fade-enter-active,
.role-fade-leave-active {
  transition: opacity 1s ease-in 2s;
}

.role-fade-enter-from,
.role-fade-leave-to {
  opacity: 0;
}

.intro {
    font-size: 3.5vmin; 
}

.slides {
    height: 5vmin;
    font-size: 4vmin;
}

</style>
