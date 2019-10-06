<template>
    <div id="app">
        <BlockComponent></BlockComponent>
    </div>
</template>

<script>
import BlockComponent from './components/BlockComponent.vue';

export default {
    name: 'app',
    components: {
        BlockComponent
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;
}
</style>
