<template>
    <div v-bind:class="[{relevant:relevant}, irrelevant]" class="search-result">
        <div class="card-circle"></div>
    </div>
</template>

<script>
export default {
    props: {
        relevant: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../styles/colors';

    .search-result {
        width: 50%;
        height: 90px;
        margin: 0;
        padding-top: 10px;
        border-radius: 20px;
        position: relative;
    }

    .relevant {
        background-image: gradient(to bottom, #071238, #05081a);
    }

    .irrelevant {
        background-image: gradient(to bottom, white, rgb(173, 173, 173));
    }

    .card-circle {
        right: 9px;
        position: absolute;
        border: 4px solid white;
        border-radius: 50px;
        width: 50px;
        height: 50px;
    }

    .blured {
        filter: blur(4px);
    }
</style>
