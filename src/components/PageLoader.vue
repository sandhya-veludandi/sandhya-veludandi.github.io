<script lang="ts">
</script>
<template>
    <div id="loading">
        <img
        class="img"
        src="./gifs/wink-slow.gif"
        alt="loading..."
        width="200"
        />
  </div>
</template>

<style>
#loading {
  position: absolute;
  z-index: 1000;
  background-color: #111d4a;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 100vh;
}
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
}
</style>