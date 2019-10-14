<template>
    <div>
        <div class="card-background">

            <div class="card-header">
                <div class="card-title Text-Style-6">{{title}}</div>
                <div class="card-circle" :class="{ filled: isFilled }"></div>
            </div>

            <div class="card-description Text-Style-7">
                {{description}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
		title: { type: String },
        description: { type: String },
        isFilled: {
            type: Boolean,
            default: false
        },
	}
}
</script>

<style scoped lang="scss">

    .card-background {
        width: 354px;
        height: 520px;
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

    .circle-border {
        border: 4px solid white;
        border-radius: 50px;
        width: 50px;
        height: 50px;
    }

    .card-circle {
        @extend .circle-border;

        &::before {
            @extend .circle-border;
            content: '';
            filter: blur(4px);
            margin: -4px;
            display: inline-block;
        }
    }

    .filled {
        background: white;
    }
</style>
