<template>
    <div style="border: 1px solid blue">
        <div :class="[colorInverted ? 'black-fill' : 'white-fill', {completed: 'filled'}]" class="card-circle"></div>
        <div :class="[colorInverted ? 'black-fill' : 'white-fill']" class="card-circle blured"></div>
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
