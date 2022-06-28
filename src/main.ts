import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import Particles from "particles.vue3"
import VueScrollTo from "vue-scrollto";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaPhoneSquareAlt, HiSolidMail, BiFileEarmarkTextFill, IoLogoLinkedin, FaGithubSquare } from 'oh-vue-icons/icons' 

addIcons(FaPhoneSquareAlt, HiSolidMail, BiFileEarmarkTextFill, IoLogoLinkedin, FaGithubSquare);

createApp(App).use(Particles).use(VueScrollTo).component("v-icon", OhVueIcon).mount('#app')
