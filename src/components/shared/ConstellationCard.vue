<template>
    <div class="card-background">

        <div class="card-header">
            <div class="card-title header-white">{{title}}</div>
            <ProgressCircle :completed="completed" id="progress"/>
        </div>

        <div class="card-description text-white">
            {{description}}
        </div>
    </div>
</template>

<script>
import ProgressCircle from './ProgressCircle.vue'

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
    $width-md: 200px;
    $width-sm: 150px;
    $width-xs: 100px;

    .card-background {
        height: 1.4*$width-md;
        width: $width-md;
        padding: 46px 21px 47px 30px;
        background-image: $constellation-card-bg;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 30px;
        position: relative;

        // &::before {
        //     content: '';
        //     position: absolute;
        //     bottom: 0;
        //     left: 10%;
        //     width: 80%;
        //     background-color: linear-gradient(180deg, $navy 0%, $midnight 100%);
        //     height: 50%;
        //     box-shadow: 0 0 40px;
        //     z-index: -1;
        // }
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
        width: 32px;
        height: 32px;
    }

    @media only screen and (max-width: 1200px) {
        .card-background {
            width: $width-sm;
            height: 1.4*$width-sm;
            margin: 20px;
        }

        .header-white {
            font-size: 1rem;
        }

        .card-description {
            font-size: .5rem
        }
    }

    @media only screen and (max-width: 500px) {
        .card-background {
            width: $width-xs;
            height: 1.4*$width-xs;
            margin: 15px;
            padding: 30px 21px 30px;
        }

        .text-white {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
        }

        #progress {
            width: 20px;
            height: 20px;
        }
    }
</style>
