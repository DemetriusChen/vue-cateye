import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getData from './modules/getData'
import carousel from './modules/carousel'
import movieReleasedList from './modules/movieReleasedList'

export default new Vuex.Store({
   modules:{
       getData,
       carousel,
       movieReleasedList
   }
})