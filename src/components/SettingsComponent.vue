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
        <div class="form__field">
            <div class="md-layout-item">
                <md-field>
                    <label for="mirror">Mirroring</label>
                    <md-select v-model="mirror" name="mirror" id="mirror">
                        <md-option value="none">None</md-option>
                        <md-option value="vertical">Vertical</md-option>
                        <md-option value="horizontal">Horizontal</md-option>
                        <md-option value="inverse">Inverse</md-option>
                        <md-option value="quad">Quad</md-option>
                        <md-option value="quad-inverse">Quad inverse</md-option>
                        <md-option value="octo">Octo</md-option>
                    </md-select>
                </md-field>
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
        },
        mirror: {
            get: function () {
                return this.$store.state.mirror
            },
            set: function (value) {
                this.changeMirrorValue(value)
            }
        }
    },
    methods: {
        changeColorValue: function (value) {
            this.$store.commit("setBackgroundColor", value)
        },
        resetColors: function () {
            this.$store.dispatch("fetchAvailableColors")
        },
        changeMirrorValue: function (value) {
            this.$store.commit("setMirror", value)
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
