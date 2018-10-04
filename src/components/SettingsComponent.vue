<template>
    <div class="settings">
        <div class="form__field">
            <button v-on:click="resetColors">New colors</button>
        </div>
        <div class="form__field">
            <div class="form__input">
                <swatches :value="color" :colors="colors" shapes="circles" @input="changeColorValue" row-length=5>
                </swatches>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import Swatches from 'vue-swatches'

import "vue-swatches/dist/vue-swatches.min.css"

export default {
    name: 'SettingsComponent',
    components: { 
      Swatches 
    },
    computed: {
        color: function () {
            return this.$store.state.backgroundColor
        },
        colors: function () {
            return this.$store.state.availableColors
        }
    },
    methods: {
        changeColorValue: function (value) {
            this.$store.commit("setBackgroundColor", value)
        },
        resetColors: function () {
            this.$store.dispatch("fetchAvailableColors")
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .settings {
        background-color: lightblue;
    }

    .form__field {
        float: left;
        padding: 10px;
    }
</style>
