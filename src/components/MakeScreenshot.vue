<template lang="jade">
    p This is screenshotmaker!
    div(v-if="form")
        input(v-model="url", placeholder="URL")
        button(v-on:click="makeScreenshot") Make screenshot
    div(v-if="error")
        p Error
    div(v-if="success")
        p Screenshot done!
    div(v-if="inprogress")
        p In progress
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
                inprogress: false,
                url: ''
            }
        },
        methods: {
            makeScreenshot: function(e) {
                this.form = false;
                this.inprogress = true;

                Vue.http.get('http://localhost:8888/screenshot?url='+this.url).then((response) => {
                    var res = JSON.parse(response.body);
                    this.success = true;
                    this.inprogress = false;
                }, (response) => {
                    this.error = true;
                    this.inprogress = false;
                });
            }
        }
    }
</script>
