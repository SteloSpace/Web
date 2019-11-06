<template>
    <div class="background-container">
        <div class="text">
            <h2 class="heading-secondary section">
                Starting with the topics you need most
            </h2>

            <p>With more coming soon</p>
        </div>

        <div class="background">
            <GreyRow/>
            <ColoredRow/>
            <GreyRow/>
        </div>

    </div>

</template>

<script>
import ColoredRow from '../compound/ColoredRow'
import GreyRow from '../compound/GreyRow'

export default {
	components: {
		ColoredRow,
		GreyRow
	}
}
</script>

<style lang="scss" scoped>
    .background-container {
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
        text-align: center;
        height: calc(100vh - 200px);
        position: relative;
        padding: 100px 0;
    }

    .background {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            background-image: linear-gradient(
                    rgba(255, 255, 255, .8) 30%,
                    #0000,
                    rgba(255, 255, 255, .8) 75%
            );
        }
    }

    .background > div {
        margin-top: 50px;

        @media only screen and (max-width: 1400px) {
            margin-top: 30px;
        }

        @media only screen and (max-width: 800px) {
            margin-top: 20px;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        height: inherit;
        max-width: 600px;
        z-index: 1;
    }
</style>
