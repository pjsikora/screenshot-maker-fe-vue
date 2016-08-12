<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <ul>
      <li v-for="(index, item) in items">
        {{ item }}
      </li>
    </ul>
  </div>

</template>

<script>
import Vue from 'vue';

export default {
  data: function(){
    return { items: [ 'ding']};
  },
  ready: function() {
    this.fetchFiles();
  },

  methods: {
    fetchFiles: function() {
      Vue.http.get('http://localhost:8888/list').then((response) => {
        var res = JSON.parse(response.body);
        this.$set('items', res.files);

      }, (response) => {
        console.log(response);
      });
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
