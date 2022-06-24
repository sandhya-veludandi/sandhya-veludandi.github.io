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
    top: 2.5em; 
}

.tabs-container {
    position: sticky; 
    border-color:#8380B6; 
    border-radius: 0.1rem; 
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #8789c0;
    z-index: 1;
}

.tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color:white;
    letter-spacing: 0.1rem;
	transition: all 0.5s ease;
    font-size: 0.8rem; 
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