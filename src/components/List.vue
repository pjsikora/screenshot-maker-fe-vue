<template>
    <p>This is list!</p>
    <ul>
        <li v-for="(index, item) in items">
            {{ item }}
        </li>
    </ul>
</template>
<style>

</style>
<script>
    import Vue from 'vue';

    export default{
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
