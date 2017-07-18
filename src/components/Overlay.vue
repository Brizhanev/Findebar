<template>
  <div class="overlay valign-wrapper">
    <div class="container center-align">
      <h1>Findebar - первый сервис для поиска человека после случайной встречи!</h1>
      <v-btn @click.native="close" horizontal large ><v-icon left>done</v-icon>Начать использование</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    methods: {
      close: function () {
        this.$bus.$emit('overlayClose')
      },
      onInput () {
      }
    },
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped>
  .overlay {
    position: absolute;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    z-index: 10000;
  }
  h1 {
    color: rgba(255,255,255,0.9);
    text-shadow: 0px 1px #ccc;
  }
</style>