import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// Components
import List from './components/List';
import MakeScreenshot from './components/MakeScreenshot';

// HTTP configuration
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


var App = Vue.extend({
    template: `
        <div id="app">
          <h1>Screenshot App!</h1>
          <p>
            <a v-link="{ path: '/list' }">Go to List</a>
            <a v-link="{ path: '/makescreenshot' }">Make screenshot</a>
          </p>
          <!-- route outlet -->
          <router-view></router-view>
        </div>
    `
});


// Router configuration
Vue.use(VueRouter);
var router = new VueRouter();

router.map({
    '/list': {
        component: List
    },
    '/makescreenshot': {
        component: MakeScreenshot
    }
});

// Start app
router.start(App, 'app');