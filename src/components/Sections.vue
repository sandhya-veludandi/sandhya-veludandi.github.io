<script setup lang="ts">
</script>

<template>
    <main class="main">
        <section class="slide" id="tab-resume">
            <iframe src="https://drive.google.com/file/d/1mzODkzTdz_HydMdlZSKzA5iIzLG0nL9U/preview" width="640" height="480" allow="autoplay"></iframe>
        </section>
    </main>
</template>

<style>
main {
background-color: #C2CAE8;
}
.tabs,
.slide {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0 2em;
}
  
.slide h1 {
font-size: 2rem;
margin: 0;
letter-spacing: 1rem;
}

#tab-resume {
height: 175vh;
}

iframe {
margin: 0; 
padding: 0; 
border: 0; 
width: 800px;  
height: 1000px; 
overflow: hidden; 
}

</style>