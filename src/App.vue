<template>
  <router-view />
</template>

<script>
export default {
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #222; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
