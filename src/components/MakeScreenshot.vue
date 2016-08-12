<template>
    <p>This is screenshotmaker!</p>
    <div v-if="form">
        <input v-model="url" placeholder="URL" />
        <button v-on:click="makeScreenshot">Make screenshot</button>
    </div>
    <div v-if="error">
        <p>Error</p>
    </div>
    <div v-if="success">
        <p>Screenshot done!</p>
    </div>
    <div v-if="inprogresss">
        <p>In progress</p>
    </div>
</template>

<style>
</style>

<script>
    import Vue from 'vue';

    export default{
        data(){
            return {
                form: true,
                error: false,
                success: false,
                inprogresss: false,
                url: ''
            }
        },
        methods: {
            makeScreenshot: function(e) {
                this.$set('form', false);
                this.$set('inprogresss', true);


                Vue.http.get('http://localhost:8888/screenshot?url='+this.url).then((response) => {
                    var res = JSON.parse(response.body);
                    this.$set('success', true);
                    this.$set('inprogresss', false);
                }, (response) => {
                    this.$set('error', true);
                    this.$set('inprogresss', false);
                });
            }
        }
    }
</script>
