<template>
  <div>
      <div>
          <SettingsComponent></SettingsComponent>
      </div>
      <div>
          <CanvasComponent></CanvasComponent>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import SettingsComponent from './SettingsComponent.vue'
import CanvasComponent from './CanvasComponent.vue'
export default {
  name: 'GridPaintComponent',
  components: {
    SettingsComponent,
    CanvasComponent
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
