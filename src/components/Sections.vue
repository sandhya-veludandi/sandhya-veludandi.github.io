<script setup lang="ts">
</script>

<template>
    <main class="main">
        <section class="slide" id="tab-resume">
            <iframe src="https://drive.google.com/file/d/1mzODkzTdz_HydMdlZSKzA5iIzLG0nL9U/preview" allow="autoplay"></iframe>
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
padding: 0 2vw;
}
  
.slide h1 {
font-size: 0.25vw;
margin: 0;
letter-spacing: 1vw;
}

#tab-resume {
height: 85vw;
}

iframe {
margin: 0; 
padding: 0; 
border: 0; 
width: 60vw;  
height: 75vw; 
overflow: hidden; 
}

</style>