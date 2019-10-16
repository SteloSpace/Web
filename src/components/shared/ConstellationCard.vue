<template>
    <div class="card-background">

        <div class="card-header">
            <div class="card-title Text-Style-6">{{title}}</div>
            <ProgressCircle :completed="completed" id="progress"/>
        </div>

        <div class="card-description Text-Style-7">
            {{description}}
        </div>
    </div>
</template>

<script>
import ProgressCircle from "./ProgressCircle.vue"

export default {
    components: {
        ProgressCircle
    },
    props: {
		title: { type: String },
        description: { type: String },
        completed: {
            type: Boolean,
            default: false
        },
	}
}
</script>

<style scoped lang="scss">
    $width: 200px;

    .card-background {
        height: $width*1.4;
        min-width: $width;
        max-width: $width;
        padding: 46px 21px 47px 30px;
        background-image: $constellation-card-bg;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 30px;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 10%;
            width: 80%;
            height: 50%;
            box-shadow: 0 0 40px;
            z-index: -1;
        }
    }

    .card-header {
        display: flex;
        justify-content: space-between;
    }

    .card-title {
        width: 60%;
    }

    #progress {
        position: relative;
        right: 0;
        top: 0;
    }
</style>
