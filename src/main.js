import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

var vueApp = new Vue({
    el: 'body',
    components: {App},
})
