<template>
    <div v-bind:class="[relevant ? 'bg-relevant' : 'bg-irrelevant']" class="search-result">
        <ProgressCircle id="progress" v-bind:colorInverted="!relevant"/>
    </div>
</template>

<script>
import ProgressCircle from './ProgressCircle.vue'

export default {
    components: {
        ProgressCircle
    },
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

    $search-height: 90px;

    .search-result {
        width: 50%;
        height: $search-height;
        margin: 10px 0;
        border-radius: 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .bg-relevant {
        background-image: linear-gradient(#071238, #05081A);
    }

    .bg-irrelevant {
        background-image: linear-gradient(white, rgb(173, 173, 173));
    }

    #progress {
        position: relative;
        right: 20px;
    }
</style>
