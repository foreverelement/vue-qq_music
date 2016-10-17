import Vue from 'vue'
import App from './App'
import Router from './router'
import sync from 'vuex-router-sync'
import VueTouch from 'vue-touch'
import VueResource from 'vue-resource'
import store from './vuex/store'



//import VueAnimatedList from 'vue-animated-list'

Vue.config.devtools = true;

Vue.use(VueResource);
Vue.use(VueTouch)
//Vue.use(VueAnimatedList);

Vue.http.options.root = '/static';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;


sync(store, router);
Router.start(App, '#app');

window.router = Router;