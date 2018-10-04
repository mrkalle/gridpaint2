import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

/* eslint-disable */

Vue.use(Vuex)

const state = {
  backgroundColor: '#F64272',
  availableColors: []
}

const mutations = {
  setBackgroundColor (state, color) {
    state.backgroundColor = color
  },
  addAvailableColor (state, color) {
    if (state.availableColors.length == 0) {
      state.backgroundColor = color;
    }

    state.availableColors.push(color)
  },
  clearAvailableColors (state) {
    state.availableColors = []
  }
}

const actions = {
  fetchAvailableColors (context) {
    axios({
      method: 'post',
      url: 'http://colormind.io/api/',
      data: JSON.stringify({
        'model': 'default'
      })
    })
    .then(function (response) {      
      context.commit('clearAvailableColors');

      var colors = response.data.result;

      for (var i = 0; i < colors.length; i++) {    
        var theColor = "#";
        
        var hex = colors[i][0].toString(16);
        theColor += hex.length == 1 ? "0" + hex : hex;

        hex = colors[i][1].toString(16);
        theColor += hex.length == 1 ? "0" + hex : hex;

        hex = colors[i][2].toString(16);
        theColor += hex.length == 1 ? "0" + hex : hex;

        context.commit('addAvailableColor', theColor);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

const getters = {
  getBackgroundColor: state => state.backgroundColor,
  getAvailableColors: state => state.availableColors
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
