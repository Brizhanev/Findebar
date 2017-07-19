<template>
  <div class="form z-depth-3">
    <div id="step-1" v-if="step == 1">
      <v-row>
        <v-select name="place"
          id="place"
          :items="placeItems"
          select-text="Выберите место встречи"
          v-model="place"
        ></v-select>
          <v-btn @click.native="nextStep" class="red">Далее</v-btn>
      </v-row>
    </div>
    <div v-if="step == 2">
      <v-row>
        <gmap-autocomplete :value="description"
        @place_changed="setPlace">
        </gmap-autocomplete>
      </v-row>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        step: 1,
        place: 0,
        placeItems: [
          {
            id: 1,
            text: 'На улице'
          },
          {
            id: 2,
            text: 'В торговом центре'
          },
          {
            id: 3,
            text: 'В транспорте'
          }
        ]
      }
    },
    methods: {
      nextStep () {
        this.step++
      }
    }
  }
</script>

<style scoped>
  .form {
    width: 300px;
    position: absolute;
    background: #fff;
    padding: 15px;
    left: 15px;
    top: 75px;
  }
</style>