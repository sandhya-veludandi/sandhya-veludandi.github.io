<script setup lang="ts">
</script>

<template>
    <div class="tabs-container" id="navbar">
        <Link v-scroll-to="'#tab-resume'" className='tab'>
            Resume
        </Link>
    </div>
</template>

<style >

#navbar {
    top: 3vw; 
}

.tabs-container {
    position: sticky; 
    border-color:#8380B6; 
    border-radius: 0.1vw; 
    display: flex;
    flex-direction: row;
    height: 5.5vw;
    background: #8789c0;
    z-index: 1;
}

.tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color:white;
    letter-spacing: 0.1vw;
	transition: all 0.5s ease;
    font-size: 1vw; 
    cursor: pointer; 
}

.tab:hover {
  color:white;
  background: #ABACD3; 
  transition: all 0.5s ease;
}

.active {
  background-color: #ABACD3;
}
</style>