<template>
    <div :class="[relevant ? 'bg-relevant' : 'bg-irrelevant']" class="search-result">
        <ProgressCircle id="progress" :colorInverted="!relevant"/>
    </div>
</template>

<script>
import ProgressCircle from './ProgressCircle.vue'

export default {
	components: { ProgressCircle },
	props: {
		relevant: { type: Boolean, default: true }
	}
}
</script>

<style scoped lang="scss">

    $width-md: 400px;
    $width-sm: 300px;

    .search-result {
        width: $width-md;
        height: $width-md/4.4;
        margin: 10px 0;
        border-radius: 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media only screen and (max-width: 1400px) {
            width: $width-sm;
            height: $width-sm/4.4;
        }
    }

    .bg-relevant {
        background-image: linear-gradient(#071238, #05081A);
    }

    .bg-irrelevant {
        background-image: linear-gradient(white, rgb(233, 233, 233));
    }

    #progress {
        position: relative;
        right: 20px;
        width: 40px;
        height: 40px;
    }
</style>
