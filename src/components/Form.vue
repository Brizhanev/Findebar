<template>
  <div class="form z-depth-3">
    <div class="row">
      <div class="input-field col s12">
    
            <v-select name="select"
                      id="select"
                      :items="items"
                      select-text="Выберите место встречи"
            ></v-select>
            <label for="select">Выберите место встречи</label>
            <v-btn @click.native="close"  class="red">Далее</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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