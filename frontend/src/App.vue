<script setup>
import { RouterView } from 'vue-router';
import Switch from './components/Switch.vue';
</script>

<template>
    <Switch />
    <RouterView />
</template>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        background-color: #e6e6e6;
        color: #121212;

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
        
        p {
            margin: 0;
            padding: 0;
        }
    }
</style>