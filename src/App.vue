<template>
  <div id="app">
    <gmap-map 
      :center="center"
      :zoom="14"
      style="width: 100%; height: 100%; position: absolute; left:0; top:0" map-type-id="terrain"
    >
      <gmap-info-window 
        :position="center">
        {{ marker[0].text }}
      </gmap-info-window>
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        :label="m.label"
        @click="this.center=m.position"
      ></gmap-marker>
    </gmap-map>
    <f-form></f-form>
    <transition name="fade">
      <f-overlay v-if="isOverlay"></f-overlay>
    </transition>
  </div>
</template>

<script>
import db from './firebase'
import Form from './components/Form'
import Overlay from './components/Overlay'

export default {
  name: 'app',
  firebase: {
    marker: db.ref('markers')
  },
  components: {
    'f-form': Form,
    'f-overlay': Overlay
  },
  data () {
    return {
      isOverlay: true,
      center: { lat: 48.33, lng: 39.98 },
      markers: [{
        position: { lat: 48.33, lng: 39.98 },
        label: 'Привет',
        title: 'Привет'
      }, {
        position: { lat: 11.0, lng: 11.0 }
      }]
    }
  },
  mounted () {
    this.overlayClose = () => {
      this.isOverlay = false
    }
    this.$bus.$on('overlayClose', this.overlayClose)
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}
</style>
