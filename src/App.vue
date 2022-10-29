<script setup>
import WelcomeBox from "./components/WelcomeBox.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>¡Pongámonos a</h1>
      <WelcomeBox msg=" Cocinar!" />
      <button id="ingSearchB" type="button" v-on:click="">Hago clic</button>
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}
header .wrapper {
  display: flex;
  place-items: flex-start;
  white-space: pre-wrap;
  background-color: #FFFFFF15;
  padding: 11px;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

button{
  border-radius: .4rem;
  margin: 1rem;
  background: #FFFFFF15;
  color: currentcolor;
  padding: inherit;
}

button:hover{
  background: #856c6c15;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header{
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    white-space: pre-wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
>