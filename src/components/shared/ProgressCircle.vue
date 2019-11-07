<template>
    <div :class="[colorInverted ? 'black-fill' : 'white-fill', completed? 'filled' : '']" class="progress-circle">
        <div class="blurred"></div>
    </div>
</template>

<script>
export default {
	props: {
		completed: { type: Boolean, default: false },
		colorInverted: { type: Boolean, default: false }
	}
}
</script>

<style scoped lang="scss">
    $circle-border-weight: 3px;

    .progress-circle {
        border-radius: 100%;
    }

    .blurred {
        width: inherit;
        height: inherit;
        border: inherit;
        border-radius: inherit;
        background-color: inherit;
        filter: blur($circle-border-weight);
        margin: -$circle-border-weight;
    }

    .white-fill {
        border: $circle-border-weight solid white;
    }

    .black-fill {
        border: $circle-border-weight solid black;
    }

    .filled {
        background-color: white;
    }
</style>
