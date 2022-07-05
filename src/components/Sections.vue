<script setup lang="ts">
</script>

<template>
    <main class="main">
        <section class="slide" id="tab-resume">
            <div class="iframe-container">
                <iframe src="https://drive.google.com/file/d/1mzODkzTdz_HydMdlZSKzA5iIzLG0nL9U/preview" title="Sandhya Veludandi's Resume" frameborder="0" allowfullscreen></iframe>
            </div>
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

.iframe-container {
margin: 4em auto;
max-width: 50em;
width: 100%;
}
iframe {
  aspect-ratio: 8.5 / 11;
  width: 100%;
  height: 100%;
  border: none;
}
</style>