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
            enable: true
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
    <div class="space-header">
        <Transition appear name="fade">
            <h1>HI, UNIVERSE!</h1>
        </Transition> 
        <Transition appear name="intro-fade">
            <span class="roles">
                <div class="intro">I am <name id="name">Sandhya Veludandi</name>, and a</div>
            </span>
        </Transition>
        <Transition appear name="role-fade">
            <Carousel :autoplay="2000" :wrap-around="true">
                <Slide v-for="slide in slides" :key="slide" class="slides">
                    {{ slide }}
                </Slide>
            </Carousel>
        </Transition>
        <Transition appear name="footer-fade">
            <div class="flex-container">
                <a href="tel:3392241910"><v-icon name="fa-phone-square-alt" animation="float"/></a>
                <a href="mailto:sandhya-veludandi@pm.me"><v-icon name="hi-solid-mail" animation="float"/></a>
                <a href="https://drive.google.com/file/d/1mzODkzTdz_HydMdlZSKzA5iIzLG0nL9U/preview"><v-icon name="bi-file-earmark-text-fill" animation="float"/></a>
                <a href="https://www.linkedin.com/in/sandhya-veludandi"><v-icon name="io-logo-linkedin" animation="float"/></a>
                <a href="https://github.com/sandhyaveludandi"><v-icon name="fa-github-square" animation="float"/></a>
            </div>
        </Transition>
        <a href="https://github.com/zemzot"><img class="nyan" src="./gifs/nyancat-rainbow-cat.gif"/></a>
    </div> 
    
</template>

<style scoped>
canvas {
display: block;  
}

#particles {
position: static; 
background-color: #111d4A;  
}

.space-header {
top: 20vh;
color: white; 
position: absolute; 
display: flex;
flex-direction: column; 
text-align: center;
font-family: 'Archivo Black', sans-serif; 
width: 100%;

}

.space-header h1 { 
font-size: 5vh;
color: #fff; 
margin: 1vh;
padding: 0;
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

.footer-fade-enter-active,
.footer-fade-leave-active {
  transition: opacity 1s ease-in 3s;
}

.footer-fade-enter-from,
.footer-fade-leave-to {
  opacity: 0;
}

.intro {
    font-size: 2.3vh;
    color: #d6dce0;
}

.slides { 
    font-size: 3vh;
    color: #C2CAE8;
    margin-top: 1vh;
    margin-bottom: 10vh;
}

.flex-container {
    display: flex; 
    justify-content: space-evenly;
    margin-bottom: 10vh;
}

a {
    text-decoration: none; 
}

a:visited {
    color: #C2CAE8;
}

.ov-icon {
    color: #d6dce0; 
    width: 4.5vh; 
    height: 4.5vh;
}

.ov-icon:hover {
  cursor: pointer;
  color: #C2CAE8;
}

#name {
    color: #45F0DF; 
}

.nyan {

    cursor: pointer; 
}

</style>
