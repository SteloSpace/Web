<template>
    <div style="border: 1px solid blue">
        <div v-bind:class="[colorInverted ? 'inversed' : 'normal', {completed: 'filled'}]" class="card-circle"></div>
        <div v-bind:class="[colorInverted ? 'inversed' : 'normal']" class="card-circle blured"></div>
    </div>
</template>

<script>
export default {
    props: {
        completed: {
            type: Boolean,
            default: false
        },
        colorInverted: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../styles/colors';

    $circle-size: 50px;
    $circle-border-weight: 4px;

    .card-circle {
        position: absolute;
        left: -$circle-size - $circle-border-weight;
        top: -($circle-size + $circle-border-weight)/2;
        border-radius: $circle-size;
        width: $circle-size;
        height: $circle-size;
    }

    .normal {
        border: $circle-border-weight solid white;
    }

    .inversed {
        border: $circle-border-weight solid black;
    }

    .filled {
        background-color: white;
    }

    .blured {
        filter: blur(4px);
    }
</style>
