<template>
  <div id="app">
    <navbar-element></navbar-element>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarElement from './components/NavbarElement.vue';

export default {
  name: 'App',
  components: {
    NavbarElement,
  },
};
</script>

<style lang="scss">
</style>
